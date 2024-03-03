from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, Text, Boolean, ForeignKey, Column, Table, DateTime, func
from datetime import date, time, datetime

class Base(DeclarativeBase):
    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)

class User(Base):
    __tablename__ = "users"
    firstname: Mapped[str] = mapped_column(String(100), nullable=False)
    lastname: Mapped[str] = mapped_column(String(100), nullable=False)
    email: Mapped[str] = mapped_column(String(100), nullable=False, unique=True) 
    hashed_password: Mapped[str]
    created_user: Mapped[date] = mapped_column(nullable=False, default=lambda: date.today())

class WeeklyPlan(Base):
    __tablename__ = "weekly_plans"
    date: Mapped[date] = mapped_column(default= lambda:date.today(), nullable=False)
    daily_text: Mapped[str]  = mapped_column(String(100), nullable=True)

class Habit(Base):
    __tablename__= "habits"
    habit_text: Mapped[str] = mapped_column(String(100), nullable=True)

class Todo(Base):
    __tablename__ = "todos"
    todo_text: Mapped[str] = mapped_column(String(100), nullable=True)   

class SleepTracker(Base):
    __tablename__= "sleep_trackers"
    date: Mapped[date] = mapped_column (default= lambda:date.today(), nullable=False)
    sleep_quality: Mapped[int] = mapped_column(nullable=True)
    sleeping_hours: Mapped[time] = mapped_column(time, nullable=True)
    notes: Mapped[str] = mapped_column(nullable=True)
    #  foreign keys

class sleep_quality_option(Base):
    __tablename__="sleep_quality_options"
    # description: Mapped[int] = mapped_column(nullable=True) 
    # name: Mapped[str] = mapped_column(String(50), nullable=True)
    


class WorkoutTracker(Base):
    __tablename__="workout_trackers"
    date: Mapped[date] = mapped_column(nullable=False, default=lambda: date.today())
    workout_description: Mapped[str] = mapped_column(String(100), nullable=True)
    workout_duration: Mapped[time] = mapped_column(nullable=False)
    start_time: Mapped[datetime] = mapped_column(DateTime, nullable=False)

class JournalYourDay(Base):
    __tablename__="journal_your_days"
    date: Mapped[date] = mapped_column(nullable=False, default=lambda: date.today())
    text: Mapped[str] = mapped_column(nullable=False)


class MoodTracker(Base):
    __tablename__="mood_trackers"
    date: Mapped[date] = mapped_column(nullable=False, default=lambda: date.today())
    mood_description: Mapped[str] = mapped_column(String(100), nullable=True)
    mood_color_id: Mapped[int] = mapped_column(ForeignKey("mood_color_options.id"), nullable=True)

class ColorOption(Base):
    __tablename__="mood_color_options"
    color: Mapped[int] = mapped_column(nullable=True) 
    name: Mapped[str] = mapped_column(String(50), nullable=True)


class Tracker_diagram(Base):
    __tablename__="tracker_diagrams"
    # foreign keys





    








    