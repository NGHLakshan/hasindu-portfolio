from sqlalchemy.orm import Session
from database import SessionLocal
import models

def add_new_projects():
    db = SessionLocal()
    try:
        user = db.query(models.UserProfile).filter(models.UserProfile.name == "Hasindu Lakshan").first()
        if not user:
            print("User not found.")
            return

        projects = [
            models.Project(
                title="Tuk-Tuk Finance Manager",
                role="Full-stack Developer",
                tools="React, Vite, PWA, Node.js",
                github_link="https://github.com/NGHLakshan/Tuk_Tuk",
                description="Developed a Progressive Web App (PWA) for managing Tuk-Tuk finances, featuring transaction tracking, offline support, and rent management settings.",
                profile_id=user.id
            ),
            models.Project(
                title="Gym Management Application",
                role="Python Developer",
                tools="Python, Excel Integration",
                github_link="https://github.com/NGHLakshan/Gym",
                description="Built an application to track gym member attendance and manage payment alerts, including real-time warnings for overdue payments.",
                profile_id=user.id
            )
        ]
        
        # Check if already added
        existing_tuk = db.query(models.Project).filter(models.Project.github_link == "https://github.com/NGHLakshan/Tuk_Tuk").first()
        if not existing_tuk:
            db.add_all(projects)
            db.commit()
            print("Successfully added new projects!")
        else:
            print("Projects already present.")
            
    except Exception as e:
        print(f"Error: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    add_new_projects()
