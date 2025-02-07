import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalInsured } from "@/services/dashboard/get-total-insured";
import { getTotalSumInsured } from "@/services/dashboard/get-total-sum-insured";
import { getTotalPolicy } from "@/services/dashboard/get-total-policy";
import { getTotalPremium } from "@/services/dashboard/get-total-premium";
import { getTotalprospect } from "@/services/dashboard/get-prospect";
import { getTotalcompany } from "@/services/dashboard//get-accept-company";
import { getTotalpartner } from "@/services/dashboard/HF.partner";
import { getTotalnotpartner } from "@/services/dashboard/no-parner";

export async function OverviewDashboardCards() {
  const totalInsured = await getTotalInsured();
  console.log(totalInsured);

  const totalSumInsured = await getTotalSumInsured();
  console.log(totalSumInsured);

  const totalPolicy = await getTotalPolicy();
  const totalPrmium = await getTotalPremium();
  const totalProspect = await getTotalprospect();
  const acceptedCompany = await getTotalcompany();
  const totalPartner = await getTotalpartner();
  const totalNotPartner = await getTotalnotpartner();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-red-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Policy</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalPolicy.toString()}</div>
          <p className="text-xs text-muted-foreground">
            Premium Amount: ${Number(totalPrmium).toFixed(2)}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-orange-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Insured</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalInsured.toString()}</div>
          <p className="text-xs text-muted-foreground">
            Total Sum-Insure: ${Number(totalSumInsured).toFixed(2)}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-blue-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Prospect</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Number(totalProspect)}</div>
          <p className="text-xs text-muted-foreground">
            Number of company: {Number(acceptedCompany)}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-green-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total HF Partner
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
            <path d="M16.5 9.4 7.55 4.24" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Number(totalPartner)}</div>
          <p className="text-xs text-muted-foreground">
            Not Partner: {Number(totalNotPartner)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
