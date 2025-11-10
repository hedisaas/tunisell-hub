import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";

const vendors = [
  { id: 1, name: "Tech Store Tunisia", email: "contact@techstore.tn", shops: 2, status: "active", revenue: "TND 15,234" },
  { id: 2, name: "Fashion Hub", email: "info@fashionhub.tn", shops: 1, status: "active", revenue: "TND 8,456" },
  { id: 3, name: "Home & Kitchen", email: "sales@homekitchen.tn", shops: 3, status: "pending", revenue: "TND 0" },
  { id: 4, name: "Electronics Pro", email: "admin@electronics.tn", shops: 1, status: "active", revenue: "TND 22,890" },
  { id: 5, name: "Books Corner", email: "info@bookscorner.tn", shops: 1, status: "suspended", revenue: "TND 3,210" },
];

export default function AdminVendors() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Vendors</h1>
            <p className="text-muted-foreground">Manage all platform vendors</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search vendors..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Vendors Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Vendor</th>
                    <th className="text-left py-3 px-4 font-medium">Email</th>
                    <th className="text-left py-3 px-4 font-medium">Shops</th>
                    <th className="text-left py-3 px-4 font-medium">Revenue</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr key={vendor.id} className="border-b last:border-0">
                      <td className="py-3 px-4 font-medium">{vendor.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{vendor.email}</td>
                      <td className="py-3 px-4">{vendor.shops}</td>
                      <td className="py-3 px-4 font-medium">{vendor.revenue}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            vendor.status === "active"
                              ? "default"
                              : vendor.status === "pending"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {vendor.status}
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
