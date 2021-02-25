import React from "react";
import hero1 from "images/hero1.png";
import hero2 from "images/hero2.png";
import hero3 from "images/hero3.png";
import Button from "components/Button/Button";
import NextPrev from "components/NextPrev/NextPrev";

const SectionHero1 = () => {
  const _renderItem = (index = 0) => {
    return (
      <div className="relative bg-accents-900">
        <img
          className="block w-full object-cover"
          src={!index ? hero1 : index === 1 ? hero2 : hero3}
          alt="Stylish shop"
          style={{ minHeight: "70vh" }}
        />
        <div className="absolute inset-0 flex items-start lg:items-center pt-8 lg:pt-0">
          <div className="container">
            <div className="w-full lg:w-2/4 xl:pr-10 text-white uppercase">
              <span className="text-sm xl:text-lg 2xl:text-1.5xl block font-LibreFranklin tracking-sub-title-540 font-light mb-4 lg:mb-8">
                {!index
                  ? "Stylish shop"
                  : index === 1
                  ? "Trendy Shop"
                  : "Winter Shop"}
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-90px font-medium mb-6 sm:mb-8 lg:mb-11">
                {!index ? (
                  <React.Fragment>
                    <span className="font-thin">Winter</span> Collection
                  </React.Fragment>
                ) : index === 1 ? (
                  <React.Fragment>
                    <span className="font-thin">Collection</span> <br /> Trendy
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    Lookbook <br />
                    <span className="font-thin">2021</span>
                  </React.Fragment>
                )}
              </h1>
              <Button
                containerClassName="border border-white bg-transparent hover:bg-black"
                url="#root"
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative pb-8 md:pb-14">
      <div className="glide-fade relative">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">{_renderItem()}</li>
            <li className="glide__slide">{_renderItem(1)}</li>
            <li className="glide__slide">{_renderItem(2)}</li>
          </ul>
        </div>
        <div className="absolute bottom-14 2xl:bottom-20 left-0 w-full">
          <div className="container">
            <NextPrev />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero1;
