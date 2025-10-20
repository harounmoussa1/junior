import sdaire_logo_rm from "../../assets/sdaire_logo_rm.png"
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Menus } from "../../constants/Menus";

const NavBar = () => {
  return (
    <header className="h-20 text-[15px] fixed top-0 left-0 w-full flex items-center bg-white/40 shadow-md z-50">
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