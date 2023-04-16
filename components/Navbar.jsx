import { useState } from "react";

import Image from "next/image";
import logo from "../public/logo.png";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// Utility Component to show the Nav Bar Items..
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  // For Phone, Toggle-Menu
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      {/* Logo */}
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="Logo" className="w-32 cursor-pointer" />
      </div>

      {/* Nav List */}
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>

      {/* For Phone */}
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-2 w-[60vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg hover:border-double hover:border-4 hover:border-indigo-600 hover:rounded-md hover:px-2 hover:py-1"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
