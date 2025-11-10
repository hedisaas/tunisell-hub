import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Store, Package, ShoppingBag, TrendingUp, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Vendors",
    value: "142",
    change: "+12% from last month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Active Shops",
    value: "356",
    change: "+8% from last month",
    icon: Store,
    trend: "up",
  },
  {
    title: "Total Products",
    value: "8,234",
    change: "+23% from last month",
    icon: Package,
    trend: "up",
  },
  {
    title: "Orders Today",
    value: "89",
    change: "+5% from yesterday",
    icon: ShoppingBag,
    trend: "up",
  },
  {
    title: "Revenue (MTD)",
    value: "TND 45,231",
    change: "+15% from last month",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "Pending Payouts",
    value: "TND 12,450",
    change: "18 vendors",
    icon: DollarSign,
    trend: "neutral",
  },
];

export default function Admin() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of platform metrics and activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New vendor registered", vendor: "Tech Store Tunisia", time: "2 min ago" },
                { action: "Payout processed", vendor: "Fashion Hub", time: "15 min ago" },
                { action: "Product approved", vendor: "Home & Kitchen", time: "1 hour ago" },
                { action: "Shop verified", vendor: "Electronics Pro", time: "2 hours ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.vendor}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
