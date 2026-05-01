"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground mt-1">Your career profile and skill summary.</p>
        </div>
        <div className="glass-card p-8 text-center text-muted-foreground">
          <p className="font-medium">Profile editor coming soon.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
