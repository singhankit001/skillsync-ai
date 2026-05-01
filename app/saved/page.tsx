"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Bookmark, Search, Filter, Sparkles, Zap, ArrowRight, Grid, List } from "lucide-react";
import { SavedItems } from "@/components/dashboard/saved-items";

export default function SavedPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-pink-500/10 border border-pink-500/20 shadow-xl">
              <Bookmark className="h-10 w-10 text-pink-500" />
            </div>
            <div>
              <h1 className="text-5xl font-black text-foreground tracking-tighter">Vault</h1>
              <p className="text-muted-foreground text-lg font-medium opacity-70">
                Your collection of saved jobs, projects, and resources.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex p-1 rounded-2xl bg-secondary border border-border/40">
              <button className="p-3 rounded-xl bg-background shadow-sm"><Grid className="h-4 w-4" /></button>
              <button className="p-3 rounded-xl text-muted-foreground"><List className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        <SavedItems />
      </motion.div>
    </DashboardLayout>
  );
}
