import { Button } from "@ministorex/ui/button";

export default function CustomerPortal() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4 p-8">
        <h1 className="text-3xl font-bold">MiniStoreX Customer Portal</h1>
        <p className="text-muted-foreground">
          View your credit balances across all stores
        </p>
        <div className="flex justify-center gap-4">
          <Button>Customer Login</Button>
          <Button variant="outline">Create Account</Button>
        </div>
      </div>
    </div>
  );
}
