import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import React from "react";

const SectionSidebarFilter = () => {
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

  const _renderWidgetTitlte = (name = "widget title here") => {
    return (
      <h2 className="text-gray-900 dark:text-gray-200 text-base uppercase font-medium mb-6">
        {name}
      </h2>
    );
  };

  const _renderWidgetSlideRange = () => {
    return (
      <form>
        {_renderWidgetTitlte("Filter by price")}
        <div id="priceSliderRange"></div>
        <div className="mt-5 flex items-center font-LibreFranklin text-sm">
          <ButtonPrimary url="" padding="py-2.5 px-7">
            <span className="tracking-normal font-LibreFranklin text-xs">
              Filter
            </span>
          </ButtonPrimary>
          <div className="ml-4 text-gray-600 dark:text-gray-300">
            Price: <span id="priceSliderRange-value1">0</span>${" - "}
            <span id="priceSliderRange-value2">280</span>$
          </div>
        </div>
      </form>
    );
  };

  const _renderRatio = (item: string, index: number, name: string) => {
    return (
      <div className="flex items-center my-2 sm:my-0" key={String(index)}>
        <input
          className="mr-2 text-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          type="radio"
          id={item}
          name={name}
          value={item}
          defaultChecked={index === 1}
        />
        <label
          className="font-LibreFranklin text-sm text-gray-700 dark:text-gray-200"
          htmlFor={item}
        >
          {item}
        </label>
      </div>
    );
  };

  const renderWidgetRadioFilter = (
    type: number,
    title: string,
    data: string[]
  ) => {
    return (
      <div>
        {_renderWidgetTitlte(title)}
        <div className=" flex flex-wrap sm:block space-x-3 sm:space-x-0 sm:space-y-3">
          {data.map((item, index) =>
            _renderRatio(item, index, type === 1 ? "cate" : "size")
          )}
        </div>
      </div>
    );
  };

  const _renderWidgetFilterTag = () => {
    return (
      <div>
        {_renderWidgetTitlte("Filter by tags")}
        <div>
          {[
            "Woomen",
            "Collection",
            "Jense",
            "Medium",
            "T-Shirt",
            "Discount",
          ].map((item, index) => {
            return (
              <a
                key={String(index)}
                className="inline-block border border-gray-400 text-gray-600 dark:text-gray-300 text-xs font-LibreFranklin px-5 py-2 mr-2 mb-2 hover:opacity-90"
                href="#root"
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="ttnc-SectionSidebarFilter">
      <div className="space-y-10 lg:space-y-16">
        {_renderWidgetSearchForm()}
        {_renderWidgetSlideRange()}
        {renderWidgetRadioFilter(1, "Filter by categories", [
          "Accessories",
          "Bags",
          "Women",
          "Men",
          "Shoes",
        ])}
        {renderWidgetRadioFilter(2, "Filter by size", [
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "XX-Large",
        ])}
        {_renderWidgetFilterTag()}
      </div>
    </div>
  );
};

export default SectionSidebarFilter;
