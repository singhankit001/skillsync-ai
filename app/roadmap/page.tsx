"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Compass, Target, Zap, ArrowRight, CheckCircle2, Clock, Brain } from "lucide-react";
import { toast } from "sonner";

const roadmapData = [
  {
    phase: "Phase 1: Foundation & Mastery",
    title: "Full Stack Depth",
    status: "completed",
    tasks: ["React Server Components", "Advanced TypeScript", "Database Modeling"],
    duration: "Week 1-4"
  },
  {
    phase: "Phase 2: System Architecture",
    title: "Scalability & Performance",
    status: "current",
    tasks: ["Redis Caching", "Docker Orchestration", "Load Balancing"],
    duration: "Week 5-8"
  },
  {
    phase: "Phase 3: AI Integration",
    title: "Intelligent Systems",
    status: "upcoming",
    tasks: ["LLM Orchestration", "Vector Databases", "Prompt Engineering"],
    duration: "Week 9-12"
  }
];

export default function RoadmapPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-emerald-500/10 border border-emerald-500/20 shadow-xl">
              <Compass className="h-10 w-10 text-emerald-500 animate-pulse" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-foreground tracking-tighter">Neural Roadmap</h1>
              <p className="text-muted-foreground text-lg font-medium opacity-70">
                Your AI-synthesized 90-day execution strategy.
              </p>
            </div>
          </div>
          <button 
            onClick={() => toast.success("Recalculating roadmap...")}
            className="px-10 py-5 rounded-[1.5rem] bg-foreground text-background font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-foreground/90 transition-all"
          >
            Regenerate Path
          </button>
        </div>

        <div className="relative">
          {/* Vertical connection line */}
          <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-border/40 hidden md:block" />

          <div className="space-y-16">
            {roadmapData.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-0 md:pl-24"
              >
                {/* Status Indicator */}
                <div className={`absolute left-0 top-0 h-20 w-20 rounded-[2rem] hidden md:flex items-center justify-center border-4 border-background z-10 ${
                  item.status === 'completed' ? 'bg-emerald-500 text-white' :
                  item.status === 'current' ? 'bg-primary text-white shadow-[0_0_30px_rgba(139,92,246,0.5)]' :
                  'bg-secondary text-muted-foreground'
                }`}>
                  {item.status === 'completed' ? <CheckCircle2 className="h-10 w-10" /> :
                   item.status === 'current' ? <Zap className="h-10 w-10" /> :
                   <Clock className="h-10 w-10" />}
                </div>

                <div className={`glass-card p-10 md:p-14 premium-noise relative overflow-hidden group ${
                  item.status === 'current' ? 'border-primary/30 ring-1 ring-primary/20' : ''
                }`}>
                  <div className="absolute top-0 right-0 p-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{item.duration}</span>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">
                        {item.phase}
                      </span>
                      <h2 className="text-4xl font-black text-foreground mb-6 tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.tasks.map(task => (
                          <div key={task} className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-border/40">
                            <CheckCircle2 className={`h-5 w-5 ${item.status === 'completed' ? 'text-emerald-500' : 'text-primary/40'}`} />
                            <span className="text-sm font-bold text-foreground/80">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full lg:w-72 space-y-4">
                      <div className="p-6 rounded-3xl bg-secondary/50 dark:bg-white/5 border border-border/40">
                        <div className="flex items-center gap-3 mb-4">
                          <Brain className="h-5 w-5 text-primary" />
                          <span className="text-[10px] font-black uppercase tracking-widest">AI Context</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium italic">
                          "Focusing on this phase will unlock access to 40% more high-salary roles in your region."
                        </p>
                      </div>
                      <button className="w-full py-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-black text-[10px] uppercase tracking-widest hover:bg-primary/20 transition-all">
                        View Resources
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
