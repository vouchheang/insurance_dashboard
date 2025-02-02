import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function TopProducts() {
  const topProducts = [
    {
      id: 1,
      name: "Health Product",
      sku: "Gold Package",
      totalSold: 20000,
    },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {topProducts.map((product) => (
            <div key={product.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {product.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  SKU: {product.sku}
                </p>
              </div>
              <div className="ml-auto font-medium">
                {product.totalSold} sold
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
