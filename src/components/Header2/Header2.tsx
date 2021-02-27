import MiniCartDropdown from "components/Header/MiniCartDropdown";
import UserDropdown from "components/Header/UserDropdown";
import Logo from "components/Logo/Logo";
import logo2 from "images/logo2.png";
import logo2Light from "images/logo2Light.png";
import MenuBar from "components/MenuBar/MenuBar";
import React from "react";
import Navigation2 from "components/Navigation/Navigation2";
import SearchDropdown from "./SearchDropdown";

export default function Header2() {
  return (
    <div className="ttnc-Header bg-white dark:bg-gray-800 py-5 2xl:py-7 px-4 md:px-10 2xl:px-16">
      <div className="relative flex justify-between items-center space-x-4 lg:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 xl:space-x-16 2xl:space-x-20">
          <Logo img={logo2} imgLight={logo2Light} />
          <Navigation2 />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-gray-900 dark:text-white text-2xl">
          <SearchDropdown />
          <UserDropdown />
          <MiniCartDropdown />
          <MenuBar
            containerClassName="py-1 px-2.5"
            itemClass="border-gray-800 dark:border-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
