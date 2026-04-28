"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Greeting() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          {greeting}, Ankit
        </h1>
        <p className="text-muted-foreground mt-1">
          Your AI career assistant is ready to help
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Sparkles className="h-4 w-4 text-indigo-400" />
        <span className="text-sm font-medium text-indigo-300">
          AI Insights Active
        </span>
      </motion.div>
    </motion.div>
  );
}
