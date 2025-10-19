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
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Products</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Manage your digital products and subscriptions
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id} className="border-border bg-gradient-card">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 sm:h-20 w-full sm:w-32 object-cover rounded-lg shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base md:text-lg mb-2 truncate">{product.title}</h3>
                        <div className="flex flex-wrap items-center gap-2">
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
                      <span className="text-xl md:text-2xl font-bold text-primary shrink-0">{product.price} TND</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 sm:mb-0">{product.sales} sales</p>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col items-center gap-2 justify-end sm:justify-start">
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-destructive hover:text-destructive h-9 w-9">
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
