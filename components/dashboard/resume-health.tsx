"use client";

import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export function ResumeHealth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="glass-panel glass-card-hover p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/20">
          <FileText className="h-6 w-6 text-pink-500 dark:text-rose-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Resume Health</h3>
          <p className="text-sm font-medium text-muted-foreground">ATS Optimization</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Great formatting</p>
            <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-1">Easily parsed by most ATS systems.</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-amber-700 dark:text-amber-400">Missing keywords</p>
            <p className="text-xs text-amber-600/80 dark:text-amber-400/80 mt-1">Add 'Redux', 'TypeScript', and 'Jest' to match your target role.</p>
          </div>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => toast.success("Downloading AI optimization report...")}
        className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      >
        <Download className="h-4 w-4" />
        Download Full Report
      </motion.button>
    </motion.div>
  );
}
