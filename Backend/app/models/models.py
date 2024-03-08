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
    hashed_password: Mapped[str] = mapped_column(nullable=False)
    created_user: Mapped[date] = mapped_column(nullable=False)

    weekly_plans: Mapped[list["WeeklyPlan"]] = relationship("WeeklyPlan", back_populates="users")
    sleep_trackers: Mapped[list["SleepTracker"]] = relationship("SleepTracker", back_populates="users")
    workout_trackers: Mapped[list["WorkoutTracker"]] = relationship("WorkoutTracker", back_populates="users")
    journal_your_days: Mapped[list["JournalYourDay"]] = relationship("JournalYourDay", back_populates="users")
    mood_trackers: Mapped[list["MoodTracker"]] = relationship("MoodTracker", back_populates="users")
    # tracker_diagrams: Mapped[list["TrackerDiagram"]] = relationship(secondary="DiagramBridge", back_populates="users")
    

class WeeklyPlan(Base):
    __tablename__ = "weekly_plans"
    weekday: Mapped[date] = mapped_column(nullable=False)
    daily_text: Mapped[str]  = mapped_column(String(100), nullable=True)

    users: Mapped[User] = relationship("User", back_populates="weekly_plans")
    users_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    
    habits: Mapped[list["Habit"]] = relationship("Habit", back_populates="weekly_plans")
    todos: Mapped[list["Todo"]] = relationship("Todo", back_populates="weekly_plans")

class Habit(Base):
    __tablename__= "habits"
    habit_text: Mapped[str] = mapped_column(String(100), nullable=True)
    habit_checkbox: Mapped[bool] = mapped_column(Boolean, default=False, nullable=True)

    weekly_plans: Mapped[WeeklyPlan] = relationship("WeeklyPlan", back_populates="habits")
    weekly_plans_id: Mapped[int] = mapped_column(ForeignKey("weekly_plans.id", ondelete="SET NULL"), nullable=True)

class Todo(Base):
    __tablename__ = "todos"
    todo_text: Mapped[str] = mapped_column(String(100), nullable=True) 
    todo_checkbox: Mapped[bool] = mapped_column(Boolean, default=False, nullable=True)

    weekly_plans: Mapped[WeeklyPlan] = relationship("WeeklyPlan", back_populates="todos")
    weekly_plans_id: Mapped[int] = mapped_column(ForeignKey("weekly_plans.id", ondelete="SET NULL"), nullable=True)


class SleepTracker(Base):
    __tablename__= "sleep_trackers"
    date_of_sleep: Mapped[date] = mapped_column(nullable=False)
    sleep_quality: Mapped[int] = mapped_column(nullable=True)
    sleeping_hours: Mapped[time] = mapped_column(nullable=True)
    notes: Mapped[str] = mapped_column(String(300), nullable=True)
    
    users: Mapped[User] = relationship("User", back_populates="sleep_trackers")
    users_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), nullable=True)


class WorkoutTracker(Base):
    __tablename__="workout_trackers"
    workout_date: Mapped[date] = mapped_column(nullable=False)
    workout_description: Mapped[str] = mapped_column(String(200), nullable=True)
    workout_duration: Mapped[time] = mapped_column(nullable=True)
    start_time: Mapped[time] = mapped_column(nullable=True)
    
    users: Mapped[User] = relationship("User", back_populates="workout_trackers")
    users_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), nullable=True)


class JournalYourDay(Base):
    __tablename__="journal_your_days"
    journaling_date: Mapped[date] = mapped_column( nullable=False)
    text: Mapped[str] = mapped_column(nullable=False)

    users: Mapped[User] = relationship("User", back_populates="journal_your_days")
    users_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), nullable=True)


class MoodTracker(Base):
    __tablename__="mood_trackers"
    moodtracker_date: Mapped[date] = mapped_column(nullable=False)
    mood_scale: Mapped[int] = mapped_column(nullable=True)
    mood_description: Mapped[str] = mapped_column(String(200), nullable=True)

    users: Mapped[User] = relationship("User", back_populates="mood_trackers")
    users_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), nullable=True)


# class TrackerDiagram(Base):
#     __tablename__="tracker_diagrams"
#     users: Mapped[User] = relationship("User", back_populates="tracker_diagrams")
#     users_id: Mapped[int] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"), nullable=True)

#     sleep_trackers: Mapped[list["SleepTracker"]] = relationship("SleepTracker", secondary="diagram_bridges", back_populates="tracker_diagrams")
#     workout_trackers: Mapped[list["WorkoutTracker"]] = relationship("WorkoutTracker", secondary="diagram_bridges", back_populates="tracker_diagrams")
#     mood_trackers: Mapped[list["MoodTracker"]] = relationship("MoodTracker", secondary="diagram_bridges", back_populates="tracker_diagrams")

# class DiagramBridge(Base):
#     __tablename__="diagram_bridges"
#     tracker_diagrams_id: Mapped[int] = mapped_column(ForeignKey("tracker_diagrams.id", ondelete="SET NULL"), nullable=True)
#     sleep_trackers_id: Mapped[int] = mapped_column(ForeignKey("sleep_trackers.id", ondelete="SET NULL"), nullable=True)
#     workout_trackers_id: Mapped[int] = mapped_column(ForeignKey("workout_trackers.id", ondelete="SET NULL"), nullable=True)
#     mood_trackers_id: Mapped[int] = mapped_column(ForeignKey("mood_trackers.id", ondelete="SET NULL"), nullable=True)

