import { Button } from "@/components/ui/button";
import { Store, Search, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Store className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Tunisell</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
              Explore
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link to="/explore">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button className="hidden md:flex bg-gradient-primary hover:opacity-90 transition-opacity">
              Start Selling
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
