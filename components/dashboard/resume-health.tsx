"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle, Sparkles, CheckCircle } from "lucide-react";

const missingKeywords = [
  "Agile",
  "CI/CD",
  "Unit Testing",
  "REST APIs",
  "Microservices",
];

const weakSections = [
  { section: "Work Experience", issue: "Missing quantifiable achievements" },
  { section: "Skills", issue: "Technical skills could be more detailed" },
  { section: "Summary", issue: "Consider adding a professional summary" },
];

interface MiniProgressRingProps {
  progress: number;
  size?: number;
}

function MiniProgressRing({ progress, size = 100 }: MiniProgressRingProps) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="rotate-[-90deg]" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={progress >= 80 ? "#22c55e" : progress >= 60 ? "#eab308" : "#ef4444"}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{progress}</span>
        <span className="text-xs text-muted-foreground">ATS Score</span>
      </div>
    </div>
  );
}

export function ResumeHealth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card glass-card-hover p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10">
          <FileText className="h-5 w-5 text-pink-400" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Resume Health</h3>
          <p className="text-sm text-muted-foreground">ATS compatibility check</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Score Ring */}
        <div className="flex-shrink-0">
          <MiniProgressRing progress={78} />
        </div>

        {/* Issues */}
        <div className="flex-1 space-y-4 w-full">
          {/* Missing Keywords */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <AlertCircle className="h-4 w-4 text-amber-400" />
              Missing Keywords
            </div>
            <div className="flex flex-wrap gap-1.5">
              {missingKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Weak Sections */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              Sections to Improve
            </div>
            <div className="space-y-1.5">
              {weakSections.slice(0, 2).map((item) => (
                <div
                  key={item.section}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span className="font-medium">{item.section}:</span>
                  <span>{item.issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
      >
        <Sparkles className="h-4 w-4" />
        Improve Resume with AI
      </motion.button>
    </motion.div>
  );
}
