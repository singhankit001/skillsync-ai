"use client";

import { motion } from "framer-motion";
import { TrendingUp, Sparkles } from "lucide-react";

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
}

function ProgressRing({
  progress,
  size = 160,
  strokeWidth = 12,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="rotate-[-90deg]" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl font-bold gradient-text"
        >
          {progress}%
        </motion.span>
        <span className="text-xs text-muted-foreground mt-1">Career Score</span>
      </div>
    </div>
  );
}

interface ScoreBreakdownProps {
  label: string;
  value: number;
  color: string;
}

function ScoreBreakdown({ label, value, color }: ScoreBreakdownProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

export function CareerScore() {
  const breakdowns = [
    { label: "Skills", value: 80, color: "bg-indigo-500" },
    { label: "Projects", value: 70, color: "bg-purple-500" },
    { label: "Resume", value: 75, color: "bg-pink-500" },
    { label: "Interviews", value: 60, color: "bg-amber-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl p-6 md:p-8"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      {/* Glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Border glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/10" />
      <div className="absolute inset-0 rounded-2xl glow-border" />

      <div className="relative flex flex-col lg:flex-row items-center gap-8">
        {/* Left - Progress Ring */}
        <div className="flex-shrink-0">
          <ProgressRing progress={85} />
        </div>

        {/* Right - Breakdown */}
        <div className="flex-1 w-full space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Career Score Breakdown
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Your overall career readiness
              </p>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-sm">
              <TrendingUp className="h-4 w-4" />
              <span>+5% this week</span>
            </div>
          </div>

          <div className="grid gap-4">
            {breakdowns.map((item) => (
              <ScoreBreakdown key={item.label} {...item} />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Sparkles className="h-4 w-4" />
            Improve Score with AI
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
