import Card2 from "components/Card2/Card2";
import Dropdown from "components/Dropdown/Dropdown";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import Pagination from "components/Pagination/Pagination";
import { CARD_DATA, CARD2_DATA } from "containers/HomePage/HomePage";
import React from "react";

const SectionProductsPageShop = () => {
  const _renderUserDropdown = () => {
    return (
      <div className="py-1 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-100 capitalize">
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="las la-random mr-2"></i>
          random
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="mr-2 las la-sort-alpha-up"></i>
          alpha up
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="mr-2 las la-sort-alpha-down"></i>
          alpha down
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="mr-2 las la-sort-amount-up"></i>
          amount up
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="mr-2 las la-sort-amount-down"></i>
          amount down
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="mr-2 las la-sort-numeric-up"></i>
          numeric up
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="mr-2 las la-sort-numeric-down"></i>
          numeric down
        </a>
      </div>
    );
  };
  return (
    <div className="ttnc-SectionProductsPageShop">
      <header className="flex justify-between items-center mb-12 text-gray-500 dark:text-gray-300 text-sm font-LibreFranklin">
        <span>
          Showing
          <span className="font-medium text-gray-700 dark:text-gray-100 mx-1">
            1-12
          </span>
          of
          <span className="font-medium text-gray-700 dark:text-gray-100 mx-1">
            158
          </span>
          products
        </span>
        <div className="flex space-x-2">
          <span>Show</span>
          <a
            className="hover:underline text-gray-700 dark:text-gray-100"
            href="#root"
          >
            12
          </a>
          <a
            className="hover:underline text-gray-700 dark:text-gray-100"
            href="#root"
          >
            24
          </a>
          <a
            className="underline text-gray-700 dark:text-gray-100"
            href="#root"
          >
            All
          </a>
        </div>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <span>
                Default Sorting
                <i className="ml-1 las la-angle-down"></i>
              </span>
            </DropdownTrigger>
            <DropdownPanel popperPlacement="bottom-end">
              {_renderUserDropdown()}
            </DropdownPanel>
          </Dropdown>
        </div>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 mb-16">
        {[...CARD_DATA, ...CARD2_DATA].map((card) => {
          return <Card2 key={card.id} {...card} />;
        })}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default SectionProductsPageShop;
