import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, DollarSign, Clock } from "lucide-react";

const payouts = [
  {
    id: "PAY-001",
    amount: "1,250 TND",
    status: "completed",
    method: "Bank Transfer",
    date: "2024-03-10",
    processedAt: "2024-03-12",
  },
  {
    id: "PAY-002",
    amount: "850 TND",
    status: "pending",
    method: "Bank Transfer",
    date: "2024-03-14",
    processedAt: null,
  },
  {
    id: "PAY-003",
    amount: "2,100 TND",
    status: "completed",
    method: "Bank Transfer",
    date: "2024-02-28",
    processedAt: "2024-03-01",
  },
];

const statusColors = {
  completed: "bg-green-500/10 text-green-500",
  pending: "bg-yellow-500/10 text-yellow-500",
  rejected: "bg-red-500/10 text-red-500",
};

export default function DashboardPayouts() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Payouts</h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Manage your earnings and withdrawal requests
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2 w-full sm:w-auto">
            <Wallet className="h-4 w-4" />
            Request Payout
          </Button>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm text-muted-foreground">Available Balance</span>
                <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">3,245 TND</p>
              <p className="text-xs text-muted-foreground">Ready to withdraw</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm text-muted-foreground">Pending</span>
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">850 TND</p>
              <p className="text-xs text-yellow-500">Processing</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs md:text-sm text-muted-foreground">Total Withdrawn</span>
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">8,450 TND</p>
              <p className="text-xs text-green-500">All time</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Method */}
        <Card className="border-border bg-gradient-card mb-6 md:mb-8">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-lg bg-secondary">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Wallet className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold mb-1 text-sm md:text-base">Bank Transfer</p>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">
                    BIAT - ****1234 • Mohamed Ali
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">Edit</Button>
            </div>
          </CardContent>
        </Card>

        {/* Payout History */}
        <Card className="border-border bg-gradient-card">
          <CardHeader>
            <CardTitle>Payout History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payouts.map((payout) => (
                <div
                  key={payout.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-lg bg-secondary"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <p className="font-semibold text-base md:text-lg">{payout.id}</p>
                      <Badge
                        variant="secondary"
                        className={statusColors[payout.status as keyof typeof statusColors]}
                      >
                        {payout.status}
                      </Badge>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">
                      {payout.method}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Requested: {payout.date}
                      {payout.processedAt && ` • Processed: ${payout.processedAt}`}
                    </p>
                  </div>
                  <div className="text-right sm:text-left">
                    <p className="font-bold text-xl md:text-2xl text-primary">{payout.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
