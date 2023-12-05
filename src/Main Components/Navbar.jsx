import React, { useState } from "react";
import { Menu , X } from "feather-icons-react/build/IconComponents"; 
const Navbar = () => {
  const [menuSidebar, setMenuSidebar] = useState(false);
  const menuItems = ["Home", "Projects", "Experience", "About","Contact"];
  return (
    <>
      <nav className="flex fixed max-md:relative w-screen z-50 justify-between h-16 p-4 bg-black text-white ">
        <h1 className="text-2xl text-sky-500 font-pacifico ">Rutvik</h1>
        <ul className="flex space-x-20 flex-row font-semibold  max-sm:hidden max-md:hidden">
          {menuItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={()=>window.location.replace(window.location.href + `#${item}`)}
                className=" text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-500 cursor-pointer hover:scale-105 duration-100"
              >
                <a href={`#${item}`} >{item}</a>
              
                
              </li>
            );
          })}
        </ul>
        <button className=" max-md:block hidden bg-black hover:border-none hover:outline-none" onClick={()=>setMenuSidebar(!menuSidebar)}>
          {
            !menuSidebar ? <Menu/>:<X/> //add icons Here
          }
        </button>
      </nav>

      {menuSidebar && (
        <div className="max-md:block z-50 hidden ">
          <ul className=" transition-opacity text-lg h-screen flex flex-col justify-evenly py-3  space-y-3 bg-gradient-to-b from-black to-gray-900 text-center text-white">
            {menuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-white"
                >
                   <a href={`#${item}`} >{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
