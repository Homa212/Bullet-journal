from pydantic import BaseModel, Field, ConfigDict, EmailStr, ValidationError
from typing import Optional, List
from datetime import date, time

class UserSchema(BaseModel):
    firstname: str = Field(max_length=100)
    lastname: str = Field(max_length=100)
    email: EmailStr
    hashed_password: str
    created_user: Optional [date]

class WeeklyPlanSchema(BaseModel):
    weekday: date
    daily_text: str = Field(max_length=1000)

class HabitSchema(BaseModel):
    habit_text: str = Field(max_length=500)
    habit_checkbox: Optional[bool] | None = False

class TodoSchema(BaseModel):
    todo_text: str = Field(max_length=500)
    todo_checkbox: Optional [bool] | None = False

class SleepTrackerSchema(BaseModel):
    date_of_sleep: date
    sleep_quality: Optional[int] = Field(gt=0, lt=6)
    start_time: Optional [time]
    end_time: Optional [time] 
    sleeping_hours: Optional [int]
    sleeping_min: Optional [int] 
    notes: Optional[str] = Field(max_length=1000)

class WorkoutTrackerSchema(BaseModel):
    workout_date: date
    workout_description: Optional[str] = Field(max_length=1000)
    start_time: Optional[time]
    end_time: Optional[time]
    workout_duration_hours: Optional[int]
    workout_duration_min: Optional[int]

class JournalYourDaySchema(BaseModel):
    journaling_date: date
    text: str

class MoodTrackerSchema(BaseModel):
    moodtracker_date: date
    mood_scale: Optional[int] = Field(gt=0, lt=6)
    mood_description: Optional[str] = Field(max_length=1000)

# class TrackerDiagramSchema(BaseModel):
#     # ... (definition based on relationships)

# class DiagramBridgeSchema(BaseModel):
#     # ... (definition based on relationships)



