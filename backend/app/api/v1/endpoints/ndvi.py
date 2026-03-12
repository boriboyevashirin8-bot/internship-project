from fastapi import APIRouter, Depends
from typing import Any

router = APIRouter()

@router.get("/")
def get_ndvi_data() -> Any:
    """
    Get NDVI (Normalized Difference Vegetation Index) data.
    """
    return {"message": "NDVI data endpoint"}
