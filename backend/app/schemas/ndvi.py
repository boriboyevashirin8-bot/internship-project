from pydantic import BaseModel
from datetime import datetime

class NDVIBase(BaseModel):
    field_id: int
    value: float
    date: datetime

class NDVICreate(NDVIBase):
    pass

class NDVI(NDVIBase):
    id: int

    class Config:
        from_attributes = True
