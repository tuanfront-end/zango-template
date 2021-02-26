import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import MenuBar from "components/MenuBar/MenuBar";
import Navigation from "components/Navigation/Navigation";
import SearchInput from "components/SearchInput/SearchInput";
import React from "react";

export default function Header() {
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
        <div className="lg:w-0 lg:flex-1 flex-shrink-0 flex items-center font-light justify-end text-white xl:text-2xl text-xl">
          <Dropdown>
            <DropdownTrigger containerClassName="mr-4 2xl:mr-5">
              <i className="las la-user-circle"></i>
            </DropdownTrigger>
            <DropdownPanel popperPlacement="bottom-end">
              <h1>Hello</h1>
            </DropdownPanel>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger containerClassName="">
              <i className="las la-shopping-bag"></i>
            </DropdownTrigger>
            <DropdownPanel popperPlacement="bottom-end">
              <h1>Hello</h1>
            </DropdownPanel>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
