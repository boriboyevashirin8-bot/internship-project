from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.db.base import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True, index=True)
    field_id = Column(Integer, ForeignKey("fields.id"))
    prediction_type = Column(String) # kasallik yoki hosil
    result = Column(String)
