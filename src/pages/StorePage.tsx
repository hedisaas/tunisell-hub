import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import { Star, ShoppingCart, Twitter, Globe, MessageCircle } from "lucide-react";

// Mock store data
const storeData = {
  designmaster: {
    name: "Design Master",
    username: "designmaster",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=designmaster",
    banner: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=300&fit=crop",
    bio: "Premium design resources and templates for modern designers. 500+ happy customers worldwide.",
    category: "Design Resources",
    rating: 4.9,
    reviews: 234,
    sales: 542,
    socials: {
      twitter: "designmaster",
      website: "designmaster.com",
      discord: "DesignMaster#1234",
    },
    products: [
      {
        id: 1,
        title: "Premium Design System",
        price: 120,
        type: "download",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&h=300&fit=crop",
      },
      {
        id: 2,
        title: "Discord Community Access",
        price: 25,
        type: "subscription",
        image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500&h=300&fit=crop",
      },
    ],
  },
};

export default function StorePage() {
  const { username } = useParams();
  const store = storeData[username as keyof typeof storeData] || storeData.designmaster;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Store Header */}
      <div className="relative">
        {/* Banner */}
        <div className="h-48 md:h-64 w-full overflow-hidden">
          <img
            src={store.banner}
            alt="Store banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Profile Info */}
        <div className="container mx-auto px-4">
          <div className="relative -mt-16 md:-mt-20">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              {/* Avatar */}
              <img
                src={store.avatar}
                alt={store.name}
                className="h-32 w-32 rounded-2xl ring-4 ring-background shadow-card"
              />

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-1">{store.name}</h1>
                    <p className="text-muted-foreground">@{store.username}</p>
                    <Badge className="mt-2">{store.category}</Badge>
                  </div>

                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Browse Products
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{store.rating}</span>
                    <span className="text-muted-foreground">({store.reviews} reviews)</span>
                  </div>
                  <div className="text-muted-foreground">{store.sales} sales</div>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4 mt-4">
                  {store.socials.twitter && (
                    <a
                      href={`https://twitter.com/${store.socials.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {store.socials.website && (
                    <a
                      href={`https://${store.socials.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                  {store.socials.discord && (
                    <div className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="products" className="space-y-8">
          <TabsList className="bg-card">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {store.products.map((product) => (
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
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors flex-1">
                        {product.title}
                      </h3>
                      <Badge variant={product.type === "subscription" ? "default" : "secondary"}>
                        {product.type}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-2xl font-bold text-primary">{product.price} TND</span>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <Card className="border-border bg-gradient-card">
              <CardContent className="p-6">
                <div className="text-center text-muted-foreground py-12">
                  <Star className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Reviews will appear here once customers purchase products.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-4">
            <Card className="border-border bg-gradient-card">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">About {store.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{store.bio}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
