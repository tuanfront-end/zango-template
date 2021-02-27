import Logo from "components/Logo/Logo";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemType, NAV_DATABASE } from "./Navigation";

const DATA: NavItemType[] = NAV_DATABASE;

function Navigation2() {
  const _renderMenuChild = (item: NavItemType, className = "top-full") => {
    return (
      <div className={`sub-menu absolute py-3 px-2 z-50 w-52 ${className}`}>
        <div className="bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 py-1">
          {item.children?.map((i, index) => (
            <div
              key={i.link + index}
              className="relative menu-item-has-children text-gray-900 dark:text-gray-100 uppercase text-xs font-medium"
            >
              <NavLink
                exact
                strict
                to={i.link}
                className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 tracking-wider"
                activeClassName="text-secondary"
              >
                {i.name}
                {i.children && (
                  <i className="ml-1 las la-angle-down transform scale-75"></i>
                )}
              </NavLink>
              {i.children && _renderMenuChild(i, "left-full -top-4")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <div
        key={String(index) + item.link}
        className="relative menu-item-has-children"
      >
        <NavLink
          exact
          strict
          className="inline-flex items-center p-2 xl:px-3 text-gray-900 dark:text-white uppercase font-medium text-xs xl:text-sm opacity-95 hover:opacity-100"
          to={item.link}
          activeClassName="font-semibold opacity-100"
        >
          {item.name}
          {item.children && (
            <i className="ml-1 text-xs las la-angle-down transform scale-75"></i>
          )}
        </NavLink>
        {item.children && _renderMenuChild(item)}
      </div>
    );
  };

  return (
    <nav className="hidden lg:flex flex-wrap items-center text-xs xl:text-sm uppercase">
      {DATA.map(_renderItem)}
    </nav>
  );
}

export default Navigation2;
