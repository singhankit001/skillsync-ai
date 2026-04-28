"use client";

import { motion } from "framer-motion";
import { Brain, Zap, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const currentSkills = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Git", level: "Intermediate" },
];

const missingSkills = [
  { name: "Node.js", priority: "High" },
  { name: "System Design", priority: "High" },
  { name: "MongoDB", priority: "Medium" },
  { name: "Docker", priority: "Medium" },
  { name: "AWS", priority: "Low" },
];

export function SkillGap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-card glass-card-hover p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
            <Brain className="h-5 w-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Skill Gap Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Based on your target roles
            </p>
          </div>
        </div>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          AI Analyzed
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Skills */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            Current Skills
          </div>
          <div className="flex flex-wrap gap-2">
            {currentSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm"
              >
                <span className="text-emerald-400">{skill.name}</span>
                <span className="text-emerald-400/60 text-xs">
                  {skill.level}
                </span>
              </motion.span>
            ))}
          </div>
        </div>

        {/* Missing Skills */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <XCircle className="h-4 w-4 text-amber-400" />
            Skills to Acquire
          </div>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 + 0.2 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm ${
                  skill.priority === "High"
                    ? "bg-red-500/10 border-red-500/20 text-red-400"
                    : skill.priority === "Medium"
                    ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                    : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                }`}
              >
                <span>{skill.name}</span>
                <span className="opacity-60 text-xs">{skill.priority}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-foreground font-medium hover:bg-white/10 hover:border-indigo-500/50 transition-all"
      >
        <Zap className="h-4 w-4 text-indigo-400" />
        Generate Learning Plan
        <ArrowRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
}
