"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, BrainCircuit, CornerDownLeft } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const SUGGESTED_PROMPTS = [
  "Analyze my career score and tell me how to improve it.",
  "Suggest 3 projects for my resume.",
  "Create a 30-day learning roadmap.",
  "How can I prepare for a React interview?"
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi Ankit! I'm your SkillSync AI Mentor. I can analyze your skills, suggest projects, build roadmaps, or prepare you for interviews. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Expose open chatbot function globally so buttons can trigger it
  useEffect(() => {
    const handleOpenChat = (e: CustomEvent) => {
      setIsOpen(true);
      if (e.detail?.prompt) {
        handleSend(e.detail.prompt);
      }
    };
    window.addEventListener("open-ai-chat" as any, handleOpenChat);
    return () => window.removeEventListener("open-ai-chat" as any, handleOpenChat);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAIResponse = (userText: string) => {
    const lowerText = userText.toLowerCase();
    if (lowerText.includes("score") || lowerText.includes("improve")) {
      return "Based on your Career Score of 85%, I recommend focusing on System Design and Node.js. Your React and frontend skills are excellent. Shall I generate a specific 2-week learning path for Node.js?";
    }
    if (lowerText.includes("project")) {
      return "Here are 3 project ideas based on your profile:\n1. Real-time Collaboration Tool (React, WebRTC)\n2. AI Resume Builder (Next.js, OpenAI API)\n3. E-commerce Dashboard (React, Tailwind, Redux)\nWhich one would you like a blueprint for?";
    }
    if (lowerText.includes("roadmap")) {
      return "I've generated a 30-day roadmap for you. Week 1: Advanced React Patterns. Week 2: System Design Basics. Week 3: Backend with Node.js. Week 4: Full-stack integration and deployment. Would you like me to save this to your profile?";
    }
    if (lowerText.includes("resume")) {
      return "I ran an ATS check on your resume. Your formatting is great, but you are missing keywords like 'TypeScript' and 'CI/CD'. I suggest adding a 'Core Competencies' section. Would you like me to rewrite your summary?";
    }
    if (lowerText.includes("interview")) {
      return "Let's prepare for your upcoming interviews. We should focus on the STAR method for behavioral questions and React hooks for technical. Say 'Start Mock' when you're ready for a practice question.";
    }
    if (lowerText.includes("job") || lowerText.includes("internship")) {
      return "I found 3 new roles that match your 92% compatibility threshold at Razorpay, Cred, and Stripe. I've added them to your Recommended Jobs dashboard. Should I draft cover letters for these?";
    }
    
    return "I understand. As your AI mentor, I can help you upskill, prepare for interviews, or optimize your resume. Could you provide a bit more detail about what you'd like to focus on right now?";
  };

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const responseText = generateAIResponse(text);
      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newAiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          >
            <Sparkles className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col w-[380px] h-[600px] max-h-[80vh] rounded-2xl glass-panel shadow-2xl border border-white/10 overflow-hidden bg-background/95 backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/5 bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-inner">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">SkillSync AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p className="text-xs font-medium text-emerald-500">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap",
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-black/5 dark:bg-white/10 text-foreground rounded-tl-sm border border-black/5 dark:border-white/5"
                    )}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-center gap-2 max-w-[85%] mr-auto bg-black/5 dark:bg-white/10 px-4 py-3 rounded-2xl rounded-tl-sm border border-black/5 dark:border-white/5">
                  <div className="flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 flex overflow-x-auto scrollbar-hide gap-2">
                {SUGGESTED_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="shrink-0 px-3 py-1.5 rounded-lg border border-primary/20 bg-primary/5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-black/5 dark:border-white/5 bg-background/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask your AI mentor..."
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 p-1.5 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
