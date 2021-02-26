import Logo from "components/Logo/Logo";
import React from "react";
import { NavLink } from "react-router-dom";

export interface NavItemType {
  id: number;
  name: string;
  // link: keyof LocationStates | "#";
  link: string;
  children?: NavItemType[];
  isActive?: boolean;
}
export const NAV_DATABASE: NavItemType[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
    // isActive: true,
    children: [
      { id: 3, name: "Home 1", link: "/" },
      { id: 2, name: "Home 2", link: "/home2" },
    ],
  },

  {
    id: 11,
    name: "About",
    link: "/our-story",
  },
  {
    id: 16,
    name: "Shop",
    link: "/volunteer",
    children: [
      { id: 17, name: "Volunteer", link: "/volunteer" },
      { id: 18, name: "Events", link: "/events" },
      { id: 19, name: "Programs", link: "/programs" },
      { id: 20, name: "Careers", link: "/careers" },
    ],
  },
  {
    id: 21,
    name: "Blog",
    link: "/the-blog",
    children: [
      { id: 22, name: "Blog", link: "/the-blog" },
      { id: 23, name: "Blog Single", link: "/blog-single" },
    ],
  },
  {
    id: 211,
    name: "Contact",
    link: "/the-blog",
  },

  {
    id: 4,
    name: "Pages",
    link: "/c-alerts",
    children: [
      { id: 5, name: "Alerts", link: "/c-alerts" },
      { id: 6, name: "Buttons", link: "/c-buttons" },
      { id: 7, name: "Avatars", link: "/c-avatars" },
      { id: 8, name: "Forms Layout", link: "/c-form-layout" },
      { id: 9, name: "Messages", link: "/c-messages" },
      { id: 10, name: "Dropdown - Modal", link: "/c-modal-dropdown" },
    ],
  },
];
const DATA: NavItemType[] = NAV_DATABASE;

function Navigation() {
  const _renderMenuChild = (item: NavItemType, className = "top-full") => {
    return (
      <div className={`sub-menu absolute py-3 px-2 z-50 w-52 ${className}`}>
        <div className="bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1">
          {item.children?.map((i, index) => (
            <div
              key={i.link + index}
              className="relative menu-item-has-children text-gray-900"
            >
              <NavLink
                exact
                strict
                to={i.link}
                className="block px-4 py-3 hover:bg-gray-100 tracking-wider capitalize"
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
          className="inline-flex items-center p-2 xl:px-3 uppercase text-white opacity-95"
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
    <div>
      <nav className="hidden lg:flex flex-wrap items-center text-xs xl:text-sm uppercase">
        {[DATA[0], DATA[1], DATA[2]].map(_renderItem)}
        <div className="px-2 xl:px-3">
          <Logo />
        </div>
        {[DATA[3], DATA[4], DATA[5]].map(_renderItem)}
      </nav>
    </div>
  );
}

export default Navigation;
