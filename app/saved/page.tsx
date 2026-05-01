"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { SavedItems } from "@/components/dashboard/saved-items";

export default function SavedPage() {
  return (
    <DashboardLayout>
      <SavedItems />
    </DashboardLayout>
  );
}
