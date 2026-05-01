"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { CareerScore } from "@/components/dashboard/career-score";

export default function RoadmapPage() {
  return (
    <DashboardLayout>
      <CareerScore />
    </DashboardLayout>
  );
}
