"use client";

import { motion } from "framer-motion";
import { FolderKanban, Clock, Zap, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description: "Build an AI-powered tool that analyzes resumes and provides feedback",
    techStack: ["Python", "OpenAI", "FastAPI", "React"],
    difficulty: "Intermediate",
    timeEstimate: "2-3 weeks",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    description: "Create a scalable chat application with WebSockets and Redis",
    techStack: ["Node.js", "Socket.io", "Redis", "Next.js"],
    difficulty: "Intermediate",
    timeEstimate: "1-2 weeks",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "ML Recommendation System",
    description: "Design a recommendation engine using collaborative filtering",
    techStack: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
    difficulty: "Advanced",
    timeEstimate: "3-4 weeks",
    color: "from-orange-500 to-red-600",
  },
];

export function ProjectRecommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <FolderKanban className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              Recommended Projects
            </h3>
            <p className="text-sm text-muted-foreground">
              Build skills with guided projects
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-5 cursor-pointer group hover:border-indigo-500/50 transition-all"
          >
            {/* Header gradient bar */}
            <div
              className={cn(
                "h-1 w-16 rounded-full bg-gradient-to-r mb-4",
                project.color
              )}
            />

            <h4 className="font-semibold text-foreground mb-2">
              {project.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                <span>{project.difficulty}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{project.timeEstimate}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/5 text-sm text-foreground hover:bg-white/10 transition-colors">
                <FolderKanban className="h-4 w-4" />
                View Roadmap
              </button>
              <button className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-indigo-500/10 text-sm text-indigo-400 hover:bg-indigo-500/20 transition-colors">
                <FileText className="h-4 w-4" />
                README
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
