import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Store } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 hover:opacity-80 transition-opacity">
          <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Store className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-2xl">Tunisell</span>
        </Link>

        <Card className="border-border bg-gradient-card shadow-glow">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" asChild>
                  <Link to="/dashboard">Sign In</Link>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </p>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Store Name</Label>
                  <Input id="signup-name" placeholder="My Awesome Store" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-username">Username</Label>
                  <Input id="signup-username" placeholder="mystore" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity" asChild>
                  <Link to="/dashboard">Create Account</Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By signing up, you agree to our Terms and Privacy Policy
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link to="/" className="text-primary hover:underline">
            ← Back to homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
