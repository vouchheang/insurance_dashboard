import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function RecentSales() {
  const recentSales = [
    {
      id: 1,
      firstName: "Sopheak",
      lastName: "Men",
      email: "sopheak.men@pse.ngo",
      amount: 1000,
    },
  ];

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentSales.map((item) => (
            <div key={item.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>
                  {item.firstName[0]}
                  {item.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {item.firstName} {item.lastName}
                </p>
                <p className="text-sm text-muted-foreground">{item.email}</p>
              </div>
              <div className="ml-auto font-medium">
                +${item.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
