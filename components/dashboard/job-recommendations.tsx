"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, ExternalLink, Zap } from "lucide-react";
import { toast } from "sonner";

const jobs = [
  {
    id: 1,
    role: "Frontend Engineer Intern",
    company: "Razorpay",
    location: "Bengaluru (Hybrid)",
    matchScore: 92,
    type: "Internship",
  },
  {
    id: 2,
    role: "React Developer",
    company: "Cred",
    location: "Remote",
    matchScore: 85,
    type: "Full-time",
  },
];

export function JobRecommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass-panel glass-card-hover p-6 md:p-8 relative overflow-hidden flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
            <Briefcase className="h-6 w-6 text-blue-500 dark:text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Top Job Matches</h3>
            <p className="text-sm text-muted-foreground font-medium">
              Curated by AI based on your skill profile
            </p>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => toast("Opening full job board...")}
          className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          View all
        </motion.button>
      </div>

      <div className="flex-1 overflow-x-auto scrollbar-hide -mx-2 px-2 pb-2">
        <div className="flex gap-4 h-full">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="min-w-[280px] md:min-w-[320px] flex-1 flex flex-col rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-5 group transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-foreground text-lg">{job.role}</h4>
                  <div className="flex items-center gap-2 mt-1.5 text-muted-foreground text-sm">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 font-bold text-primary border border-primary/20 shadow-inner">
                  {job.matchScore}%
                </div>
              </div>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-black/5 dark:border-white/5">
                <span className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5 text-xs font-semibold text-muted-foreground border border-black/5 dark:border-white/5">
                  {job.type}
                </span>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toast.success(`Application drafted for ${job.company}!`)}
                  className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  <Zap className="h-4 w-4" />
                  Quick Apply
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
