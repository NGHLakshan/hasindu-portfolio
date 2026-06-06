from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class UserProfile(Base):
    __tablename__ = "user_profiles"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    title = Column(String)
    email = Column(String)
    phone = Column(String)
    github = Column(String)
    linkedin = Column(String)
    about = Column(Text)

class Education(Base):
    __tablename__ = "education"
    id = Column(Integer, primary_key=True, index=True)
    degree = Column(String)
    institution = Column(String)
    period = Column(String)
    profile_id = Column(Integer, ForeignKey("user_profiles.id"))
    profile = relationship("UserProfile", back_populates="education")

class Experience(Base):
    __tablename__ = "experience"
    id = Column(Integer, primary_key=True, index=True)
    role = Column(String)
    company = Column(String)
    period = Column(String)
    description = Column(Text)
    profile_id = Column(Integer, ForeignKey("user_profiles.id"))
    profile = relationship("UserProfile", back_populates="experience")

class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    role = Column(String)
    tools = Column(String)
    github_link = Column(String)
    description = Column(Text)
    profile_id = Column(Integer, ForeignKey("user_profiles.id"))
    profile = relationship("UserProfile", back_populates="projects")

class Skill(Base):
    __tablename__ = "skills"
    id = Column(Integer, primary_key=True, index=True)
    category = Column(String)
    name = Column(String)
    profile_id = Column(Integer, ForeignKey("user_profiles.id"))
    profile = relationship("UserProfile", back_populates="skills")

UserProfile.education = relationship("Education", back_populates="profile")
UserProfile.experience = relationship("Experience", back_populates="profile")
UserProfile.projects = relationship("Project", back_populates="profile")
UserProfile.skills = relationship("Skill", back_populates="profile")
