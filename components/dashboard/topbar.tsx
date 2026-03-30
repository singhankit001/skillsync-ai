"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, ChevronDown, Sparkles, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { toast } from "sonner";

const notifications = [
  {
    id: 1,
    title: "New job match",
    message: "Frontend Intern at Razorpay matches your profile",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    title: "Skill milestone",
    message: "You've reached 80% proficiency in React",
    time: "1h ago",
    unread: true,
  },
];

export function Topbar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      toast.loading("Searching knowledge base...", { duration: 1500 });
      setTimeout(() => toast.success("Search completed"), 1500);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 px-4 md:px-6 lg:px-8 glass-panel border-b-0 border-white/5 shadow-sm">
      {/* Search */}
      <div className="flex-1 max-w-xl ml-14 lg:ml-0">
        <motion.div
          animate={{
            scale: searchFocused ? 1.02 : 1,
            boxShadow: searchFocused ? "0 0 0 2px rgba(139, 92, 246, 0.3)" : "none",
          }}
          className={cn(
            "relative flex items-center rounded-full bg-black/5 dark:bg-white/5 border transition-all duration-300",
            searchFocused ? "border-primary/50" : "border-black/10 dark:border-white/10"
          )}
        >
          <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search jobs, skills, projects..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            onKeyDown={handleSearch}
            className="w-full bg-transparent py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <div className="absolute right-3 hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              Ctrl
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              K
            </kbd>
          </div>
        </motion.div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* AI Status Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 cursor-pointer"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('open-ai-chat'));
          }}
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            AI Active
          </span>
        </motion.div>

        {/* Theme Toggle */}
        {mounted && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-muted-foreground" />
            )}
          </motion.button>
        )}

        {/* Notifications */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <Bell className="h-5 w-5 text-muted-foreground" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white shadow-lg">
                {unreadCount}
              </span>
            )}
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15, type: "spring", stiffness: 300, damping: 25 }}
                className="absolute right-0 top-full mt-3 w-80 rounded-2xl glass-panel shadow-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/5">
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                  <button 
                    onClick={() => toast.success("All notifications marked as read")}
                    className="text-xs text-primary hover:underline"
                  >
                    Mark all read
                  </button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => toast.info(`Viewing: ${notification.title}`)}
                      className={cn(
                        "p-4 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer",
                        notification.unread && "bg-primary/5"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {notification.unread && (
                          <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        )}
                        <div className={cn(!notification.unread && "ml-5")}>
                          <p className="text-sm font-medium text-foreground">
                            {notification.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground/60 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-black/5 dark:border-white/5">
                  <button 
                    onClick={() => toast("Opening notification center...")}
                    className="w-full py-2 text-sm text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold shadow-inner">
              A
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform",
                showProfile && "rotate-180"
              )}
            />
          </motion.button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15, type: "spring", stiffness: 300, damping: 25 }}
                className="absolute right-0 top-full mt-3 w-56 rounded-2xl glass-panel shadow-2xl overflow-hidden"
              >
                <div className="p-4 border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                  <p className="font-semibold text-foreground">Ankit Singh</p>
                  <p className="text-sm text-muted-foreground">ankit@skillsync.ai</p>
                </div>
                <div className="p-2 space-y-1">
                  {["Profile", "Settings", "Help Center"].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        if (item === "Profile" || item === "Settings") {
                          window.location.href = "/settings";
                        } else {
                          toast(`Navigating to ${item}`);
                        }
                        setShowProfile(false);
                      }}
                      className="w-full px-3 py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="p-2 border-t border-black/5 dark:border-white/5">
                  <button 
                    onClick={() => toast.error("Signed out")}
                    className="w-full px-3 py-2 text-left text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
