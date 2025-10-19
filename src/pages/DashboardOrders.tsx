import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Download, Eye } from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    product: "Premium Design System",
    customer: "Ahmed Ben Ali",
    email: "ahmed@example.com",
    amount: "120 TND",
    status: "completed",
    type: "download",
    date: "2024-03-15",
    time: "14:32",
  },
  {
    id: "ORD-002",
    product: "Discord Community Access",
    customer: "Yasmine Trabelsi",
    email: "yasmine@example.com",
    amount: "25 TND",
    status: "pending",
    type: "subscription",
    date: "2024-03-15",
    time: "10:15",
  },
  {
    id: "ORD-003",
    product: "Premium Design System",
    customer: "Mohamed Jebali",
    email: "mohamed@example.com",
    amount: "120 TND",
    status: "completed",
    type: "download",
    date: "2024-03-14",
    time: "18:45",
  },
  {
    id: "ORD-004",
    product: "Advanced Figma Course",
    customer: "Sarah Bouazizi",
    email: "sarah@example.com",
    amount: "199 TND",
    status: "refunded",
    type: "download",
    date: "2024-03-14",
    time: "09:20",
  },
  {
    id: "ORD-005",
    product: "Discord Community Access",
    customer: "Karim Mansour",
    email: "karim@example.com",
    amount: "25 TND",
    status: "completed",
    type: "subscription",
    date: "2024-03-13",
    time: "16:55",
  },
];

const statusColors = {
  completed: "bg-green-500/10 text-green-500",
  pending: "bg-yellow-500/10 text-yellow-500",
  refunded: "bg-red-500/10 text-red-500",
};

export default function DashboardOrders() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Orders</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Manage and track all your sales
            </p>
          </div>
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-4 md:mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders by ID, customer, or product..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Orders Table */}
        <Card className="border-border bg-gradient-card">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col gap-3 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <p className="font-semibold text-base md:text-lg">{order.id}</p>
                        <Badge
                          variant="secondary"
                          className={statusColors[order.status as keyof typeof statusColors]}
                        >
                          {order.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {order.type}
                        </Badge>
                      </div>
                      <p className="font-medium mb-1 text-sm md:text-base">{order.product}</p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">
                        {order.customer}
                      </p>
                      <p className="text-xs text-muted-foreground truncate md:hidden">
                        {order.email}
                      </p>
                    </div>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <p className="font-bold text-lg md:text-xl text-primary">
                      {order.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {order.date} at {order.time}
                    </p>
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
