import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

const payouts = [
  { id: "#PAY-001", vendor: "Tech Store Tunisia", amount: "TND 3,456.78", period: "March 2024", status: "pending", date: "2024-03-15" },
  { id: "#PAY-002", vendor: "Fashion Hub", amount: "TND 2,145.90", period: "March 2024", status: "processing", date: "2024-03-15" },
  { id: "#PAY-003", vendor: "Electronics Pro", amount: "TND 5,678.45", period: "February 2024", status: "completed", date: "2024-02-28" },
  { id: "#PAY-004", vendor: "Book Store", amount: "TND 1,234.56", period: "February 2024", status: "completed", date: "2024-02-28" },
  { id: "#PAY-005", vendor: "Home & Kitchen", amount: "TND 890.23", period: "February 2024", status: "completed", date: "2024-02-28" },
];

export default function AdminPayouts() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Payouts</h1>
            <p className="text-muted-foreground">Manage vendor payouts</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Payouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">TND 12,450.00</div>
              <p className="text-xs text-muted-foreground">18 vendors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">TND 8,230.00</div>
              <p className="text-xs text-muted-foreground">12 vendors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Paid This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">TND 45,670.00</div>
              <p className="text-xs text-muted-foreground">67 transactions</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search payouts..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Payouts Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Payouts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Payout ID</th>
                    <th className="text-left py-3 px-4 font-medium">Vendor</th>
                    <th className="text-left py-3 px-4 font-medium">Amount</th>
                    <th className="text-left py-3 px-4 font-medium">Period</th>
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-right py-3 px-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payouts.map((payout) => (
                    <tr key={payout.id} className="border-b last:border-0">
                      <td className="py-3 px-4 font-medium">{payout.id}</td>
                      <td className="py-3 px-4">{payout.vendor}</td>
                      <td className="py-3 px-4 font-medium">{payout.amount}</td>
                      <td className="py-3 px-4 text-muted-foreground">{payout.period}</td>
                      <td className="py-3 px-4 text-muted-foreground">{payout.date}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            payout.status === "completed"
                              ? "default"
                              : payout.status === "pending"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {payout.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button size="sm">Process</Button>
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
