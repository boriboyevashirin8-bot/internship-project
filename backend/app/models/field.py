from sqlalchemy import Column, Integer, String, Float
from app.db.base import Base

class Field(Base):
    __tablename__ = "fields"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    area = Column(Float)
