from fastapi import APIRouter, HTTPException
from models.user import User, LoginRequest
from database import db
from services.auth_service import hash_password, verify_password
from utils.security import create_access_token

router = APIRouter()


@router.post("/register")
async def register(user: User):

    existing = await db.users.find_one(
        {"email": user.email}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    new_user = {
        "username": user.username,
        "email": user.email,
        "password": hash_password(user.password),
        "role": user.role
    }

    await db.users.insert_one(new_user)

    return {
        "message": "Admin Registered Successfully"
    }


@router.post("/login")
async def login(data: LoginRequest):

    user = await db.users.find_one(
        {"email": data.email}
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid Email"
        )

    if not verify_password(
            data.password,
            user["password"]):
        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    token = create_access_token(
        {
            "sub": user["email"]
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }