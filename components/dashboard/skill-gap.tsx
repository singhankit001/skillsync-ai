"use client";

import { motion } from "framer-motion";
import { Brain, Zap, ArrowRight, CheckCircle2, Target } from "lucide-react";
import { toast } from "sonner";

const currentSkills = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
];

const missingSkills = [
  { name: "Node.js", priority: "High" },
  { name: "System Design", priority: "High" },
  { name: "MongoDB", priority: "Medium" },
];

export function SkillGap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-panel glass-card-hover p-6 md:p-8 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20">
            <Brain className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Skill Gap Analysis</h3>
            <p className="text-sm font-medium text-muted-foreground mt-0.5">
              Based on Software Engineer roles
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex px-3 py-1 text-xs font-bold rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
          AI Analyzed
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 flex-1 relative z-10">
        {/* Current Skills */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground tracking-wide uppercase">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Current Arsenal
          </div>
          <div className="flex flex-wrap gap-2">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm font-semibold cursor-default"
              >
                <span className="text-emerald-700 dark:text-emerald-400">{skill.name}</span>
                <span className="text-emerald-600/60 dark:text-emerald-400/60 text-xs px-1.5 py-0.5 bg-emerald-500/10 rounded-md">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground tracking-wide uppercase">
            <Target className="h-4 w-4 text-amber-500" />
            Priority Targets
          </div>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, index) => (
              <motion.button
                key={skill.name}
                onClick={() => toast(`Loading learning path for ${skill.name}...`)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-semibold shadow-sm transition-all ${
                  skill.priority === "High"
                    ? "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-500/20"
                    : "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20"
                }`}
              >
                <span>{skill.name}</span>
                <span className="text-xs px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 opacity-80">
                  {skill.priority}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => {
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1500)),
            {
              loading: 'Generating personalized 30-day learning plan...',
              success: 'Learning plan ready! Redirecting...',
              error: 'Failed to generate plan.',
            }
          );
        }}
        className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground font-bold hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 transition-all shadow-sm relative z-10"
      >
        <Zap className="h-5 w-5 text-amber-500" />
        Generate 30-Day Learning Plan
        <ArrowRight className="h-5 w-5 ml-1 text-muted-foreground" />
      </motion.button>
    </motion.div>
  );
}
