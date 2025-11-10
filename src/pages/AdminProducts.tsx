import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";

const products = [
  { id: 1, name: "Wireless Headphones", shop: "Tech Gadgets Store", price: "TND 89.99", stock: 45, status: "active" },
  { id: 2, name: "Summer Dress", shop: "Fashion Boutique", price: "TND 65.00", stock: 23, status: "active" },
  { id: 3, name: "Coffee Maker", shop: "Home Decor", price: "TND 120.00", stock: 12, status: "pending" },
  { id: 4, name: "Smart Watch", shop: "Electronics Hub", price: "TND 199.99", stock: 0, status: "out_of_stock" },
  { id: 5, name: "Novel Book", shop: "Book Store", price: "TND 25.00", stock: 156, status: "active" },
];

export default function AdminProducts() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Products</h1>
            <p className="text-muted-foreground">Manage all products on the platform</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Product</th>
                    <th className="text-left py-3 px-4 font-medium">Shop</th>
                    <th className="text-left py-3 px-4 font-medium">Price</th>
                    <th className="text-left py-3 px-4 font-medium">Stock</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b last:border-0">
                      <td className="py-3 px-4 font-medium">{product.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{product.shop}</td>
                      <td className="py-3 px-4 font-medium">{product.price}</td>
                      <td className="py-3 px-4">{product.stock}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            product.status === "active"
                              ? "default"
                              : product.status === "pending"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {product.status.replace("_", " ")}
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
