from fastapi import FastAPI, HTTPException, Depends, status
from app.db_setup import init_db, get_db
from contextlib import asynccontextmanager
from fastapi import Request

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(lifespan=lifespan)

# @app.post("/users", status_code=201)
# def add_user(users: schemas.User, db: Session = Depends(get_db)):
#     query = insert(User).values(**users.model_dump())
#     result = db.execute(query)
#     db.commit()
#     return db_company





