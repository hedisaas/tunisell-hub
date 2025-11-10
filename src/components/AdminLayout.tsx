import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Shield,
  LayoutDashboard,
  Store,
  ShoppingBag,
  Package,
  Wallet,
  Users,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/admin" },
  { icon: Users, label: "Vendors", path: "/admin/vendors" },
  { icon: Store, label: "Shops", path: "/admin/shops" },
  { icon: Package, label: "Products", path: "/admin/products" },
  { icon: ShoppingBag, label: "Orders", path: "/admin/orders" },
  { icon: Wallet, label: "Payouts", path: "/admin/payouts" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

function SidebarContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link to="/admin" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">Admin Panel</span>
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
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/20">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">Admin User</p>
            <p className="text-xs text-muted-foreground truncate">@admin</p>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/admin" className="flex items-center gap-2">
            <div className="h-7 w-7 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Admin</span>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 border-r border-border bg-card flex-col fixed inset-y-0 left-0">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 overflow-auto">
        {children}
      </main>
    </div>
  );
};
