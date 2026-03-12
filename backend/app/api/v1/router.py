from fastapi import APIRouter
from app.api.v1.endpoints import ndvi, predict, sensors

api_router = APIRouter()

api_router.include_router(ndvi.router, prefix="/ndvi", tags=["ndvi"])
api_router.include_router(predict.router, prefix="/predict", tags=["predict"])
api_router.include_router(sensors.router, prefix="/sensors", tags=["sensors"])
