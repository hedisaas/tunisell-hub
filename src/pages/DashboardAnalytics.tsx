import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

export default function DashboardAnalytics() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Track your store performance and growth metrics
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm text-muted-foreground">Total Revenue</span>
                <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">8,450 TND</p>
              <p className="text-xs text-green-500">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm text-muted-foreground">Total Orders</span>
                <ShoppingBag className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">342</p>
              <p className="text-xs text-green-500">+8.2% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm text-muted-foreground">Customers</span>
                <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">128</p>
              <p className="text-xs text-green-500">+5.4% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm text-muted-foreground">Avg Order Value</span>
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">24.7 TND</p>
              <p className="text-xs text-green-500">+3.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="border-border bg-gradient-card">
            <CardHeader>
              <CardTitle>Revenue Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 md:h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <TrendingUp className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 opacity-50" />
                  <p className="text-sm md:text-base">Revenue chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 md:space-y-4">
                {[
                  { name: "Premium Design System", sales: 342, revenue: "41,040 TND" },
                  { name: "Discord Community Access", sales: 567, revenue: "14,175 TND" },
                  { name: "Advanced Figma Course", sales: 89, revenue: "17,711 TND" },
                ].map((product, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 md:p-4 rounded-lg bg-secondary">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium mb-1 text-sm md:text-base truncate">{product.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{product.sales} sales</p>
                    </div>
                    <span className="font-semibold text-primary text-sm md:text-base">{product.revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
