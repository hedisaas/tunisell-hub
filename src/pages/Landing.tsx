import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, TrendingUp, Users, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredStores = [
  {
    username: "designmaster",
    name: "Design Master",
    category: "Design Resources",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=designmaster",
    sales: "500+ sales",
    rating: 4.9,
  },
  {
    username: "devacademy",
    name: "Dev Academy",
    category: "Coding Courses",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=devacademy",
    sales: "1.2K+ sales",
    rating: 5.0,
  },
  {
    username: "aitools",
    name: "AI Tools Hub",
    category: "AI Resources",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aitools",
    sales: "850+ sales",
    rating: 4.8,
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Create your store in minutes. No coding required.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Monetik & Stripe integration for Tunisia and global.",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Track sales, revenue, and customer behavior.",
  },
  {
    icon: Users,
    title: "Discord & Telegram",
    description: "Automatic access delivery via bot integration.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Sell to customers worldwide with multi-currency.",
  },
  {
    icon: CheckCircle,
    title: "Zero Commission",
    description: "Keep 95% of your revenue. We only charge 5%.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🇹🇳 Made for Tunisia
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Sell Digital Access,
              <br />
              The Easy Way
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Create your online store and sell Discord memberships, courses, and digital downloads with local Tunisian payments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow" asChild>
              <Link to="/dashboard">
                Start Selling Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/explore">Explore Stores</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              No monthly fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              5% commission only
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              Instant payouts
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="container mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Stores</h2>
          <p className="text-muted-foreground">Join successful creators selling on Tunisell</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuredStores.map((store, index) => (
            <motion.div
              key={store.username}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/@${store.username}`}>
                <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-border bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={store.avatar}
                        alt={store.name}
                        className="h-16 w-16 rounded-full ring-2 ring-primary/20"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {store.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">@{store.username}</p>
                        <Badge variant="secondary" className="text-xs">
                          {store.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{store.sales}</span>
                      <span className="text-yellow-500">★ {store.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
          <p className="text-muted-foreground">Powerful features to grow your digital business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full border-border bg-gradient-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-primary border-0 shadow-glow">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Start Selling?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of Tunisian creators earning with digital products. Setup takes less than 5 minutes.
            </p>
            <Button size="lg" variant="secondary" className="shadow-lg" asChild>
              <Link to="/dashboard">
                Create Your Store Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
