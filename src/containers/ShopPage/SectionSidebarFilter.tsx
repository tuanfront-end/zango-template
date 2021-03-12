import React from "react";

const SectionSidebarFilter = () => {
  const _renderWidgetSearchForm = () => {
    return (
      <form
        className={`wil-search-form relative flex-shrink-0 text-white w-40 xl:w-52`}
      >
        <button
          type="submit"
          className="absolute right-2 mr-1px top-1/2 transform -translate-y-1/2 p-2 flex items-center justify-center"
          onClick={undefined}
        >
          <i className="las la-search text-lg leading-none"></i>
        </button>
        <input
          type="text"
          aria-label="Search…"
          placeholder="Search…"
          className={`w-full h-10 text-sm rounded-full pl-5 pr-10 font-LibreFranklin bg-transparent placeholder-white border-gray-300`}
        />
      </form>
    );
  };

  const _renderWidgetTitlte = (name = "widget title here") => {
    return <h2 className="text-gray-900 text-2xl">{name}</h2>;
  };

  const _renderWidgetSlideRange = () => {
    return (
      <div>
        {_renderWidgetTitlte()}
        <div id="priceSliderRange"></div>
      </div>
    );
  };

  const renderWidgetRadioFilter = () => {
    return (
      <div>
        {_renderWidgetTitlte()}
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <br />
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
        <br />
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Other</label>
      </div>
    );
  };

  const _renderWidgetFilterTag = () => {
    return (
      <div>
        {_renderWidgetTitlte()}
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
                className="inline-block border border-gray-400 text-gray-800 text-xs font-LibreFranklin px-5 py-2 mr-2 mb-2"
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
        {renderWidgetRadioFilter()}
        {renderWidgetRadioFilter()}
        {_renderWidgetFilterTag()}
      </div>
    </div>
  );
};

export default SectionSidebarFilter;
