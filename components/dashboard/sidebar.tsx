"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
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
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
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
  const pathname = usePathname();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {!collapsed && !isLargeScreen && (
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
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 lg:hidden shadow-sm"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </motion.button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: !isLargeScreen && collapsed ? "-100%" : 0,
          width: isLargeScreen ? (collapsed ? 80 : 260) : 260,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col",
          "glass-panel border-r border-black/5 dark:border-white/5",
          "lg:relative lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-black/5 dark:border-white/5">
          <AnimatePresence mode="wait">
            {!collapsed ? (
              <motion.div
                key="full-logo"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-2.5 cursor-pointer"
                onClick={() => toast("Welcome back to SkillSync!")}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-500 shadow-md">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight text-foreground">
                  SkillSync<span className="text-primary">.ai</span>
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="mini-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="mx-auto"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-500 shadow-md">
                  <Brain className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggle}
            className="hidden lg:flex h-7 w-7 items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors ml-auto"
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform duration-300",
                collapsed && "rotate-180"
              )}
            />
          </motion.button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <ul className="space-y-1.5">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link href={item.href} className="block">
                    <motion.div
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground",
                        collapsed && "justify-center px-0"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-primary rounded-r-full shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                          transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 250,
                          }}
                        />
                      )}
                      <item.icon 
                        className={cn(
                          "h-5 w-5 shrink-0 transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                        )} 
                      />
                      {!collapsed && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="overflow-hidden whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="border-t border-black/5 dark:border-white/5 p-4 bg-black/[0.01] dark:bg-white/[0.01]">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-inner">
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
              <p className="text-sm font-semibold text-foreground truncate">
                Ankit Singh
              </p>
              <p className="text-xs text-muted-foreground truncate">
                ankit@skillsync.ai
              </p>
            </motion.div>
            <motion.button
              initial={false}
              animate={{ opacity: collapsed ? 0 : 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toast.error("Sign out action triggered")}
              className="p-1.5 shrink-0 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
            >
              <LogOut className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
