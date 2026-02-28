# SkillSync.ai - Sequence Diagrams

This document outlines the core data flows and interactions within the SkillSync.ai platform using Mermaid sequence diagrams.

## 1. User Registration / Login Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant AuthService
    participant Database

    User->>Frontend: Enters credentials (Email, Password)
    Frontend->>BackendAPI: POST /api/auth/register (or login)
    BackendAPI->>AuthService: Validate input & hash password
    AuthService->>Database: Save User / Verify credentials
    Database-->>AuthService: User record
    AuthService->>AuthService: Generate JWT Token
    AuthService-->>BackendAPI: Return User & Token
    BackendAPI-->>Frontend: 200 OK (Token + User Data)
    Frontend-->>User: Redirect to Dashboard
```

## 2. Career Analysis Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant CareerService
    participant AIEngine
    participant Database

    User->>Frontend: Submits profile & career goals
    Frontend->>BackendAPI: POST /api/career/analyze
    BackendAPI->>CareerService: Process user data
    CareerService->>AIEngine: Request career analysis with context prompt
    AIEngine-->>CareerService: Structured JSON analysis (scores, missing skills)
    CareerService->>Database: Save CareerAnalysis record
    Database-->>CareerService: Confirmation
    CareerService-->>BackendAPI: Formatted response
    BackendAPI-->>Frontend: 200 OK (Analysis Data)
    Frontend-->>User: Display Career Dashboard & Readiness Score
```

## 3. Skill Gap Analysis Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant SkillService
    participant AIEngine

    User->>Frontend: Views Skill Analyzer page
    Frontend->>BackendAPI: GET /api/skills/suggestions
    BackendAPI->>SkillService: Fetch user skills & target role
    SkillService->>AIEngine: Request skill gap mapping
    AIEngine-->>SkillService: Return prioritized learning path
    SkillService-->>BackendAPI: Structured skill response
    BackendAPI-->>Frontend: 200 OK (Skill Gaps & Paths)
    Frontend-->>User: Display prioritized skills to acquire
```

## 4. Project Suggestion Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant ProjectService
    participant Database

    User->>Frontend: Requests project ideas for "AI Intern"
    Frontend->>BackendAPI: POST /api/projects/suggest
    BackendAPI->>ProjectService: Validate request
    ProjectService->>Database: Fetch or generate projects based on role & level
    Database-->>ProjectService: Project list
    ProjectService-->>BackendAPI: Return project suggestions
    BackendAPI-->>Frontend: 200 OK (Projects with descriptions & tech stack)
    Frontend-->>User: Display Project Cards
```

## 5. AI Chatbot Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant ChatService
    participant Database
    participant AIEngine

    User->>Frontend: Sends message to SkillSync Mentor
    Frontend->>BackendAPI: POST /api/chat/message
    BackendAPI->>ChatService: Extract message & user ID
    ChatService->>Database: Fetch user context (skills, roadmap)
    Database-->>ChatService: User context data
    ChatService->>AIEngine: Send prompt + context + user message
    AIEngine-->>ChatService: AI Response
    ChatService->>Database: Save ChatMessage record
    Database-->>ChatService: Saved
    ChatService-->>BackendAPI: Return AI Response
    BackendAPI-->>Frontend: 200 OK (Message Data)
    Frontend-->>User: Display response in Chat Window
```

## 6. Roadmap Generation Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant RoadmapService
    participant AIEngine
    participant Database

    User->>Frontend: Clicks "Generate Roadmap"
    Frontend->>BackendAPI: POST /api/roadmap/generate
    BackendAPI->>RoadmapService: Initiate roadmap creation
    RoadmapService->>AIEngine: Prompt for 30/60/90 day plan based on skill gaps
    AIEngine-->>RoadmapService: Structured timeline & tasks
    RoadmapService->>Database: Save Roadmap record
    Database-->>RoadmapService: Confirmation
    RoadmapService-->>BackendAPI: Formatted roadmap
    BackendAPI-->>Frontend: 200 OK (Roadmap Data)
    Frontend-->>User: Display interactive timeline
```

## 7. Job Recommendation Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant JobService
    participant Database

    User->>Frontend: Navigates to Jobs Page
    Frontend->>BackendAPI: GET /api/jobs/recommendations
    BackendAPI->>JobService: Fetch user skills
    JobService->>Database: Query matching jobs
    Database-->>JobService: Raw job list
    JobService->>JobService: Calculate match percentage
    JobService-->>BackendAPI: Ranked job recommendations
    BackendAPI-->>Frontend: 200 OK (Job List)
    Frontend-->>User: Display job cards with match scores
```

## 8. Resume Analysis Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant BackendAPI
    participant ResumeService
    participant AIEngine
    participant Database

    User->>Frontend: Uploads Resume / Submits details
    Frontend->>BackendAPI: POST /api/resume/analyze
    BackendAPI->>ResumeService: Parse resume data
    ResumeService->>AIEngine: Request ATS analysis & improvement tips
    AIEngine-->>ResumeService: Resume score, missing keywords, bullet improvements
    ResumeService->>Database: Save ResumeAnalysis record
    Database-->>ResumeService: Confirmation
    ResumeService-->>BackendAPI: Structured report
    BackendAPI-->>Frontend: 200 OK (Analysis Report)
    Frontend-->>User: Display strengths, weaknesses, and optimization tips
```
