import { Suspense } from "react";
import { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { QuotationDashboardCards } from "@/components/dashboard/quotation-dashboard-cards";
import { CardSkeleton } from "@/components/dashboard/card-skeleton";
// import { InventoryOverview } from "@/components/dashboard/inventory-overview";
// import { UserStats } from "@/components/dashboard/user-stats";
import PageWrapper from "@/components/page-wrapper";
import { OverviewDashboardCards } from "@/components/dashboard/overview-dashboard-cards";
import { TopSaleList } from "@/components/dashboard/top_sales";
import { GenderOverview } from "@/components/dashboard/gender_overview";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function DashboardPage() {
  const genderOverviews = [
    { name: "Male", value: 120, color: "#1ee854" },
    { name: "Female", value: 300, color: "#e88b33" },
  ];

  return (
    <PageWrapper>
      <DashboardShell>
        <Suspense fallback={<CardSkeleton />}>
          <DashboardHeader
            heading="Dashboard"
            text="Overview of insurance insight performance"
          />
          <OverviewDashboardCards />
        </Suspense>
        <Separator />
        <Suspense fallback={<CardSkeleton />}>
          <DashboardHeader
            heading="Quotation"
            text="Overview of quotation performance"
          />
          <QuotationDashboardCards />
        </Suspense>
        <Separator />
        <DashboardHeader heading="Analytic Data" text="Overview of analytic" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <Suspense fallback={<CardSkeleton />}>
            <GenderOverview data={genderOverviews} />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <TopSaleList />
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
