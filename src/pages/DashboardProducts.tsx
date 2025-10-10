import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Premium Design System",
    type: "download",
    price: 120,
    status: "active",
    sales: 342,
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=200&h=120&fit=crop",
  },
  {
    id: 2,
    title: "Discord Community Access",
    type: "subscription",
    price: 25,
    status: "active",
    sales: 567,
    image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=200&h=120&fit=crop",
  },
  {
    id: 3,
    title: "Advanced Figma Course",
    type: "download",
    price: 199,
    status: "draft",
    sales: 0,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=120&fit=crop",
  },
];

export default function DashboardProducts() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Products</h1>
            <p className="text-muted-foreground">
              Manage your digital products and subscriptions
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id} className="border-border bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-20 w-32 object-cover rounded-lg"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant={product.type === "subscription" ? "default" : "secondary"}>
                            {product.type}
                          </Badge>
                          <Badge
                            variant={product.status === "active" ? "default" : "secondary"}
                            className={
                              product.status === "active"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-yellow-500/10 text-yellow-500"
                            }
                          >
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-primary">{product.price} TND</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <Card className="border-border bg-gradient-card">
            <CardContent className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start selling by creating your first digital product
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Create Your First Product
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
