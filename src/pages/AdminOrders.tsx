import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";

const orders = [
  { id: "#ORD-001", customer: "Ahmed Ben Ali", shop: "Tech Gadgets Store", amount: "TND 89.99", status: "completed", date: "2024-03-15" },
  { id: "#ORD-002", customer: "Fatima Mansour", shop: "Fashion Boutique", amount: "TND 145.00", status: "processing", date: "2024-03-15" },
  { id: "#ORD-003", customer: "Mohamed Triki", shop: "Electronics Hub", amount: "TND 399.99", status: "shipped", date: "2024-03-14" },
  { id: "#ORD-004", customer: "Leila Abidi", shop: "Book Store", amount: "TND 75.00", status: "completed", date: "2024-03-14" },
  { id: "#ORD-005", customer: "Karim Saidi", shop: "Home Decor", amount: "TND 220.00", status: "cancelled", date: "2024-03-13" },
];

export default function AdminOrders() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Orders</h1>
            <p className="text-muted-foreground">Monitor all platform orders</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search orders..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Order ID</th>
                    <th className="text-left py-3 px-4 font-medium">Customer</th>
                    <th className="text-left py-3 px-4 font-medium">Shop</th>
                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b last:border-0">
                      <td className="py-3 px-4 font-medium">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4 text-muted-foreground">{order.shop}</td>
                      <td className="py-3 px-4 font-medium">{order.amount}</td>
                      <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            order.status === "completed"
                              ? "default"
                              : order.status === "cancelled"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {order.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
