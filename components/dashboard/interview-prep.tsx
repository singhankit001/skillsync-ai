"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Code,
  Users,
  Video,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const prepCategories = [
  {
    id: 1,
    title: "DSA Practice",
    description: "Solve coding problems with AI hints",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    stats: "150+ Problems",
  },
  {
    id: 2,
    title: "HR Questions",
    description: "Practice behavioral interview questions",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    stats: "50+ Questions",
  },
  {
    id: 3,
    title: "Mock Interview",
    description: "AI-powered mock interview sessions",
    icon: Video,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
    stats: "Real-time Feedback",
  },
];

export function InterviewPrep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
            <MessageSquare className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Interview Prep</h3>
            <p className="text-sm text-muted-foreground">
              Prepare with AI assistance
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {prepCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-5 cursor-pointer group hover:border-indigo-500/50 transition-all"
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl mb-4",
                category.bgColor
              )}
            >
              <category.icon className={cn("h-6 w-6", category.iconColor)} />
            </div>

            <h4 className="font-semibold text-foreground mb-1">
              {category.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {category.description}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-xs text-muted-foreground">
                {category.stats}
              </span>
              <button className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors opacity-0 group-hover:opacity-100">
                Start
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
