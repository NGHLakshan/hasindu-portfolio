from pydantic import BaseModel
from typing import List, Optional

class EducationBase(BaseModel):
    degree: str
    institution: str
    period: str

class EducationCreate(EducationBase):
    pass

class Education(EducationBase):
    id: int
    profile_id: int

    class Config:
        orm_mode = True

class ExperienceBase(BaseModel):
    role: str
    company: str
    period: str
    description: str

class ExperienceCreate(ExperienceBase):
    pass

class Experience(ExperienceBase):
    id: int
    profile_id: int

    class Config:
        orm_mode = True

class ProjectBase(BaseModel):
    title: str
    role: str
    tools: str
    github_link: str
    description: str

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int
    profile_id: int

    class Config:
        orm_mode = True

class SkillBase(BaseModel):
    category: str
    name: str

class SkillCreate(SkillBase):
    pass

class Skill(SkillBase):
    id: int
    profile_id: int

    class Config:
        orm_mode = True

class UserProfileBase(BaseModel):
    name: str
    title: str
    email: str
    phone: str
    github: str
    linkedin: str
    about: str

class UserProfileCreate(UserProfileBase):
    pass

class UserProfile(UserProfileBase):
    id: int
    education: List[Education] = []
    experience: List[Experience] = []
    projects: List[Project] = []
    skills: List[Skill] = []

    class Config:
        orm_mode = True
