import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import StorePage from "./pages/StorePage";
import Dashboard from "./pages/Dashboard";
import DashboardProducts from "./pages/DashboardProducts";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardCustomers from "./pages/DashboardCustomers";
import DashboardPayouts from "./pages/DashboardPayouts";
import DashboardSettings from "./pages/DashboardSettings";
import CreateStore from "./pages/CreateStore";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminVendors from "./pages/AdminVendors";
import AdminShops from "./pages/AdminShops";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminPayouts from "./pages/AdminPayouts";
import AdminSettings from "./pages/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/@:username" element={<StorePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<DashboardProducts />} />
          <Route path="/dashboard/orders" element={<DashboardOrders />} />
          <Route path="/dashboard/customers" element={<DashboardCustomers />} />
          <Route path="/dashboard/payouts" element={<DashboardPayouts />} />
          <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/dashboard/create-store" element={<CreateStore />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/vendors" element={<AdminVendors />} />
          <Route path="/admin/shops" element={<AdminShops />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/payouts" element={<AdminPayouts />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
