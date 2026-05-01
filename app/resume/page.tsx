"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { FileText, Sparkles, Target, Zap, ArrowRight, AlertCircle, Search, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ResumePage() {
  const analysis = [
    { label: "ATS Compatibility", value: 88, status: "High" },
    { label: "Role Alignment", value: 72, status: "Medium" },
    { label: "Technical Depth", value: 94, status: "Critical" },
  ];

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-indigo-500/10 border border-indigo-500/20 shadow-xl">
              <FileText className="h-10 w-10 text-indigo-500 animate-pulse" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-foreground tracking-tighter">Resume Architect</h1>
              <p className="text-muted-foreground text-lg font-medium opacity-70">
                AI-driven resume optimization and role alignment.
              </p>
            </div>
          </div>
          <button 
            onClick={() => toast.success("Uploading new resume...")}
            className="px-10 py-5 rounded-[1.5rem] bg-foreground text-background font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-foreground/90 transition-all flex items-center gap-3"
          >
            <Sparkles className="h-4 w-4" /> Upload New Version
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {analysis.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 premium-noise text-center"
            >
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">{item.label}</p>
              <h3 className="text-6xl font-black text-foreground tracking-tighter mb-4">{item.value}%</h3>
              <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                item.status === 'High' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                item.status === 'Medium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                'bg-rose-500/10 text-rose-500 border border-rose-500/20'
              }`}>
                {item.status} Priority
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card p-10 md:p-14 premium-noise space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <Target className="h-7 w-7 text-primary" />
              <h2 className="text-3xl font-black text-foreground tracking-tight">Optimization Suite</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Identify missing keywords", desc: "AI found 4 critical backend skills missing in your bullet points." },
                { title: "Quantify impact", desc: "Suggesting data-driven metrics for your latest internship project." },
                { title: "Role alignment", desc: "Adapting tone for high-scale startup engineering teams." }
              ].map((task, i) => (
                <div key={i} className="group cursor-pointer p-6 rounded-3xl bg-secondary/50 dark:bg-white/5 border border-border/40 hover:border-primary/40 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-black text-foreground text-lg">{task.title}</h4>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium opacity-70">{task.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-10 md:p-14 premium-noise flex flex-col justify-center items-center text-center space-y-8 border-dashed border-2 border-primary/20">
            <div className="h-24 w-24 rounded-[2.5rem] bg-primary/10 flex items-center justify-center border border-primary/20 shadow-2xl">
              <Search className="h-12 w-12 text-primary animate-pulse" />
            </div>
            <div className="max-w-xs">
              <h3 className="text-2xl font-black text-foreground mb-4">Target Role Scan</h3>
              <p className="text-muted-foreground font-medium opacity-80 leading-relaxed">
                Scan your current resume against a specific job description to identify the exact gaps.
              </p>
            </div>
            <button className="px-10 py-5 rounded-[1.5rem] bg-primary text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all">
              Run Role Scan
            </button>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
