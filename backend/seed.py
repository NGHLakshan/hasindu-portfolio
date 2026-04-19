from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models

def seed_data():
    # Create tables
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    try:
        # Check if user already exists
        user = db.query(models.UserProfile).filter(models.UserProfile.name == "Hasindu Lakshan").first()
        if user:
            print("Data already seeded.")
            return

        # Create Profile
        new_user = models.UserProfile(
            name="Hasindu Lakshan",
            title="Undergraduate Student | BSc (Hons) Information Systems",
            email="nghlakshan22@gmail.com",
            phone="+94717768002",
            github="https://github.com/NGHLakshan",
            linkedin="https://linkedin.com/in/hasindu-lakshan",
            about="Final year undergraduate in Information Systems at Rajarata University of Sri Lanka with work as a Data Administrator at Neuratech (Pvt) Ltd. Skilled in data management, automation, and reporting using tools such as Python, Power BI, and Excel. Experienced in data scraping, cleaning, and validation to support data-driven decision making. Proficient in database handling, IT system maintenance, and documentation."
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        # Education
        education = models.Education(
            degree="Bachelor of Science (Hons) in Information Systems",
            institution="Rajarata University of Sri Lanka",
            period="2021 - 2026  Degree Requirements Completed, Awaiting Graduation",
            profile_id=new_user.id
        )
        db.add(education)

        # Experience
        experience = models.Experience(
            role="Data Administrator Intern",
            company="Neuratech (Pvt) Ltd",
            period="August 2025 - Six Month",
            description="Responsible for data management, automation, and reporting. Handling data scraping, cleaning, and validation to support data-driven decision making.",
            profile_id=new_user.id
        )
        db.add(experience)

        # Projects
        projects = [
            models.Project(
                title="Medical Center Website",
                role="Front-end Developer",
                tools="HTML, CSS, JavaScript",
                github_link="https://github.com/NGHLakshan/Medical-Center",
                description="Built a responsive, user-friendly website for a medical center. Implemented service listings, doctor profiles, and appointment forms.",
                profile_id=new_user.id
            ),
            models.Project(
                title="Automotive Service Website (Ongoing)",
                role="Full-stack Developer",
                tools="PHP, MySQL, HTML, CSS, JavaScript",
                github_link="https://github.com/NGHLakshan/expert_garage",
                description="Designed a responsive web platform for managing auto service bookings. Developed user login, logout, and booking management.",
                profile_id=new_user.id
            ),
            models.Project(
                title="Tuk-Tuk Finance Manager",
                role="Full-stack Developer",
                tools="React, Vite, PWA, Node.js",
                github_link="https://github.com/NGHLakshan/Tuk_Tuk",
                description="Developed a Progressive Web App (PWA) for managing Tuk-Tuk finances, featuring transaction tracking, offline support, and rent management settings.",
                profile_id=new_user.id
            ),
            models.Project(
                title="Gym Management Application",
                role="Python Developer",
                tools="Python, Excel Integration",
                github_link="https://github.com/NGHLakshan/Gym",
                description="Built an application to track gym member attendance and manage payment alerts, including real-time warnings for overdue payments.",
                profile_id=new_user.id
            )
        ]
        db.add_all(projects)

        # Skills
        skills = [
            models.Skill(category="Programming Languages", name="HTML, CSS, PHP, Python, JavaScript", profile_id=new_user.id),
            models.Skill(category="Databases", name="MySQL", profile_id=new_user.id),
            models.Skill(category="Design & Multimedia", name="Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Figma, Canva", profile_id=new_user.id),
            models.Skill(category="Data Analysis & Visualization", name="Power BI, MATLAB, SPSS, Excel (Advanced)", profile_id=new_user.id),
            models.Skill(category="Frameworks & Libraries", name="Angular, Flutter(Learning)", profile_id=new_user.id),
        ]
        db.add_all(skills)

        db.commit()
        print("Database seeded successfully!")
        
    except Exception as e:
        print(f"Error seeding data: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_data()
