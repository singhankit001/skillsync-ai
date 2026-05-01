"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Mic, Video, Sparkles, Target, Zap, ArrowRight, Play, BookOpen } from "lucide-react";
import { InterviewPrep } from "@/components/dashboard/interview-prep";

export default function InterviewPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-violet-500/10 border border-violet-500/20 shadow-xl">
              <Video className="h-10 w-10 text-violet-500" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-foreground tracking-tighter">Interview Prep</h1>
              <p className="text-muted-foreground text-lg font-medium opacity-70">
                AI-simulated mock interviews and behavioral coaching.
              </p>
            </div>
          </div>
          
          <button className="flex items-center gap-3 px-8 py-5 rounded-[1.5rem] bg-violet-500 text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-violet-500/30 hover:bg-violet-600 transition-all">
            <Play className="h-4 w-4" /> Start Mock Session
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-10 premium-noise group cursor-pointer hover:border-primary/40 transition-all">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3">Technical Rounds</h3>
            <p className="text-muted-foreground font-medium opacity-70 mb-6">Master System Design, Data Structures, and Architecture rounds with real-time AI feedback.</p>
            <div className="flex items-center text-primary text-[10px] font-black uppercase tracking-widest gap-2">
              Launch Session <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="glass-card p-10 premium-noise group cursor-pointer hover:border-violet-400/40 transition-all">
            <div className="h-14 w-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20">
              <BookOpen className="h-7 w-7 text-violet-500" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3">Behavioral Coaching</h3>
            <p className="text-muted-foreground font-medium opacity-70 mb-6">Refine your storytelling and leadership responses using the STAR method optimized by AI.</p>
            <div className="flex items-center text-violet-500 text-[10px] font-black uppercase tracking-widest gap-2">
              Start Coaching <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        <InterviewPrep />
      </motion.div>
    </DashboardLayout>
  );
}
