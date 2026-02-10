import { Link, Outlet, useLocation } from "react-router-dom";
import { Search, Heart, User, CreditCard, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Discover", icon: Search, href: "/discover" },
  { label: "Matches", icon: MessageCircle, href: "/matches" },
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Subscription", icon: CreditCard, href: "/subscription" },
];

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:block">
        <div className="container flex h-14 items-center justify-between">
          <Link to="/" className="font-bold text-xl text-primary">
            ZimMatch
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location.pathname === item.href ? "text-foreground font-bold" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Header (Minimal) */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur md:hidden px-4 h-14 flex items-center">
        <Link to="/" className="font-bold text-xl text-primary">
          ZimMatch
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full space-y-1",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
