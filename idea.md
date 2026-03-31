# AI Powered Internship & Project Matching Platform

## Problem Statement
Students often struggle to find internships and projects that match their skills and interests. Recruiters also struggle to discover suitable candidates quickly.

## Solution Overview
Build a full stack platform where students can create profiles, list skills, upload resumes, and receive AI-powered recommendations for internships and projects. Recruiters can post opportunities and discover suitable candidates through skill-based matching.

## Scope of the Project

### Student Features
- Create account and login
- Build skill-based profile
- Upload resume
- Receive internship recommendations
- Apply for internships
- Track application status

### Recruiter Features
- Register and login
- Post internships or projects
- Search students by skills
- View applications

### Admin Features
- Manage users
- Moderate posts
- Monitor platform activity

## Key Features
- Secure authentication system (JWT based login)
- Skill-based recommendation engine
- Internship and project posting system
- Application tracking system
- Profile management system
- Admin moderation panel

## Technology Stack
- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT

## Backend Architecture Overview
The backend follows clean architecture and standard software engineering practices. It adheres to RESTful API conventions and follows a layered approach consisting of:
- **Routes**: Define the API endpoints mapping to controllers.
- **Middlewares**: Handle authentication/authorization, input validation, and overarching error handling.
- **Controllers**: Handle incoming HTTP requests, process data, and return responses.
- **Services**: Contain the core business logic and interface between controllers and repositories.
- **Repositories**: Abstract the data access layer to interact with the database.
- **Models**: Define the data structure, schemas, and object behavior for MongoDB.

### Object-Oriented Programming (OOP) Principles
The architecture actively leverages OOP concepts to improve maintainability and scalability:
- **Encapsulation**: Services restrict direct access to the database by acting as an intermediary boundary. Models encapsulate state by keeping primary properties managed and validated internally.
- **Abstraction**: Controllers interact strictly with Services primarily through abstracted interfaces, unaware of internal persistence complexities. Database operations are hidden behind repository layers.
- **Inheritance**: Base service or base repository classes provide common CRUD operations to specific extending entities (e.g. extending a base `UserRepository` for Admins and Students). Base `User` domains form the foundation for `Student` and `Recruiter` specific entities.
- **Polymorphism**: Extending classes override default base class methods to provide specialized behaviors (e.g., custom saving or validation logic specific to a Recruitment Application compared to a User update).
