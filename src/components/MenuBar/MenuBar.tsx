import React from "react";
import bar from "images/bar.png";
import NavMobile from "components/Navigation/NavMobile";
import { NAV_DATABASE } from "components/Navigation/Navigation";

const MenuBar = () => {
  const navMobileId = "ttnc-nav-mobbile";

  return (
    <div>
      <a
        className="flex flex-col items-end space-y-2"
        href="#root"
        data-ttnc-modal-toggle={navMobileId}
      >
        <div className="w-6 border-b border-white"></div>
        <div className="w-6 border-b border-white"></div>
        <div className="w-9 border-b border-white"></div>
      </a>

      <div
        className="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
        id={navMobileId}
      >
        <NavMobile data={NAV_DATABASE} modalId={navMobileId} />
      </div>
      <div
        className="hidden opacity-25 fixed inset-0 z-40 bg-black"
        id={`${navMobileId}-backdrop`}
        data-ttnc-modal-toggle={navMobileId}
      ></div>
    </div>
  );
};

export default MenuBar;
