"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ResumeHealth } from "@/components/dashboard/resume-health";

export default function ResumePage() {
  return (
    <DashboardLayout>
      <ResumeHealth />
    </DashboardLayout>
  );
}
