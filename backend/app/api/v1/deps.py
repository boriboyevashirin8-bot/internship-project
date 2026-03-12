from typing import Generator
from app.db.session import SessionLocal

def get_db() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

# Dependency for auth JWT verify (Node bilan hamkorlik)
def get_current_user():
    pass
