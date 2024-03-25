from fastapi import FastAPI, HTTPException, Depends, status
from app.db_setup import init_db, get_db
from contextlib import asynccontextmanager
from fastapi import Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session, joinedload, selectinload, load_only
from sqlalchemy import select, update, delete, insert
from app.models.models import User, WeeklyPlan, Habit, Todo, SleepTracker, WorkoutTracker, JournalYourDay, MoodTracker
from app.schemas.schemas import UserSchema, WeeklyPlanSchema, HabitSchema, TodoSchema, SleepTrackerSchema, WorkoutTrackerSchema, JournalYourDaySchema, MoodTrackerSchema 
from sqlalchemy.exc import IntegrityError, NoResultFound
from auth_endpoints import router as auth_router
from app.security import get_current_user
from typing import Annotated

origin = [
    "http://localhost:3000",
    "http://localhost:5173"
]

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(lifespan=lifespan)

app.include_router(auth_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/weekly_plans", status_code=201)
def add_weekly_plan(weekly_plans: WeeklyPlanSchema, db: Session = Depends(get_db)):
    try:
        db_weekly_plan = WeeklyPlan(**weekly_plans.model_dump())
        db.add(db_weekly_plan)
        db.commit()
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Database error")
    return db_weekly_plan

@app.put("/weekly_plans/{weekly_plans_id}", status_code=status.HTTP_204_NO_CONTENT)
def update_weekly_plan(weekly_plans_id: int, weekly_plans_info: WeeklyPlanSchema, db: Session = Depends(get_db)):
    query = select(WeeklyPlan).where(WeeklyPlan.id == weekly_plans_id)
    db_weekly_plans = db.scalars(query).first()
    if not db_weekly_plans:
        raise HTTPException(status_code=404, detail="Weekly plan not found")
    
    for key, value in weekly_plans_info.model_dump(exclude_unset=True).items():
        setattr(db_weekly_plans, key, value)
    
    db.commit()
    return db_weekly_plans

@app.get("/weekly_plans/{weekly_plans_id}", status_code=200)
def list_weekly_plans(weekly_plans_id: int, db: Session = Depends(get_db)):
    weekly_plan = db.scalars(select(WeeklyPlan).where(WeeklyPlan.id == weekly_plans_id).options(
        joinedload(WeeklyPlan.habits),joinedload(WeeklyPlan.todos))).all()
    if not weekly_plan:
        raise HTTPException(status_code=404, detail="Weekly plan not found")
    return weekly_plan

@app.post("/habits", status_code=201)
def add_habit(habits: HabitSchema, db: Session = Depends(get_db)):
    try:
        db_habits = Habit(**habits.model_dump())
        db.add(db_habits)
        db.commit()
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Database error")
    return db_habits

@app.delete("/habits/{habits_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_habits(habits_id: int, db: Session = Depends(get_db)):
    query = delete(Habit).where(Habit.id == habits_id)
    result = db.execute(query)
    db.commit()
    if result.rowcount == 0:
        raise HTTPException(status_code= 404, detail= "Habit not found")
    return {"message": "Habit deleted"}

@app.post("/todos", status_code=201)
def add_todos(todos: TodoSchema, db: Session = Depends(get_db)):
    try:
        db_todos = Todo(**todos.model_dump())
        db.add(db_todos)
        db.commit()
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Database error")
    return db_todos

@app.delete("/todos/{todos_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_todo(todos_id: int, db: Session = Depends(get_db)):
    query = delete(Todo).where(Todo.id == todos_id)
    result = db.execute(query)
    db.commit()
    if result.rowcount == 0:
        raise HTTPException(status_code= 404, detail= "Todo not found")
    return {"message": "Todo deleted"}

@app.post("/sleep_trackers", tags=["sleep_trackers"], status_code=status.HTTP_201_CREATED)
def add_sleep_tracker(sleep_trackers: SleepTrackerSchema, current_user: Annotated[User, Depends(get_current_user)], db: Session = Depends(get_db)):
    try:
        user_id = current_user.id 
        db_sleep_trackers = SleepTracker(**sleep_trackers.model_dump(), users_id=user_id)
        db.add(db_sleep_trackers)
        db.commit()
    except IntegrityError as e:
        print(e)
        raise HTTPException(status_code=400, detail="Database error")
    return db_sleep_trackers

# @app.get("/sleep_trackers/full", status_code=200)
# def list_companies(db: Session = Depends(get_db)):
#     """
#     List companies and their companytype
#     This also includes a join to fetch data for company types.
#     """
#     user = db.scalars(select(User).where(User.id == 1).options(
#         joinedload(User.sleep_tracker)).all()
#     return companies


@app.post("/workout_trackers", status_code=201)
def add_workout_tracker(workout_trackers: WorkoutTrackerSchema, db: Session = Depends(get_db)):
    try:
        db_workout_tracker = WorkoutTracker(**workout_trackers.model_dump())
        db.add(db_workout_tracker)
        db.commit()
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Database error")
    return db_workout_tracker

@app.delete("/workout_trackers/{workout_trackers_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_workout_tracker(workout_trackers_id: int, db: Session = Depends(get_db)):
    query = delete(WorkoutTracker).where(WorkoutTracker.id == workout_trackers_id)
    result = db.execute(query)
    db.commit()
    if result.rowcount == 0:
        raise HTTPException(status_code= 404, detail= "Workout tracker for that day was not found")
    return {"message": "Workout tracker for that day deleted"}

@app.post("/journal_your_days", status_code=201)
def add_sleep_tracker(journal_your_days: JournalYourDaySchema, db: Session = Depends(get_db)):
    try:
        db_journal_your_days = JournalYourDay(**journal_your_days.model_dump())
        db.add(db_journal_your_days)
        db.commit()
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Database error")
    return db_journal_your_days

@app.put("/journal_your_days/{journal_your_days_id}", status_code=status.HTTP_204_NO_CONTENT)
def update_journal_your_day(journal_your_days_id: int, journal_your_days_info: JournalYourDaySchema, db: Session = Depends(get_db)):
    query = select(JournalYourDay).where(JournalYourDay.id == journal_your_days_id)
    db_journal_your_days = db.scalars(query).first()
    if not db_journal_your_days:
        raise HTTPException(status_code=404, detail="Date of journal not found")
    
    for key, value in journal_your_days_info.model_dump(exclude_unset=True).items():
        setattr(db_journal_your_days, key, value)
    
    db.commit()
    return db_journal_your_days

@app.post("/mood_trackers", status_code=201)
def add_mood_tracker(mood_trackers: MoodTrackerSchema, db: Session = Depends(get_db)):
    try:
        db_mood_tracker = MoodTracker(**mood_trackers.model_dump())
        db.add(db_mood_tracker)
        db.commit()
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Database error")
    return db_mood_tracker

