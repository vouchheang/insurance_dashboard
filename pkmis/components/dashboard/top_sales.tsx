import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function TopSaleList() {
  const items = [
    {
      id: 1,
      name: "Company 1",
      premiumAmount: "$6,000",
    },
    {
      id: 2,
      name: "Company 2",
      premiumAmount: "$3,400",
    },
    {
      id: 3,
      name: "Company 3",
      premiumAmount: "$2,000",
    },
    {
      id: 4,
      name: "Company 4",
      premiumAmount: "$200",
    },
    {
      id: 5,
      name: "Company 5",
      premiumAmount: "$100",
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.name}</p>
              </div>
              <div className="ml-auto font-medium">{item.premiumAmount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
