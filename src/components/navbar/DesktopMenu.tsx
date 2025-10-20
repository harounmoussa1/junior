import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Link } from "react-router";

interface SubMenu {
  name: string;
  icon?: IconType;
  desc?: string;
  subMenu?: SubMenu[];
  path?: string;
}

interface MenuItem {
  name: string;
  subMenu?: SubMenu[];
  gridCols?: number;
  path?: string;
}

interface DesktopMenuProps {
  menu: MenuItem;
}

export default function DesktopMenu({ menu }: DesktopMenuProps) {
  const [isHover, setIsHover] = useState(false);

  const subMenuAnimate = {
    hidden: { opacity: 0, y: -10, rotateX: -15, display: "none" },
    visible: {
      opacity: 1,
      y: 10,
      rotateX: 0,
      display: "block",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      rotateX: -15,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.li
      className="relative group/link"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        to={menu.path || "#"}
        className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-xl"
        onClick={(e) => {
          if (!menu.path) {
            e.preventDefault(); // Prevent navigation when path is missing
          }
        }}
      >
        <span className="text-black text-lg font-inter font-semibold ">
          {menu.name}
        </span>
        {menu.subMenu?.length && (
          <ChevronDown className="mt-[0.6px] transition-transform duration-200 group-hover/link:rotate-180 text-black" />
        )}
      </Link>

      {menu.subMenu?.length && (
        <motion.div
          className="grid auto-cols-max grid-flow-col absolute  mt-3 bg-gray-300 shadow-md rounded-md p-3 min-w-max w-full"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          exit="exit"
          variants={subMenuAnimate}
        >
          <div className={`grid grid-cols-1 gap-x-4 gap-y-4 items-start`}>
            {menu.subMenu.map((submenu, i) => (
              <div key={i} className="relative cursor-pointer">
                <div
                  key={submenu.name}
                  className="group relative transition-all duration-300"
                >
                  <Link
                    to={submenu.path || "#"}
                    className="font-semibold text-nowrap block rounded-md 
             text-gray-700 transition-all duration-300
             hover:text-[#004F87] hover:bg-[#E6F0FA] hover:shadow-md hover:translate-x-[3px]"
                    onClick={(e) => {
                      if (!submenu.path) e.preventDefault();
                    }}
                  >
                    {submenu.name}
                  </Link>
                </div>

                {submenu.subMenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {submenu.subMenu.map((subItem, j) => (
                      <Link
                        key={j}
                        to={subItem.path || "#"}
                        className="text-md text-gray-500 block  rounded-md 
             transition-all duration-300
             hover:text-[#004F87] hover:bg-[#E6F0FA] hover:translate-x-[3px]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
