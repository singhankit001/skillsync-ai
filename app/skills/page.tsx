"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Brain, Search, Plus, Sparkles, Target, Zap, TrendingUp } from "lucide-react";
import { SkillGap } from "@/components/dashboard/skill-gap";

export default function SkillsPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-amber-500/10 border border-amber-500/20 shadow-xl">
              <Brain className="h-10 w-10 text-amber-500" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-foreground tracking-tighter">Skill Arsenal</h1>
              <p className="text-muted-foreground text-lg font-medium opacity-70">
                Track and expand your technical proficiency.
              </p>
            </div>
          </div>
          
          <button className="flex items-center gap-3 px-8 py-5 rounded-[1.5rem] bg-primary text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all">
            <Plus className="h-4 w-4" /> Add New Skill
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Mastered", val: "14", icon: Target, color: "text-emerald-400" },
            { label: "Learning", val: "6", icon: Clock, color: "text-amber-400" },
            { label: "AI Targets", val: "4", icon: Sparkles, color: "text-primary" },
            { label: "Avg Depth", val: "78%", icon: TrendingUp, color: "text-cyan-400" }
          ].map(stat => (
            <div key={stat.label} className="glass-card p-6 flex flex-col items-center text-center premium-noise">
              <stat.icon className={`h-6 w-6 ${stat.color} mb-3`} />
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 opacity-60">{stat.label}</p>
              <p className="text-2xl font-black text-foreground">{stat.val}</p>
            </div>
          ))}
        </div>

        <SkillGap />
      </motion.div>
    </DashboardLayout>
  );
}

import { Clock } from "lucide-react";
