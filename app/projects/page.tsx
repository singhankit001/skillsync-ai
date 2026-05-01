"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Code2, Search, Filter, Sparkles, Zap, ArrowRight, Github, ExternalLink } from "lucide-react";
import { ProjectRecommendations } from "@/components/dashboard/project-recommendations";

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-rose-500/10 border border-rose-500/20 shadow-xl">
              <Code2 className="h-10 w-10 text-rose-500" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-foreground tracking-tighter">Project Blueprints</h1>
              <p className="text-muted-foreground text-lg font-medium opacity-70">
                High-impact projects tailored to your target role.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-8 py-5 rounded-[1.5rem] bg-foreground text-background font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-foreground/90 transition-all">
              <Plus className="h-4 w-4" /> New Blueprint
            </button>
          </div>
        </div>

        <ProjectRecommendations />
        
        <div className="mt-16 pt-16 border-t border-border/40">
          <h3 className="text-2xl font-black text-foreground mb-8 tracking-tight">Active Builds</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "E-Commerce Microservices", progress: 65, tech: ["Node.js", "Redis", "Docker"] },
              { title: "AI Portfolio Site", progress: 90, tech: ["Next.js", "Framer", "OpenAI"] }
            ].map(project => (
              <div key={project.title} className="glass-card p-10 premium-noise group">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-black text-foreground">{project.title}</h4>
                  <div className="flex gap-3">
                    <button className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all"><Github className="h-5 w-5" /></button>
                    <button className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all"><ExternalLink className="h-5 w-5" /></button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest opacity-60">
                    <span>Build Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-foreground/5 text-[9px] font-bold text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}

import { Plus } from "lucide-react";
