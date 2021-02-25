import Card2 from "components/Card2/Card2";
import SectionHeading from "components/SectionHeading/SectionHeading";
import React from "react";

const SectionTrens = () => {
  return (
    <div className="ttnc-SectionTrens py-8 md:py-14 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="glide" ttnc-data-glide-gap={100}>
          <SectionHeading />
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                  <Card2 />
                  <Card2 />
                  <Card2 />
                  <Card2 />
                </div>
              </li>
              <li className="glide__slide">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                  <Card2 saleUp="-34%" />
                  <Card2 />
                  <Card2 />
                  <Card2 />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTrens;
