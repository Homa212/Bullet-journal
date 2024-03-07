from fastapi import FastAPI, HTTPException, Depends, status
from app.db_setup import init_db, get_db
from contextlib import asynccontextmanager
from fastapi import Request
from sqlalchemy.orm import Session, joinedload, selectinload, load_only
from sqlalchemy import select, update, delete, insert
from app.models.models import User, WeeklyPlan, Habit, Todo, SleepTracker, WorkoutTracker, JournalYourDay, MoodTracker
from app.schemas.schemas import UserSchema, WeeklyPlanSchema, HabitSchema, TodoSchema, SleepTrackerSchema, WorkoutTrackerSchema, JournalYourDaySchema, MoodTrackerSchema 
from sqlalchemy.exc import IntegrityError, NoResultFound

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(lifespan=lifespan)

@app.post("/users", status_code=201)
def add_user(users: UserSchema, db: Session = Depends(get_db)):
    try:
        db_users = User(**User.model_dump())
        db.add(db_users)
        db.commit()
        db.refresh(db_users)
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Database error")
    return db_users




