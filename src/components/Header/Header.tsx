import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import MenuBar from "components/MenuBar/MenuBar";
import Navigation from "components/Navigation/Navigation";
import SearchInput from "components/SearchInput/SearchInput";
import React from "react";
import MiniCartContent from "./MiniCartContent";

export default function Header() {
  const _renderUserDropdown = () => {
    return (
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <i className="las la-user mr-2"></i>
          Your Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <i className="las la-cog mr-2"></i>
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <i className="las la-sign-out-alt mr-2"></i>
          Sign out
        </a>
      </div>
    );
  };

  return (
    <div className="ttnc-Header bg-accents-900 border-b border-accents-800 py-6 px-4 md:px-10 2xl:px-16">
      <div className="flex justify-between items-center space-x-4 lg:space-x-8">
        <div className="flex justify-start items-center flex-shrink-0 lg:w-0 lg:flex-1 space-x-7">
          <MenuBar />
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>
        <Navigation />
        <div className="lg:w-0 lg:flex-1 flex-shrink-0 flex items-center justify-end text-white xl:text-2xl text-xl">
          <Dropdown>
            <DropdownTrigger containerClassName="mr-4 2xl:mr-5">
              <i className="las la-user-circle"></i>
            </DropdownTrigger>
            <DropdownPanel popperPlacement="bottom-end">
              {_renderUserDropdown()}
            </DropdownPanel>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger containerClassName="">
              <span className="relative inline-flex rounded-md shadow-sm">
                <i className="las la-shopping-bag"></i>
                <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span
                    className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-secondary text-white text-xs font-medium"
                    style={{ fontSize: 9 }}
                  >
                    2
                  </span>
                </span>
              </span>
            </DropdownTrigger>
            <DropdownPanel popperPlacement="bottom-end">
              <MiniCartContent />
            </DropdownPanel>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
