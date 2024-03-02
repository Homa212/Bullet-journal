from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, Text, Boolean, ForeignKey, Column, Table, DateTime, func
from datetime import datetime

class Base(DeclarativeBase):
    id:Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)

class User(Base):
    __tablename__ = "users"
    firstname: Mapped[str] = mapped_column(nullable=False)
    lastname: Mapped[str] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(nullable=False, unique=True) 
    hashed_password: Mapped[str]

class WeeklyPlan(Base):
    __tablename__ = "weekly_plans"
    date: Mapped[datetime] = mapped_column(nullable=False)
    daily_text: Mapped[str]  = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(nullable=False, unique=True) 
    hashed_password: Mapped[str]









    