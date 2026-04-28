"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Greeting } from "@/components/dashboard/greeting";
import { CareerScore } from "@/components/dashboard/career-score";
import { SkillGap } from "@/components/dashboard/skill-gap";
import { JobRecommendations } from "@/components/dashboard/job-recommendations";
import { ProjectRecommendations } from "@/components/dashboard/project-recommendations";
import { ResumeHealth } from "@/components/dashboard/resume-health";
import { InterviewPrep } from "@/components/dashboard/interview-prep";
import { SavedItems } from "@/components/dashboard/saved-items";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Greeting Section */}
        <Greeting />

        {/* Career Score - Hero Card */}
        <CareerScore />

        {/* Skill Gap Analysis */}
        <SkillGap />

        {/* Job Recommendations */}
        <JobRecommendations />

        {/* Project Recommendations */}
        <ProjectRecommendations />

        {/* Resume Health & Interview Prep Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <ResumeHealth />
          <div className="glass-card p-6 flex flex-col justify-center items-center text-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
              <svg
                className="h-8 w-8 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              AI-Powered Insights
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Get personalized recommendations based on your skills, experience,
              and career goals
            </p>
          </div>
        </div>

        {/* Interview Prep */}
        <InterviewPrep />

        {/* Saved Items */}
        <SavedItems />
      </div>
    </DashboardLayout>
  );
}
