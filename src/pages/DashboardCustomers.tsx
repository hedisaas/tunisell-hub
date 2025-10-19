import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Mail, MoreVertical } from "lucide-react";

const customers = [
  {
    id: 1,
    name: "Ahmed Ben Ali",
    email: "ahmed@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed",
    orders: 5,
    totalSpent: "600 TND",
    status: "active",
    lastPurchase: "2 hours ago",
  },
  {
    id: 2,
    name: "Yasmine Trabelsi",
    email: "yasmine@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yasmine",
    orders: 3,
    totalSpent: "370 TND",
    status: "active",
    lastPurchase: "5 hours ago",
  },
  {
    id: 3,
    name: "Mohamed Jebali",
    email: "mohamed@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohamed",
    orders: 1,
    totalSpent: "120 TND",
    status: "inactive",
    lastPurchase: "1 day ago",
  },
  {
    id: 4,
    name: "Sarah Bouazizi",
    email: "sarah@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    orders: 8,
    totalSpent: "1,240 TND",
    status: "active",
    lastPurchase: "3 days ago",
  },
  {
    id: 5,
    name: "Karim Mansour",
    email: "karim@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=karim",
    orders: 12,
    totalSpent: "2,100 TND",
    status: "active",
    lastPurchase: "1 week ago",
  },
];

export default function DashboardCustomers() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Customers</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            View and manage your customer relationships
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Total Customers</p>
              <p className="text-2xl md:text-3xl font-bold">128</p>
              <p className="text-xs text-green-500 mt-1">+12 this month</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Active Subscribers</p>
              <p className="text-2xl md:text-3xl font-bold">87</p>
              <p className="text-xs text-green-500 mt-1">+5 this week</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Avg. Order Value</p>
              <p className="text-2xl md:text-3xl font-bold">24.7 TND</p>
              <p className="text-xs text-green-500 mt-1">+3.1% increase</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-4 md:mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers by name or email..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Customers List */}
        <Card className="border-border bg-gradient-card">
          <CardHeader>
            <CardTitle>All Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className="flex flex-col gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="h-12 w-12 rounded-full ring-2 ring-primary/20 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base md:text-lg mb-1">{customer.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{customer.email}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Orders</p>
                      <p className="font-semibold text-sm md:text-base">{customer.orders}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">Total Spent</p>
                      <p className="font-semibold text-primary text-sm md:text-base">{customer.totalSpent}</p>
                    </div>

                    <div className="text-center">
                      <Badge
                        variant={customer.status === "active" ? "default" : "secondary"}
                        className={
                          customer.status === "active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-gray-500/10 text-gray-500"
                        }
                      >
                        {customer.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {customer.lastPurchase}
                      </p>
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
