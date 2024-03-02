from fastapi import FastAPI, HTTPException, Depends, status
from app.db_setup import init_db, get_db
from contextlib import asynccontextmanager
from fastapi import Request

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(lifespan=lifespan)

@app.get("/")
async def hello():
    return{"message": "Hello world"}

# @app.post("/user", status_code=200)
# def create_users(db: Session = Depends(get_db)):
#     query = select(User)
#     users = db.scalars(query).all()
#     return users