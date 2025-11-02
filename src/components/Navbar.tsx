import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            Anthem250
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              ABOUT
            </Link>
            <Link to="/tokenomics" className="text-sm font-medium hover:text-primary transition-colors">
              TOKENOMICS
            </Link>
            <Link to="/roadmap" className="text-sm font-medium hover:text-primary transition-colors">
              ROADMAP
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              BLOG
            </Link>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="secondary" className="font-semibold">
              JOIN WAITLIST NOW
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
