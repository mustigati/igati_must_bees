import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <header className="grid grid-cols-2 fixed top-0 left-0 right-0 z-50 item-center justify-between bg-rose-200 h-[10vh] ">
      <div className="flex justify-between item-center gap-5 p-5 md:p-0 bg-stone-500">
        <div>Igati Logo</div>

        <div className=" bg-amber-400 hidden md:block p-5">
          <h3 className="capitalize text-xl text-white ">
            Igati/Must one million bee hive Initiative
          </h3>
        </div>
      </div>
      <div className="bg-[#121907] flex items-center justify-center ">
        <nav className=" gap-8   hidden  md:flex md:items-center md:justify-center">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `text-white font-normal hover:text-amber-300 transition-all .3s ease-in-out ${
                  isActive
                    ? "underline underline-offset-4 font-medium decoration-amber-300"
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
          variant="default"
          size="icon"
          className="md:hidden bg-amber-500 cursor-pointer text-white ml-auto mr-5 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>

        {isMenuOpen && (
          <div className="bg-[#121907]/90 absolute top-14 right-0 left-0 md:hidden border-t border-border py-4 z-50 ">
            <nav className="flex flex-col items-center gap-4">
              {links.map((link) => (
                <a
                  href={link.to}
                  className="text-white hover:text-amber-300 transition-all .3s ease-in-out"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
