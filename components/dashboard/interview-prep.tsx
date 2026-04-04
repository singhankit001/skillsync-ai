"use client";

import { motion } from "framer-motion";
import { MessageSquare, Play, PlayCircle } from "lucide-react";
import { toast } from "sonner";

const prepCategories = [
  {
    title: "Technical Mock",
    description: "React & System Design focus",
    stats: "2 pending areas",
    icon: <PlayCircle className="h-5 w-5 text-indigo-500" />,
    color: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Behavioral",
    description: "STAR method practice",
    stats: "Ready to start",
    icon: <MessageSquare className="h-5 w-5 text-emerald-500" />,
    color: "bg-emerald-500/10 border-emerald-500/20",
  },
];

export function InterviewPrep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="glass-panel glass-card-hover p-6 md:p-8 flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/20">
          <MessageSquare className="h-6 w-6 text-rose-500 dark:text-rose-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">AI Mock Interviews</h3>
          <p className="text-sm font-medium text-muted-foreground">Practice with voice AI</p>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {prepCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="group p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-start gap-4 cursor-pointer"
            onClick={() => toast("Initializing AI Voice Server for mock interview...")}
          >
            <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${category.color} shadow-sm group-hover:scale-110 transition-transform`}>
              {category.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-foreground">{category.title}</h4>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">
                {category.description}
              </p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/5 dark:border-white/5">
                <span className="text-xs font-semibold text-muted-foreground">
                  {category.stats}
                </span>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  <Play className="h-4 w-4" fill="currentColor" />
                  Start
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
