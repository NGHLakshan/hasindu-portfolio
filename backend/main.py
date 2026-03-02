from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db, engine
import models, schemas
from fastapi.middleware.cors import CORSMiddleware

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Hasindu Lakshan Portfolio API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Hasindu Lakshan's Portfolio API"}

@app.get("/api/profile", response_model=schemas.UserProfile)
def get_profile(db: Session = Depends(get_db)):
    profile = db.query(models.UserProfile).first()
    if profile is None:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@app.get("/api/education", response_model=List[schemas.Education])
def get_education(db: Session = Depends(get_db)):
    return db.query(models.Education).all()

@app.get("/api/experience", response_model=List[schemas.Experience])
def get_experience(db: Session = Depends(get_db)):
    return db.query(models.Experience).all()

@app.get("/api/projects", response_model=List[schemas.Project])
def get_projects(db: Session = Depends(get_db)):
    return db.query(models.Project).all()

@app.get("/api/skills", response_model=List[schemas.Skill])
def get_skills(db: Session = Depends(get_db)):
    return db.query(models.Skill).all()
