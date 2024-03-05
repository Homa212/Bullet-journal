from pydantic import BaseModel, Field, ConfigDict, EmailStr, ValidationError

class UserSchema(BaseModel):
    firstname: str = Field
    