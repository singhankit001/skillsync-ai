"use client";

import { motion } from "framer-motion";
import { TrendingUp, Sparkles, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export function CareerScore() {
  const score = 85;
  const metrics = [
    { label: "Skills", value: 80, color: "bg-indigo-500" },
    { label: "Projects", value: 70, color: "bg-purple-500" },
    { label: "Resume", value: 75, color: "bg-pink-500" },
    { label: "Interviews", value: 60, color: "bg-orange-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel glass-card-hover p-8 relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="flex flex-col md:flex-row gap-10 relative z-10">
        {/* Score Circle */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center">
          <div className="relative h-44 w-44">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                className="text-black/5 dark:text-white/5 stroke-current"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              />
              <motion.circle
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * score) / 100 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                className="text-primary stroke-current"
                strokeWidth="8"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray="251.2"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(139,92,246,0.5))",
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                className="text-4xl font-black text-foreground tracking-tighter"
              >
                {score}%
              </motion.span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
                Readiness
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Career Score Breakdown
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your overall readiness for full-time roles
              </p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold border border-emerald-500/20"
            >
              <TrendingUp className="h-4 w-4" />
              +5% this week
            </motion.div>
          </div>

          <div className="space-y-5">
            {metrics.map((metric, index) => (
              <div key={metric.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">{metric.label}</span>
                  <span className="font-semibold text-muted-foreground">{metric.value}%</span>
                </div>
                <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full ${metric.color} shadow-[0_0_10px_currentColor] opacity-80`}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-ai-chat', { 
                detail: { prompt: "Analyze my career score and tell me how to improve it." } 
              }));
            }}
            className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            <Sparkles className="h-5 w-5" />
            Improve Score with AI
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
