import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Store,
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Wallet,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: Package, label: "Products", path: "/dashboard/products" },
  { icon: ShoppingBag, label: "Orders", path: "/dashboard/orders" },
  { icon: Users, label: "Customers", path: "/dashboard/customers" },
  { icon: Wallet, label: "Payouts", path: "/dashboard/payouts" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Store className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Tunisell</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    isActive ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-3 p-3 rounded-lg bg-secondary">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=vendor"
              alt="User"
              className="h-10 w-10 rounded-full ring-2 ring-primary/20"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">My Store</p>
              <p className="text-xs text-muted-foreground truncate">@mystore</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};
