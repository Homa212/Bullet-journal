from fastapi import FastAPI, HTTPException, Depends, status, APIRouter
from app.db_setup import init_db, get_db
from contextlib import asynccontextmanager
from fastapi import Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session, joinedload, selectinload, load_only
from sqlalchemy import select, update, delete, insert
from app.models import User, WeeklyPlan, Habit, Todo, SleepTracker, WorkoutTracker, JournalYourDay, MoodTracker
from app.schemas.schemas import Token, UserOutSchema, UserRegisterSchema, WeeklyPlanSchema, HabitSchema, TodoSchema, SleepTrackerSchema, WorkoutTrackerSchema, JournalYourDaySchema, MoodTrackerSchema 
from sqlalchemy.exc import IntegrityError, NoResultFound
from app.security import hash_password, verify_password, create_access_token, get_current_user
from fastapi.security import OAuth2PasswordRequestForm
from typing import Annotated
from datetime import timedelta, datetime
from dotenv import load_dotenv 
import os

load_dotenv(override=True)

# TODO CREATE SETTINGSCLASS USING FASTAPI SOLUTION
ALGORITHM = os.getenv("ALGORITHM")  # e.g HS256
SECRET_KEY = os.getenv("SECRET_KEY")  # e.g asdsadsadsakjdsiaojdkasjdksaj
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv(
    "ACCESS_TOKEN_EXPIRE_MINUTES")  # e.g 100

router = APIRouter(tags=["auth"])

@router.post("/user/create", status_code=status.HTTP_201_CREATED)
def register_user(users: UserRegisterSchema, db: Session = Depends(get_db)) -> UserOutSchema:
    hashed_password: str = hash_password(users.password)
    users.password = hashed_password
    try:
        new_user = User(**users.model_dump())
        db.add(new_user)
        db.commit()
    except IntegrityError as e:
        print(e)
        raise HTTPException(detail="Invalid user registration", status_code=status.HTTP_400_BAD_REQUEST)
    return new_user

@router.post("/user/token")
def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: Session = Depends(get_db)) -> Token:
    users = db.scalars(select(User).where(User.email == form_data.username)).first()
    
    if not users:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid user registration",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if not verify_password(form_data.password, users.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Passwords do not match",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=float(ACCESS_TOKEN_EXPIRE_MINUTES))
    access_token = create_access_token(data={"sub": str(users.id)}, expires_delta=access_token_expires)
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me")
def read_users_me(current_user: Annotated[User, Depends(get_current_user)]) -> UserOutSchema:
    return current_user
    