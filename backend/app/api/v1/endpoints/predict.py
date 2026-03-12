from fastapi import APIRouter
from typing import Any

router = APIRouter()

@router.post("/")
def make_prediction() -> Any:
    """
    Kasallik yoki hosil prognozi (Disease or yield prediction).
    """
    return {"message": "Prediction endpoint"}
