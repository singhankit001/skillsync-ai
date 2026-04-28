"use client";

import { motion } from "framer-motion";
import { Bookmark, Briefcase, FolderKanban, ChevronRight } from "lucide-react";

const savedJobs = [
  { id: 1, title: "SDE Intern", company: "Google", matchScore: 88 },
  { id: 2, title: "ML Engineer", company: "Microsoft", matchScore: 82 },
];

const savedProjects = [
  { id: 1, title: "E-commerce Platform", difficulty: "Advanced" },
  { id: 2, title: "Portfolio Website", difficulty: "Beginner" },
];

export function SavedItems() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
          <Bookmark className="h-5 w-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Saved Items</h3>
          <p className="text-sm text-muted-foreground">
            Your bookmarked content
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Saved Jobs */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-foreground">
                Saved Jobs
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {savedJobs.length} items
            </span>
          </div>

          <div className="space-y-3">
            {savedJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {job.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{job.company}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                  {job.matchScore}%
                </span>
              </motion.div>
            ))}
          </div>

          <button className="mt-4 flex items-center justify-center gap-1 w-full py-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            View all saved jobs
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Saved Projects */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-foreground">
                Saved Projects
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {savedProjects.length} items
            </span>
          </div>

          <div className="space-y-3">
            {savedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {project.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {project.difficulty}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </motion.div>
            ))}
          </div>

          <button className="mt-4 flex items-center justify-center gap-1 w-full py-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
            View all saved projects
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
