import { Suspense } from "react";
import { Metadata } from "next";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { TopProducts } from "@/components/dashboard/top-products";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { CardSkeleton } from "@/components/dashboard/card-skeleton";
// import { InventoryOverview } from "@/components/dashboard/inventory-overview";
// import { UserStats } from "@/components/dashboard/user-stats";
import PageWrapper from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function DashboardPage() {
  return (
    <PageWrapper>
      <DashboardShell>
        <DashboardHeader
          heading="Dashboard"
          text="Overview of your store's performance and inventory."
        />
        <Suspense fallback={<CardSkeleton />}>
          <DashboardCards />
        </Suspense>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Suspense fallback={<CardSkeleton />}>
            <RecentSales />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <TopProducts />
          </Suspense>
        </div>
        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Suspense fallback={<CardSkeleton />}>
            <UserStats data={[]} />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <InventoryOverview inventoryData={[]} />
          </Suspense>
        </div> */}
      </DashboardShell>
    </PageWrapper>
  );
}
