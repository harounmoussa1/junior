import sdaire_logo_rm from "/public/SDair.png"
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Menus } from "../../constants/Menus";
import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`h-20 text-[15px] fixed top-0 left-0 w-full flex items-center transition-all duration-300 z-50 ${isScrolled ? "bg-white shadow-md" : "bg-white/40"
      }`}>
      <nav className="px-6 flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-x-3">
          <img src={sdaire_logo_rm} alt="Logo" className="size-19" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-black">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name} />
          ))}

          {/* Social Icons */}
          <li className="flex items-center gap-3 ml-2">
            <a
              href="https://www.facebook.com/sdairtn/?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#1877F2] hover:scale-110 transition-all duration-300"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/sdair-tunisie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#0077B5] hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </li>
        </ul>


        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MobMenu Menus={Menus} />
        </div>

      </nav>
    </header>
  );
};

export default NavBar;