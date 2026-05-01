/**
 * Frontend Service Abstraction Layer
 * Used for cleanly connecting to backend APIs or falling back to mock local state
 * if the backend is unavailable. This makes the frontend API-ready.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Simulated network delay helper for fallback
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const careerService = {
  analyzeScore: async (userId: string) => {
    try {
      const response = await fetch(`${API_URL}/career/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });
      const result = await response.json();
      if (result.success) return result.data;
      throw new Error(result.message);
    } catch (error) {
      console.warn("Backend unavailable, using mock career analysis");
      await delay(1000);
      return {
        careerScore: 85,
        metrics: { skills: 80, projects: 70, resume: 75, interviews: 60 },
        roadmap: { "30-day": "Master Node.js Event Loop" }
      };
    }
  }
};

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const result = await response.json();
      if (result.success) return result.data.reply;
      throw new Error(result.message);
    } catch (error) {
      await delay(1000);
      const text = message.toLowerCase();
      if (text.includes("roadmap")) return "I can help you build a 30-day roadmap.";
      if (text.includes("resume")) return "Let's review your resume. Please upload it.";
      return "I am your AI mentor. How can I help you upskill today?";
    }
  }
};

export const jobService = {
  getRecommendations: async () => {
    try {
      const response = await fetch(`${API_URL}/jobs/recommendations`);
      const result = await response.json();
      if (result.success) return result.data;
      throw new Error(result.message);
    } catch (error) {
      await delay(1000);
      return [
        {
          id: 1,
          role: "AI/ML Intern",
          company: "OpenAI",
          location: "San Francisco / Remote",
          match: 95
        },
        {
          id: 2,
          role: "Frontend Engineer",
          company: "Vercel",
          location: "Remote",
          match: 88
        }
      ];
    }
  }
};
