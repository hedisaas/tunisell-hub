import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "8,450 TND",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Total Sales",
    value: "342",
    change: "+8.2%",
    icon: ShoppingBag,
    trend: "up",
  },
  {
    title: "Active Customers",
    value: "128",
    change: "+5.4%",
    icon: Users,
    trend: "up",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-0.3%",
    icon: TrendingUp,
    trend: "down",
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    product: "Premium Design System",
    customer: "Ahmed Ben Ali",
    amount: "120 TND",
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: "ORD-002",
    product: "Discord Community Access",
    customer: "Yasmine Trabelsi",
    amount: "25 TND",
    status: "pending",
    date: "5 hours ago",
  },
  {
    id: "ORD-003",
    product: "Premium Design System",
    customer: "Mohamed Jebali",
    amount: "120 TND",
    status: "completed",
    date: "1 day ago",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p
                      className={`text-xs mt-1 ${
                        stat.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card className="border-border bg-gradient-card">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium mb-1">{order.product}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.customer} • {order.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary mb-1">{order.amount}</p>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          order.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {order.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{order.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
