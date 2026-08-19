import { Button } from "@/components/ui/button";
import { SHOPIFY_APP_URL, openExternalUrl } from "@/lib/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";

interface HeaderProps {
  showAnnouncement?: boolean;
}

const Header = ({ showAnnouncement = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Documentation", href: "/documentation" },
    { label: "Blog", href: "/blog" },
    { label: "Affiliate", href: "/affiliate" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/30 z-50">
      {showAnnouncement && <AnnouncementBar />}
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2.5">
            <img
              src="/lovable-uploads/b52f750b-46cc-4ce0-837a-2569d777018d.png"
              alt="BlumacawTech Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg"
            />
            <span className="text-lg sm:text-xl font-inter font-bold text-foreground tracking-tight">
              Blumacaw<span className="text-primary">Tech</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                  pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <Button size="sm" className="gradient-primary text-sm px-5 shadow-glow hover:shadow-lg transition-all duration-300" type="button" onClick={() => openExternalUrl(SHOPIFY_APP_URL)}>
                Install Free
              </Button>
            </div>
          </nav>

          <button
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-smooth min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-border/30">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 px-4">
                <Button size="sm" className="gradient-primary w-full shadow-glow min-h-[44px]" type="button" onClick={() => { setIsMenuOpen(false); openExternalUrl(SHOPIFY_APP_URL); }}>
                  Install Free on Shopify
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
