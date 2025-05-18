import React, { useState } from "react";
import { Menu, X } from "feather-icons-react/build/IconComponents";
const Navbar = () => {
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [activeLink, setActiveLink]= useState("Home")
  const menuItems = ["Home", "Projects", "Experience", "About", "Contact"];
  return (
    <>
      <nav
        id="navbar"
        className="nav-div"
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <span className="text-2xl text-accentCyan font-pacifico ">Rutvik</span>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {
                  menuItems.map((menu,index) => (
                    <a
                    key={index}
                      href={`#${menu}`}
                      onClick={()=>setActiveLink(menu)}
                      className={`nav-link  hover:text-accentCyan px-1 py-2 text-sm font-medium ${menu===activeLink ? "active text-accentCyan" :"text-gray-500"}`}
                    >
                      
                    {menu}
                    </a>

                  ))
                }
      
              </div>
            </div>
            {/* CTA and Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  id="mobile-menu-button"
                  onClick={() => setMenuSidebar(prev => !prev)}
                  className="text-gray-400 hover:text-accentCyan focus:outline-none"
                >
                  {
                    menuSidebar ? <X /> :
                      <Menu />
                  }
                </button>
              </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {
          menuSidebar &&
          <div
            id="mobile-menu"
            className=" md:hidden  border-t border-blue-50"
          >
            <div className="px-2 pt-2 pb-3 flex flex-col space-y-1 sm:px-3">
                  {
                  menuItems.map(menu => (
                    <a
                      href={`#${menu}`}
                      onClick={()=>setActiveLink(menu)}
                      className={`nav-link text-gray-400 w-fit hover:text-accentCyan px-1 py-2 text-sm font-medium ${menu===activeLink ? "active" :""}`}
                    >
                    {menu}
                    </a>

                  ))
                }
            </div>
          </div>
        }
      </nav>

    </>
  );
};

export default Navbar;
