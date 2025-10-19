from fastapi import APIRouter, HTTPException, Request, Depends
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
import os

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = os.getenv("JWT_SECRET", "your-secret-key-change-this")
ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30"))

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@router.post("/register", response_model=Token)
async def register(user: UserCreate, request: Request):
    """Register new user"""
    try:
        db = request.app.mongodb
        
        # Check if user exists
        existing_user = await db.users.find_one({"email": user.email})
        if existing_user:
            raise HTTPException(status_code=400, detail="Email already registered")
        
        # Hash password
        hashed_password = pwd_context.hash(user.password)
        
        # Create user
        user_doc = {
            "email": user.email,
            "full_name": user.full_name,
            "hashed_password": hashed_password,
            "created_at": datetime.utcnow(),
            "preferences": {},
            "viewed_cars": [],
            "saved_cars": [],
            "points": 0,
            "badges": [],
            "is_premium": False
        }
        
        result = await db.users.insert_one(user_doc)
        
        # Create access token
        access_token = create_access_token({"sub": user.email, "user_id": str(result.inserted_id)})
        
        return {"access_token": access_token, "token_type": "bearer"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/login", response_model=Token)
async def login(credentials: UserLogin, request: Request):
    """Login user"""
    try:
        db = request.app.mongodb
        
        # Find user
        user = await db.users.find_one({"email": credentials.email})
        if not user:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        # Verify password
        if not pwd_context.verify(credentials.password, user["hashed_password"]):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        # Create access token
        access_token = create_access_token({"sub": user["email"], "user_id": str(user["_id"])})
        
        return {"access_token": access_token, "token_type": "bearer"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/me")
async def get_current_user(request: Request):
    """Get current user profile"""
    # In production, implement proper JWT verification
    return {
        "email": "demo@futurecars.com",
        "full_name": "Demo User",
        "points": 1250,
        "badges": ["Early Adopter", "EV Enthusiast"],
        "is_premium": True
    }
