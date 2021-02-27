import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import SearchInput from "components/SearchInput/SearchInput";
import React from "react";

const SearchDropdown = () => {
  const _renderSearchDropdown = () => {
    return (
      <div className="py-1 text-sm text-gray-800 dark:text-gray-100">
        <SearchInput
          inputClass="bg-white dark:bg-gray-900 placeholder-gray-400 border-gray-200 dark:border-gray-700 shadow-lg"
          containerClassName="w-full"
        />
      </div>
    );
  };

  return (
    <Dropdown>
      <DropdownTrigger
        // containerClassName="mr-4 2xl:mr-5 "

        containerClassName="py-1 px-2.5 text-opacity-95 hover:text-opacity-100"
      >
        <i className="las la-search"></i>
      </DropdownTrigger>
      <DropdownPanel
        containerClassName="bg-transparent w-64"
        popperPlacement="bottom-end"
      >
        {_renderSearchDropdown()}
      </DropdownPanel>
    </Dropdown>
  );
};

export default SearchDropdown;
