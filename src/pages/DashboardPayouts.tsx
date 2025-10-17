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
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Payouts</h1>
            <p className="text-muted-foreground">
              Manage your earnings and withdrawal requests
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2">
            <Wallet className="h-4 w-4" />
            Request Payout
          </Button>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-border bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Available Balance</span>
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">3,245 TND</p>
              <p className="text-xs text-muted-foreground">Ready to withdraw</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Pending</span>
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">850 TND</p>
              <p className="text-xs text-yellow-500">Processing</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Withdrawn</span>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">8,450 TND</p>
              <p className="text-xs text-green-500">All time</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Method */}
        <Card className="border-border bg-gradient-card mb-8">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Bank Transfer</p>
                  <p className="text-sm text-muted-foreground">
                    BIAT - ****1234 • Mohamed Ali
                  </p>
                </div>
              </div>
              <Button variant="outline">Edit</Button>
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
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-semibold text-lg">{payout.id}</p>
                      <Badge
                        variant="secondary"
                        className={statusColors[payout.status as keyof typeof statusColors]}
                      >
                        {payout.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {payout.method}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Requested: {payout.date}
                      {payout.processedAt && ` • Processed: ${payout.processedAt}`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-primary">{payout.amount}</p>
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
