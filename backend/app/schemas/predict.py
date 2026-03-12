from pydantic import BaseModel

class PredictionBase(BaseModel):
    field_id: int
    features: dict

class PredictionResult(BaseModel):
    status: str
    prediction: str
    confidence: float
