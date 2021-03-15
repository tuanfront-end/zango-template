import React from "react";
import hero1 from "images/hero2_1.png";
import hero2 from "images/hero2_2.png";
import hero3 from "images/hero2_3.png";
import Button from "components/Button/Button";
import NextPrev from "components/NextPrev/NextPrev";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";

const SectionHero2 = () => {
  const _renderItem = (index = 0) => {
    return (
      <div className="relative flex flex-col justify-center bg-gray-200 h-screen">
        <img
          className="block absolute inset-0  w-full h-full object-cover"
          src={!index ? hero1 : index === 1 ? hero2 : hero3}
          alt="Stylish shop"
        />
        <div className="container relative pt-12 lg:pt-20 pb-32">
          <div className="w-full lg:w-2/4 xl:pr-10 text-black uppercase text-left md:text-right space-y-8 sm:space-y-10">
            <span className="text-sm xl:text-lg 2xl:text-1.5xl inline-block font-LibreFranklin tracking-sub-title-540 font-light border-b border-gray-800 transform transition duration-1000 -translate-x-20 opacity-0 ttnc-glide-active-reset">
              {!index
                ? "50% sell off"
                : index === 1
                ? "10% sell off"
                : "25% sell off"}
            </span>
            <h1
              className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-90px font-medium transform transition duration-1000 -translate-x-20 opacity-0 delay-100 ttnc-glide-active-reset"
              style={{ lineHeight: 1.15 }}
            >
              {!index ? (
                <React.Fragment>
                  Fashion <span className="font-thin">Collection</span>
                </React.Fragment>
              ) : index === 1 ? (
                <React.Fragment>
                  <span className="font-thin">Collection</span> <br /> The
                  Trendy
                </React.Fragment>
              ) : (
                <React.Fragment>
                  Lookbook <br />
                  <span className="font-thin">Great 2021</span>
                </React.Fragment>
              )}
            </h1>
            <span className="text-lg normal-case hidden sm:inline-block transform transition duration-1000 -translate-x-20 opacity-0 delay-200 ttnc-glide-active-reset">
              Collection of textile samples lay spread out on the table damsa
              was a travelling salesman and above it there hung a picture that
              he had recently
            </span>
            <div className="transform transition duration-1000 -translate-x-20 opacity-0 delay-300 ttnc-glide-active-reset">
              <ButtonPrimary url="/shop">Shop now</ButtonPrimary>
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
        <div className="absolute bottom-12 2xl:bottom-20 left-0 w-full px-4 md:px-10 ">
          <div className="flex items-center justify-start sm:justify-between text-gray-900">
            <div className="flex-shrink-0 hidden sm:flex items-center">
              <div className="flex space-x-3 text-xl">
                <a href="#root">
                  <i className="lab la-facebook-f"></i>
                </a>
                <a href="#root">
                  <i className="lab la-twitter"></i>
                </a>
                <a href="#root">
                  <i className="lab la-pinterest-p"></i>
                </a>
                <a href="#root">
                  <i className="lab la-github"></i>
                </a>
              </div>
              <div className="w-12 border-b border-black ml-6"></div>
              <span className="inline-block uppercase tracking-widest text-xs ml-3">
                follow us
              </span>
            </div>

            <div>
              <NextPrev btnClass="border border-gray-700 rounded-full bg-transparent text-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
