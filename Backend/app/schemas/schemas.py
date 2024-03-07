from pydantic import BaseModel, Field, ConfigDict, EmailStr, ValidationError
from typing import Optional, List
from datetime import date, time

class UserSchema(BaseModel):
    firstname: str = Field(max_length=100)
    lastname: str = Field(max_length=100)
    email: EmailStr
    hashed_password: str
    created_user: Optional [date]

    # weekly_plans: Optional[list["WeeklyPlanSchema"]] | None = []

class WeeklyPlanSchema(BaseModel):
    weekday: date
    daily_text: str = Field(max_length=100)

    # habits: Optional [list["HabitSchema"]] = None
    # todos: Optional [list["TodoSchema"]] = None

class HabitSchema(BaseModel):
    habit_text: str = Field(max_length=100)
    habit_checkbox: Optional[bool] | None = False

    # weekly_plans: WeeklyPlanSchema ?????????????????
    
class TodoSchema(BaseModel):
    todo_text: str = Field(max_length=100)
    todo_checkbox: Optional [bool] | None = False
    # weekly_plans: WeeklyPlanSchema ?????????????

class SleepTrackerSchema(BaseModel):
    date_of_sleep: date
    sleep_quality: Optional[int] = Field(gt=0, lt=6)
    sleeping_hours: Optional[time]
    notes: Optional[str] = Field(max_length=300)

class WorkoutTrackerSchema(BaseModel):
    workout_date: date
    workout_description: Optional[str] = Field(max_length=200)
    workout_duration: Optional[time]
    start_time: Optional[time]

class JournalYourDaySchema(BaseModel):
    journaling_date: date
    text: str

class MoodTrackerSchema(BaseModel):
    moodtracker_date: date
    mood_scale: Optional[int] = Field(gt=0, lt=6)
    mood_description: Optional[str] = Field(max_length=200)

# class TrackerDiagramSchema(BaseModel):
#     # ... (definition based on relationships)

# class DiagramBridgeSchema(BaseModel):
#     # ... (definition based on relationships)



