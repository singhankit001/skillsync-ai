"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Bookmark,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const jobs = [
  {
    id: 1,
    company: "Razorpay",
    logo: "R",
    logoColor: "from-blue-500 to-indigo-600",
    role: "Frontend Intern",
    location: "Bangalore",
    salary: "40-50k/month",
    matchScore: 92,
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    company: "Zoho",
    logo: "Z",
    logoColor: "from-red-500 to-orange-500",
    role: "AI/ML Intern",
    location: "Chennai",
    salary: "35-45k/month",
    matchScore: 85,
    tags: ["Python", "TensorFlow", "NLP"],
  },
  {
    id: 3,
    company: "Swiggy",
    logo: "S",
    logoColor: "from-orange-500 to-amber-500",
    role: "SDE Intern",
    location: "Remote",
    salary: "45-55k/month",
    matchScore: 78,
    tags: ["Node.js", "MongoDB", "AWS"],
  },
  {
    id: 4,
    company: "Flipkart",
    logo: "F",
    logoColor: "from-yellow-500 to-amber-500",
    role: "Backend Intern",
    location: "Bangalore",
    salary: "50-60k/month",
    matchScore: 72,
    tags: ["Java", "Spring", "MySQL"],
  },
];

export function JobRecommendations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
            <Briefcase className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">
              Job Recommendations
            </h3>
            <p className="text-sm text-muted-foreground">
              Matched to your profile
            </p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="flex-shrink-0 w-72 snap-start glass-card p-5 cursor-pointer group hover:border-indigo-500/50 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "h-12 w-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg",
                      job.logoColor
                    )}
                  >
                    {job.logo}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {job.role}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {job.company}
                    </p>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  {job.salary}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    job.matchScore >= 85
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : job.matchScore >= 75
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  )}
                >
                  {job.matchScore}% Match
                </div>
                <button className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors opacity-0 group-hover:opacity-100">
                  Apply
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
