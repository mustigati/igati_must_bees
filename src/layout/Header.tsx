import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
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
      <div className="container items-center mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity "
          >
            <img
              src={igatiLogo}
              alt="Igati Logo"
              className="size-30 object-contain"
            />
            <div className="hidden lg:block">
              <h3 className="text-lg font-bold text-white">IGATI/MUST</h3>
              <p className="text-sm text-amber-300 font-medium">
                One Million Bee Initiative
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
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

            {/* Desktop Auth Links */}
            <div className="flex items-center gap-3 ml-2 pl-6 border-l border-[#1f3a1d]">
              <Button
                variant={"outline"}
                className="hover:bg-amber-600 hover:text-white outline-none cursor-pointer transition-all duration-300 border-none"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline">Cart</span>
              </Button>
              <NavLink to="/signin">
                {({ isActive }) => (
                  <Button
                    variant="ghost"
                    className={`text-white hover:text-amber-300 hover:bg-[#243c22] cursor-pointer transition-all duration-300 ${
                      isActive ? "text-amber-300 bg-[#243c22]" : ""
                    }`}
                  >
                    Sign In
                  </Button>
                )}
              </NavLink>
              <NavLink to="/signup">
                {({ isActive }) => (
                  <Button
                    className={`bg-amber-500 hover:bg-amber-600 text-[#2d4a2b] font-semibold transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg ${
                      isActive ? "bg-amber-600" : ""
                    }`}
                  >
                    Sign Up
                  </Button>
                )}
              </NavLink>
            </div>
          </nav>

          {/* Mobile Menu Button */}
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-[#2d4a2b] border-t border-[#1f3a1d] shadow-lg py-4 z-50">
              <nav className="flex flex-col items-center gap-4">
                {/* Mobile Navigation Links */}
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

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col items-center gap-3 mt-4 pt-4 border-t border-[#1f3a1d] w-full px-8">
                  <Button
                    variant={"outline"}
                    className="hover:bg-amber-600 hover:text-white outline-none cursor-pointer transition-all duration-300 border-none"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="ml-2 hidden sm:inline">Cart</span>
                  </Button>
                  <NavLink
                    to="/signin"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {({ isActive }) => (
                      <Button
                        variant="outline"
                        className={`w-full border-amber-300 text-amber-300 hover:bg-[#243c22] transition-all duration-300 ${
                          isActive ? "bg-[#243c22]" : ""
                        }`}
                      >
                        Sign In
                      </Button>
                    )}
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {({ isActive }) => (
                      <Button
                        className={`w-full bg-amber-500 hover:bg-amber-600 text-[#2d4a2b] font-semibold transition-all duration-300 ${
                          isActive ? "bg-amber-600" : ""
                        }`}
                      >
                        Sign Up
                      </Button>
                    )}
                  </NavLink>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
