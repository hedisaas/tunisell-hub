import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";

const shops = [
  { id: 1, name: "Tech Gadgets Store", vendor: "Tech Store Tunisia", products: 45, status: "active", created: "2024-01-15" },
  { id: 2, name: "Fashion Boutique", vendor: "Fashion Hub", products: 120, status: "active", created: "2024-02-01" },
  { id: 3, name: "Home Decor", vendor: "Home & Kitchen", products: 78, status: "pending", created: "2024-03-10" },
  { id: 4, name: "Electronics Hub", vendor: "Electronics Pro", products: 156, status: "active", created: "2024-01-20" },
  { id: 5, name: "Book Store", vendor: "Books Corner", products: 234, status: "active", created: "2024-02-15" },
];

export default function AdminShops() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shops</h1>
            <p className="text-muted-foreground">Manage all shops on the platform</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search shops..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Shops Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Shops</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Shop Name</th>
                    <th className="text-left py-3 px-4 font-medium">Vendor</th>
                    <th className="text-left py-3 px-4 font-medium">Products</th>
                    <th className="text-left py-3 px-4 font-medium">Created</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shops.map((shop) => (
                    <tr key={shop.id} className="border-b last:border-0">
                      <td className="py-3 px-4 font-medium">{shop.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{shop.vendor}</td>
                      <td className="py-3 px-4">{shop.products}</td>
                      <td className="py-3 px-4 text-muted-foreground">{shop.created}</td>
                      <td className="py-3 px-4">
                        <Badge variant={shop.status === "active" ? "default" : "secondary"}>
                          {shop.status}
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
