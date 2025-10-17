import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Store, Bell, Shield, CreditCard } from "lucide-react";

export default function DashboardSettings() {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and store preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-secondary">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="store" className="gap-2">
              <Store className="h-4 w-4" />
              Store
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Billing
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="border-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=vendor"
                    alt="Avatar"
                    className="h-20 w-20 rounded-full ring-4 ring-primary/20"
                  />
                  <div>
                    <Button variant="outline" className="mb-2">
                      Change Avatar
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG or GIF. Max 2MB.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Mohamed Ali" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="mohamed@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+216 20 123 456" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Tunis, Tunisia" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    defaultValue="Digital creator and entrepreneur passionate about building amazing products."
                    rows={4}
                  />
                </div>

                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Store Tab */}
          <TabsContent value="store">
            <Card className="border-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Store Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input id="store-name" defaultValue="My Store" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">tunisell.com/@</span>
                    <Input id="username" defaultValue="mystore" className="flex-1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Store Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your store..."
                    defaultValue="Premium digital products and exclusive content for creators."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="banner">Store Banner</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop or click to upload
                    </p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Update Store
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="border-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">New Orders</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you receive a new order
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">New Subscribers</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new subscription sign-ups
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Payout Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Updates on your withdrawal requests
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Product Reviews</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when customers review your products
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Marketing Emails</p>
                    <p className="text-sm text-muted-foreground">
                      Receive tips, updates, and promotional content
                    </p>
                  </div>
                  <Switch />
                </div>

                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <Card className="border-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Change Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium mb-1">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                      <div>
                        <p className="font-medium mb-1">Current Session</p>
                        <p className="text-sm text-muted-foreground">
                          Chrome on Windows • Tunis, Tunisia
                        </p>
                      </div>
                      <Badge variant="default" className="bg-green-500/10 text-green-500">
                        Active
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing">
            <Card className="border-border bg-gradient-card">
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Payment Methods</h3>
                  <div className="p-4 rounded-lg bg-secondary">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Bank Transfer</p>
                          <p className="text-sm text-muted-foreground">
                            BIAT - ****1234 • Default method
                          </p>
                        </div>
                      </div>
                      <Button variant="outline">Edit</Button>
                    </div>
                  </div>
                  <Button variant="outline">Add Payment Method</Button>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold mb-4">Billing History</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                      <div>
                        <p className="font-medium mb-1">Platform Fee - March 2024</p>
                        <p className="text-sm text-muted-foreground">Paid on Mar 15, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">45 TND</p>
                        <Button variant="ghost" size="sm" className="text-xs">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
