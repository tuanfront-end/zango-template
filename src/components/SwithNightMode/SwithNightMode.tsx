import React from "react";

function SwithNightMode() {
  return (
    <button
      data-switch-night-mode="default"
      tabIndex={0}
      // className="ttnc-switch-night-mode flex items-center rounded-full border-2 border-primary p-3px flex-row dark:flex-row-reverse focus:outline-none focus:ring-1 focus:ring-primary"
      className="text-2xl md:text-4xl w-12 h-12 md:w-14 md:h-14 rounded-full dark:bg-white bg-gray-800 focus:outline-none shadow-xl"
    >
      <span className="sr-only">Enable dark mode</span>
      {/* <span className="bg-primary rounded-full w-6 h-6"></span> */}
      <span className="dark:text-orange-600 text-gray-200 px-2 text-paragraph-base font-bold flex items-center justify-center">
        <i className="lar la-sun hidden dark:block"></i>
        <i className="lar la-moon dark:hidden"></i>
      </span>
    </button>
  );
}

export default SwithNightMode;
