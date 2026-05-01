"use client";

import { motion } from "framer-motion";
import { FolderKanban, CheckCircle, Code2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const projects = [
  {
    title: "AI Resume Builder",
    description: "Next.js app that generates resumes using OpenAI API.",
    tech: ["Next.js", "Tailwind", "OpenAI"],
    difficulty: "Advanced",
  },
  {
    title: "Task Dashboard",
    description: "A beautifully designed Kanban board with drag and drop.",
    tech: ["React", "Zustand", "Framer Motion"],
    difficulty: "Intermediate",
  },
];

export function ProjectRecommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass-panel glass-card-hover p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/20">
            <FolderKanban className="h-6 w-6 text-violet-500 dark:text-fuchsia-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Suggested Projects</h3>
            <p className="text-sm font-medium text-muted-foreground">Resume-building ideas</p>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => toast.promise(new Promise(r => setTimeout(r, 1000)), { loading: "Generating...", success: "New projects added!" })}
          className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Generate more
        </motion.button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-primary/50 transition-colors group cursor-pointer"
            onClick={() => toast("Opening project blueprint...")}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-foreground text-lg">{project.title}</h4>
              <span className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 font-medium text-muted-foreground">
                {project.difficulty}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-xs font-semibold rounded bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-foreground text-background font-bold text-sm">
                <CheckCircle className="h-4 w-4" /> Start Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
