import os
from functools import wraps
from fastapi import Request, Body

from magicapi import background_router


from magicapi.Globals.G import g
from magicapi.Models.Task import Task, TaskParams

import inspect
from fastapi import HTTPException
import json
from datetime import datetime

from magicapi.Utils.random_utils import random_str
from magicapi.Errors import BackendException

from magicapi import settings

from magicapi.Decorators.helpers import async_safe


def run_in_background(f):
    router_path = f"/run_in_background/{f.__name__}"

    @background_router.post(router_path, tags=["background_tasks"])
    async def endpoint(
        request: Request,
        task_id: str = Body(...),
        secret_token: str = Body(...),
        params: str = Body(...),
    ):
        if settings.print_level > 1:
            print("endpoint just received!", "params", params)
        # get the task from dynamo
        response = Task.get_table().get_item(Key={"task_id": task_id})
        task_dict = response.get("Item")
        if not task_dict:
            raise HTTPException(status_code=404, detail="Invalid task id.")

        task = Task(**task_dict)
        if not task or secret_token != task.secret_token:
            raise HTTPException(status_code=404, detail="Invalid task request.")

        if task.status != "in-lambda":
            # when local sometimes this happens before lambda changes queued to in-lambda
            if not task.local:
                raise HTTPException(
                    status_code=404, detail="This task was already completed."
                )

        j_params = json.loads(params)
        args = j_params.get("args", [])
        kwargs = j_params.get("kwargs", {})
        if settings.print_level > 1:
            print("inspect", inspect.signature(f), "a", args, "k", kwargs)

        await async_safe(f, *args, **kwargs)

        return {"success": True, "message": ""}

    @wraps(f)
    def wrapper(*args, **kwargs):
        if not os.getenv("HasDB"):
            raise BackendException(
                message="You cannot add tasks if you do not add a DB!"
            )

        if settings.print_level > 1:
            print("given to function", "args", args, "kwargs", kwargs)
        task_params = TaskParams(args=list(args), kwargs=kwargs)
        now = datetime.utcnow()
        task = Task(
            task_id=random_str(30),
            url=g.base_url + router_path,
            status="queued",
            sent=False,
            secret_token=random_str(50),
            created_at=now,
            last_updated=now,
            params=task_params.json(),
            local=settings.local,
        )
        g.tasks.append(task)

        return task.task_id

    return wrapper
