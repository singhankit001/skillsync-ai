"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Brain,
  Briefcase,
  FolderKanban,
  FileText,
  MessageSquare,
  Bookmark,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
  { icon: Brain, label: "Skill Analyzer", href: "/skills" },
  { icon: Briefcase, label: "Jobs", href: "/jobs" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: FileText, label: "Resume", href: "/resume" },
  { icon: MessageSquare, label: "Interview Prep", href: "/interview" },
  { icon: Bookmark, label: "Saved", href: "/saved" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 lg:hidden"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: collapsed ? "-100%" : 0,
          width: 256,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen w-64 flex-col",
          "bg-black/40 backdrop-blur-xl border-r border-white/10",
          "lg:relative lg:translate-x-0",
          collapsed ? "lg:w-20" : "lg:w-64"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-white/5">
          <motion.div
            initial={false}
            animate={{ opacity: collapsed ? 0 : 1 }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold gradient-text">
              SkillSync.ai
            </span>
          </motion.div>
          <button
            onClick={onToggle}
            className="hidden lg:flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                collapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <li key={item.label}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={cn(
                      "relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                      isActive
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-indigo-500 rounded-full"
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 200,
                        }}
                      />
                    )}
                    <item.icon className="h-5 w-5 shrink-0" />
                    <motion.span
                      initial={false}
                      animate={{
                        opacity: collapsed ? 0 : 1,
                        width: collapsed ? 0 : "auto",
                      }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="border-t border-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                A
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-background" />
            </div>
            <motion.div
              initial={false}
              animate={{
                opacity: collapsed ? 0 : 1,
                width: collapsed ? 0 : "auto",
              }}
              className="flex-1 overflow-hidden"
            >
              <p className="text-sm font-medium text-foreground truncate">
                Ankit Singh
              </p>
              <p className="text-xs text-muted-foreground truncate">
                ankit@skillsync.ai
              </p>
            </motion.div>
            <motion.button
              initial={false}
              animate={{ opacity: collapsed ? 0 : 1 }}
              className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
