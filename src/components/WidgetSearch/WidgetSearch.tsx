import React from "react";

const WidgetSearch = () => {
  const _renderWidgetSearchForm = () => {
    return (
      <form className="wil-search-form relative flex-shrink-0">
        <button
          type="submit"
          className="absolute right-2 mr-1px top-1/2 transform -translate-y-1/2 p-2 flex items-center justify-center text-gray-700 dark:text-gray-200"
          onClick={undefined}
        >
          <i className="las la-search text-lg leading-none"></i>
        </button>
        <input
          type="text"
          aria-label="Search…"
          placeholder="Search…"
          className="w-full text-sm py-3 pl-5 pr-10 font-LibreFranklin bg-transparent placeholder-gray-500 dark:placeholder-gray-300 border-gray-300 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
        />
      </form>
    );
  };
  return _renderWidgetSearchForm();
};

export default WidgetSearch;
