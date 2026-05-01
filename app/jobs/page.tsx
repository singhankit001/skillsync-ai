"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Briefcase, Search, Filter, Sparkles, TrendingUp, MapPin, Building2, Clock } from "lucide-react";
import { JobRecommendations } from "@/components/dashboard/job-recommendations";

export default function JobsPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-cyan-500/10 border border-cyan-500/20 shadow-xl">
              <Briefcase className="h-10 w-10 text-cyan-500" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-foreground tracking-tighter">Job Intelligence</h1>
              <p className="text-muted-foreground text-lg font-medium opacity-70">
                AI-curated internship and career opportunities.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search roles..." 
                className="pl-12 pr-6 py-4 rounded-2xl bg-secondary border border-border/60 text-sm font-bold w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <button className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary border border-border/60 text-[10px] font-black uppercase tracking-widest hover:bg-secondary/80 transition-all">
              <Filter className="h-4 w-4" /> Filters
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "New Matches", val: "12", icon: Sparkles, color: "text-primary" },
            { label: "High Demand", val: "8", icon: TrendingUp, color: "text-emerald-400" },
            { label: "Expiring Soon", val: "3", icon: Clock, color: "text-rose-400" }
          ].map(stat => (
            <div key={stat.label} className="glass-card p-8 flex items-center justify-between premium-noise">
              <div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1.5 opacity-60">{stat.label}</p>
                <p className="text-3xl font-black text-foreground">{stat.val}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color} opacity-40`} />
            </div>
          ))}
        </div>

        <JobRecommendations />
      </motion.div>
    </DashboardLayout>
  );
}
