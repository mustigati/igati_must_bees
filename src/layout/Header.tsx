import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import igatiLogo from "../assets/images/projects/partners/IGATI LOGO-01 1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2d4a2b] shadow-lg border-b border-[#1f3a1d] transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={igatiLogo} 
              alt="Igati Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <div className="hidden lg:block">
              <h3 className="text-lg font-bold text-white">
                IGATI/MUST
              </h3>
              <p className="text-sm text-amber-300 font-medium">
                One Million Bee Initiative
              </p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  `text-white font-medium hover:text-amber-300 transition-all duration-300 ${
                    isActive
                      ? "text-amber-300 border-b-2 border-amber-300 pb-1"
                      : ""
                  }`
                }
                key={link.to}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-[#1f3a1d] bg-[#243c22] hover:bg-[#1f3a1d] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 text-white" />
            ) : (
              <Menu className="h-4 w-4 text-white" />
            )}
          </Button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-[#2d4a2b] border-t border-[#1f3a1d] shadow-lg py-4 z-50">
              <nav className="flex flex-col items-center gap-4">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-white hover:text-amber-300 transition-all duration-300 ${
                        isActive ? "text-amber-300 font-semibold" : ""
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;