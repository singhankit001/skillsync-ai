"use client";

import { motion } from "framer-motion";
import { Bookmark, Briefcase, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export function SavedItems() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="glass-panel glass-card-hover p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-gray-500/20">
            <Bookmark className="h-6 w-6 text-gray-500 dark:text-slate-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Saved Items</h3>
            <p className="text-sm font-medium text-muted-foreground">Jobs & Articles</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-primary/30 transition-colors cursor-pointer" onClick={() => toast("Opening saved item...")}>
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-bold text-foreground">Software Engineer Intern</p>
                <p className="text-xs text-muted-foreground">Google • Saved 2d ago</p>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
