"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { JobRecommendations } from "@/components/dashboard/job-recommendations";

export default function JobsPage() {
  return (
    <DashboardLayout>
      <JobRecommendations />
    </DashboardLayout>
  );
}
