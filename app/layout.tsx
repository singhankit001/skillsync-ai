import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { Chatbot } from "@/components/chatbot";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SkillSync.ai - AI Career Assistant",
  description:
    "Your AI-powered career assistant for skill analysis, job matching, and interview preparation",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background transition-colors duration-300`}>
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-center" />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
