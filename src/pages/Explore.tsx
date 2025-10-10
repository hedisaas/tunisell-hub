import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const mockProducts = [
  {
    id: 1,
    title: "Premium Design System",
    vendor: "designmaster",
    vendorName: "Design Master",
    price: 120,
    type: "download",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&h=300&fit=crop",
    sales: 342,
  },
  {
    id: 2,
    title: "Full-Stack Web Development Course",
    vendor: "devacademy",
    vendorName: "Dev Academy",
    price: 250,
    type: "subscription",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop",
    sales: 1203,
  },
  {
    id: 3,
    title: "AI Prompts Library",
    vendor: "aitools",
    vendorName: "AI Tools Hub",
    price: 45,
    type: "download",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    sales: 856,
  },
  {
    id: 4,
    title: "Discord Community Access",
    vendor: "designmaster",
    vendorName: "Design Master",
    price: 25,
    type: "subscription",
    image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500&h=300&fit=crop",
    sales: 567,
  },
  {
    id: 5,
    title: "Marketing Templates Bundle",
    vendor: "devacademy",
    vendorName: "Dev Academy",
    price: 89,
    type: "download",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    sales: 423,
  },
  {
    id: 6,
    title: "3D Assets Pack",
    vendor: "aitools",
    vendorName: "AI Tools Hub",
    price: 199,
    type: "download",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    sales: 234,
  },
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Products</h1>
          <p className="text-muted-foreground text-lg">
            Discover digital products from talented creators
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for products, creators, or categories..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Trending
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-border bg-gradient-card overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <Link
                      to={`/@${product.vendor}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      @{product.vendor}
                    </Link>
                  </div>
                  <Badge
                    variant={product.type === "subscription" ? "default" : "secondary"}
                    className="ml-2"
                  >
                    {product.type}
                  </Badge>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{product.price} TND</span>
                  <span className="text-sm text-muted-foreground">{product.sales} sales</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
