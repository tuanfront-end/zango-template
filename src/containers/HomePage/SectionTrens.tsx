import Card2 from "components/Card2/Card2";
import SectionHeading from "components/SectionHeading/SectionHeading";
import React from "react";

const SectionTrens = () => {
  return (
    <div className="ttnc-SectionTrens pb-24 bg-white dark:bg-gray-800">
      <div className="container glide">
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
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionTrens;
