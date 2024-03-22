from pydantic import BaseModel, Field, ConfigDict, EmailStr, validator
from typing import Optional, List, TypeVar, Type
from datetime import date, time, datetime

T = TypeVar("T", bound=BaseModel)  # Type variable for base model

class BaseModelConfig(BaseModel):
    """Base class for all schemas with automatic configuration."""
    @validator("*", pre=True)
    def set_config(cls, value):
        # Set the config for the current class and its subclasses
        cls.Config = ConfigDict(orm_mode=True, from_attributes=True)
        return value

    class Config:
        # Inherit attributes from parent classes (optional)
        arbitrary_types_allowed = True

class Token(BaseModelConfig):
    access_token: str
    token_type: str

class TokenPayload(BaseModelConfig):
    sub: str = None
    exp: int = None

class NewPasswordSchema(BaseModel):
    token: str
    new_password: str
    
class UserSchema(BaseModelConfig):
    firstname: str = Field(max_length=100)
    lastname: str = Field(max_length=100)
    email: EmailStr
    password: str

class UserOutSchema(BaseModel):
    id: int
    firstname: str
    lastname: str
    email: EmailStr

class UserRegisterSchema(BaseModel):
    firstname: str = Field(max_length=100)
    lastname: str = Field(max_length=100)
    email: EmailStr
    password: str

class WeeklyPlanSchema(BaseModelConfig):
    weekday: date
    daily_text: str = Field(max_length=1000)

class HabitSchema(BaseModelConfig):
    habit_text: str = Field(max_length=500)
    habit_checkbox: Optional[bool] | None = False

class TodoSchema(BaseModelConfig):
    todo_text: str = Field(max_length=500)
    todo_checkbox: Optional [bool] | None = False

class SleepTrackerSchema(BaseModelConfig):
    date_of_sleep: date
    sleep_quality: Optional[int] = Field(gt=0, lt=6)
    start_time: Optional [time]
    end_time: Optional [time] 
    sleeping_hours: Optional [int]
    sleeping_min: Optional [int] 
    notes: Optional[str] = Field(max_length=1000)

class WorkoutTrackerSchema(BaseModelConfig):
    workout_date: date
    workout_description: Optional[str] = Field(max_length=1000)
    start_time: Optional[time]
    end_time: Optional[time]
    workout_duration_hours: Optional[int]
    workout_duration_min: Optional[int]

class JournalYourDaySchema(BaseModelConfig):
    journaling_date: date
    text: str

class MoodTrackerSchema(BaseModelConfig):
    moodtracker_date: date
    mood_scale: Optional[int] = Field(gt=0, lt=6)
    mood_description: Optional[str] = Field(max_length=1000)

# class TrackerDiagramSchema(BaseModelConfig):
#     # ... (definition based on relationships)

# class DiagramBridgeSchema(BaseModelConfig):
#     # ... (definition based on relationships)



