# SkillSync.ai 🚀

> **Your Premium AI Career Co-Pilot for Jobs, Internships & Skill Growth**

[![Next.js](https://img.shields.io/badge/Frontend-Next.js_15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js_20-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Framework-Express-lightgray?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 Short Description
SkillSync.ai is a premium, AI-powered career intelligence platform that acts as a personalized career mentor. It analyzes a student's skills, goals, and experience to generate tailored learning roadmaps, recommend high-impact projects, identify skill gaps, and match them with ideal internships and jobs. 

## 🎯 Problem Statement
Students and early-career developers often struggle to bridge the gap between academic learning and industry expectations. They lack clear direction on what skills to acquire, what projects to build to stand out, and how to effectively prepare for technical interviews and ATS resume screenings.

## 💡 Solution
SkillSync.ai provides a comprehensive, intelligent ecosystem. By leveraging advanced AI, the platform delivers hyper-personalized career plans. It replaces generic advice with data-driven insights, offering a structured path to success through continuous skill tracking, resume optimization, and a context-aware AI chatbot mentor.

---

## ✨ Key Features
- **AI Career Analyzer:** Get a comprehensive career readiness score and personalized role recommendations.
- **Project Suggestion Engine:** Discover resume-worthy, high-impact projects tailored to your target role with complete tech stacks and deployment ideas.
- **Skill Gap Analysis:** Identify missing technical skills, prioritized by market demand, complete with learning paths.
- **SkillSync AI Mentor:** A deeply integrated, context-aware chatbot that provides actionable career advice, project help, and interview prep.
- **Job/Internship Recommendations:** Smart matching algorithm that connects you with opportunities based on your exact skill profile.
- **Resume AI Engine:** Optimize your resume for ATS with AI-driven bullet point improvements and missing keyword detection.
- **Dynamic Roadmaps:** Generate 30, 60, and 90-day actionable learning timelines.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, Framer Motion for cinematic animations
- **Icons:** Lucide React
- **Architecture:** Component-driven, glassmorphism UI, premium dark theme

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Architecture:** Layered REST API (Controllers, Services, Routes, Middlewares)
- **Security:** JWT Authentication, bcrypt, input validation
- **AI Integration:** Structured Prompt Engineering for intelligent responses

---

## 🏗️ System Architecture

SkillSync.ai follows a modern client-server architecture. The Next.js frontend delivers a highly responsive, premium UI, communicating via RESTful APIs to the Node.js/Express backend. The backend orchestrates data persistence in MongoDB and interfaces with AI engines to process complex career analytics.

### Backend Architecture (Layered Design)
- **Routes (`/server/routes`):** Define API endpoints and HTTP methods.
- **Controllers (`/server/controllers`):** Handle request parsing, response formatting, and HTTP status codes.
- **Services (`/server/services`):** Encapsulate core business logic and AI prompt generation.
- **Models (`/server/models`):** Define MongoDB schemas and data relationships.
- **Middlewares (`/server/middleware`):** Handle authentication, centralized error processing, and async wrapping.

---

## 🔌 API Endpoints

| Category | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/api/auth/register` | Register a new user |
| **Auth** | `POST` | `/api/auth/login` | Authenticate user & return token |
| **Auth** | `GET` | `/api/auth/me` | Get current logged-in user profile |
| **Career** | `POST` | `/api/career/analyze` | Generate comprehensive career analysis |
| **Career** | `GET` | `/api/career/report` | Fetch saved career report |
| **Projects**| `POST` | `/api/projects/suggest` | Generate role-specific project ideas |
| **Skills** | `POST` | `/api/skills/analyze` | Analyze skill gaps against target role |
| **Roadmap** | `POST` | `/api/roadmap/generate`| Create a 30/60/90 day learning plan |
| **Resume** | `POST` | `/api/resume/analyze` | Evaluate resume and suggest improvements |
| **Chatbot** | `POST` | `/api/chat/message` | Send message to AI Mentor |
| **Jobs** | `GET` | `/api/jobs/recommendations`| Get skill-matched job listings |

---

## 🗄️ Database Schema Overview

- **User:** `name`, `email`, `password`, `targetRole`, `experienceLevel`, `dailyLearningTime`
- **Profile:** Linked to User; contains `skills`, `interests`, `portfolioUrl`, `githubUrl`
- **CareerAnalysis:** `careerScore`, `recommendedRoles`, `missingSkills`, `interviewPlan`
- **ProjectSuggestion:** `title`, `description`, `difficulty`, `techStack`, `resumeValue`
- **Roadmap:** `timeline` (30/60/90 days), `weeklyTasks`
- **ChatMessage:** `userId`, `role` (user/assistant), `content`, `timestamp`

---

## 🤖 AI Features & Prompt Engineering

The core intelligence is driven by meticulously crafted AI prompts ensuring structured, actionable outputs:

- **AI Mentor Prompting:** *"You are SkillSync AI Mentor... Use the user’s profile context. Always give specific, practical, structured, and motivating answers..."*
- **Project Generation:** Generates comprehensive project blueprints including problem statements, required stacks, and specific resume bullet points.
- **Skill Assessment:** Maps user skills against industry standards to dynamically assign priority levels to missing skills.

---

## 🚀 Installation & Setup

### Environment Variables
Create a `.env` file in the `server` directory:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
AI_API_KEY=your_ai_service_api_key
```

### Running the Backend
```bash
cd server
npm install
npm run dev
```
*Backend runs on http://localhost:5000*

### Running the Frontend
```bash
# In the root directory
npm install
npm run dev
```
*Frontend runs on http://localhost:3000*

---

## 🔮 Future Scope
- **LinkedIn/GitHub Integration:** One-click profile parsing and activity tracking.
- **Mock Interview Simulator:** Voice and video-based technical and behavioral mock interviews.
- **Recruiter Portal:** Direct access for recruiters to discover top talent based on verified skill scores and project portfolios.

## 🎓 Learning Outcomes
Building SkillSync.ai demonstrates advanced proficiency in full-stack architecture, API design, AI prompt engineering, complex state management, and delivering premium, polished user experiences.

---
*Designed & Built for the future of career tech.*
