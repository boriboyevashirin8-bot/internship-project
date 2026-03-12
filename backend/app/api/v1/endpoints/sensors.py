from fastapi import APIRouter
from typing import Any

router = APIRouter()

@router.get("/")
def get_sensor_data() -> Any:
    """
    Get sensor data.
    """
    return {"message": "Sensors data endpoint"}
