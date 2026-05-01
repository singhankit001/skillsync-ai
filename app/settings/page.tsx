"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { User, Settings as SettingsIcon, Bell, Shield, Database, Sparkles, LogOut } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const sections = [
    {
      id: "profile",
      title: "Profile Settings",
      icon: User,
      desc: "Manage your personal information and career identity.",
      fields: [
        { label: "Full Name", value: "Ankit Singh", type: "text" },
        { label: "Email Address", value: "ankit@careeros.ai", type: "email" },
        { label: "Target Role", value: "Full Stack Engineer", type: "text" },
      ]
    },
    {
      id: "ai",
      title: "AI Preferences",
      icon: Sparkles,
      desc: "Customize how the AI Mentor interacts with your data.",
      fields: [
        { label: "AI Guidance Level", value: "Expert / Proactive", type: "select" },
        { label: "Learning Pace", value: "Fast (15+ hours/week)", type: "select" },
      ]
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
      desc: "Configure how you want to be notified of job matches.",
      fields: [
        { label: "Email Notifications", value: "Enabled", type: "toggle" },
        { label: "Browser Alerts", value: "Enabled", type: "toggle" },
      ]
    }
  ];

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-primary/10 border border-primary/20 shadow-xl">
            <SettingsIcon className="h-10 w-10 text-primary animate-spin-slow" />
          </div>
          <div>
            <h1 className="text-5xl font-black text-foreground tracking-tighter">Settings</h1>
            <p className="text-muted-foreground text-lg font-medium opacity-70">
              Configure your AI career operating system.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="glass-card p-10 premium-noise overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex items-start gap-8 relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary dark:bg-white/5 border border-border/60 shadow-inner group-hover:scale-110 transition-transform">
                  <section.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-foreground mb-2">{section.title}</h3>
                  <p className="text-muted-foreground font-medium mb-8 opacity-80">{section.desc}</p>
                  
                  <div className="grid gap-6">
                    {section.fields.map((field) => (
                      <div key={field.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-border/40">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{field.label}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-bold text-foreground">{field.value}</span>
                          <button 
                            onClick={() => toast(`Editing ${field.label}...`)}
                            className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => toast.error("Signing out...")}
          className="w-full flex items-center justify-center gap-4 p-8 rounded-[2rem] bg-rose-500/10 border border-rose-500/20 text-rose-500 font-black text-xs uppercase tracking-[0.3em] hover:bg-rose-500/20 transition-all shadow-xl"
        >
          <LogOut className="h-5 w-5" />
          Sign Out of CareerOS
        </motion.button>
      </motion.div>
    </DashboardLayout>
  );
}
