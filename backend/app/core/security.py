from jose import jwt
from app.core.config import settings

# JWT verify logic (Node.js bilan hamkorlik uchun)
def verify_token(token: str):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        return payload
    except Exception:
        return None
