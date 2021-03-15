import React from "react";
import img1 from "images/Hero3_1.png";

const SectionHero3 = () => {
  const _renderItem = (index = 0) => {
    return (
      <div className="hero3-item-container  relative flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 md:p-10 z-10 transform transition duration-1000 translate-y-16 opacity-0 ttnc-glide-active-reset">
          <img className="mx-auto h-5/6" src={img1} alt="Stylish shop" />
        </div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-center transform transition duration-1000 -translate-y-16 opacity-60 ttnc-glide-active-reset">
          <h1 className="hero3-title text-white uppercase font-medium">
            {!index ? `snacker` : index === 1 ? "running" : "The best"}
          </h1>
        </div>
      </div>
    );
  };

  const _renderPagination = () => {
    return (
      <div
        className="inline-flex items-center text-xl"
        data-glide-el="controls"
      >
        <button
          className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white  text-white tracking-widest"
          data-glide-dir="<"
        >
          <i className="las la-long-arrow-alt-left"></i>
          <span className="text-sm uppercase">prev</span>
        </button>
        <span className="h-4 border-l border-white mx-4"></span>
        <button
          className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white  text-white tracking-widest"
          data-glide-dir=">"
        >
          <span className="text-sm uppercase">next</span>
          <i className="las la-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  };

  return (
    <div className="SectionHero3 relative pb-8 md:pb-14">
      <div className="glide-fade relative">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">{_renderItem()}</li>
            <li className="glide__slide">{_renderItem(1)}</li>
            <li className="glide__slide">{_renderItem(2)}</li>
          </ul>
        </div>
        <div className="absolute bottom-12 2xl:bottom-20 left-0 w-full px-4 md:px-10">
          <div className="flex items-center justify-center">
            {_renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero3;
