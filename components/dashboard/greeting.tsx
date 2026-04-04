"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

export function Greeting() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative"
    >
      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
        >
          {greeting}, <span className="gradient-text-premium">Ankit</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-2 text-sm md:text-base font-medium max-w-lg"
        >
          Your AI career assistant has analyzed your progress. You have 2 high-priority skills to acquire today.
        </motion.p>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        onClick={() => {
          window.dispatchEvent(new CustomEvent('open-ai-chat'));
        }}
        className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-primary/30 dark:border-primary/50 shadow-sm overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Sparkles className="h-4 w-4 text-primary relative z-10" />
        <span className="text-sm font-semibold text-primary relative z-10">
          AI Insights Active
        </span>
      </motion.button>
    </motion.div>
  );
}
