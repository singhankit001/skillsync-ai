"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { ProjectRecommendations } from "@/components/dashboard/project-recommendations";

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <ProjectRecommendations />
    </DashboardLayout>
  );
}
