import React from "react";
import feature1 from "images/feature1.png";
import feature2 from "images/feature2.png";
import feature3 from "images/feature3.png";
import feature4 from "images/feature4.png";

import feature1Light from "images/feature1Light.png";
import feature2Light from "images/feature2Light.png";
import feature3Light from "images/feature3Light.png";
import feature4Light from "images/feature4Light.png";

export interface FeatureType {
  id: string;
  img: string;
  imgLight: string;
  name: string;
  desc: string;
}

const SectionFeatures = () => {
  const DATA: FeatureType[] = [
    {
      id: "FeatureType_1",
      name: "Free shpping",
      desc: "Around the world",
      img: feature1,
      imgLight: feature1Light,
    },
    {
      id: "FeatureType_2",
      name: "24/7 Support",
      desc: "Curtomer support",
      img: feature2,
      imgLight: feature2Light,
    },
    {
      id: "FeatureType_3",
      name: "Money returns",
      desc: "Guarantee of money return ",
      img: feature3,
      imgLight: feature3Light,
    },
    {
      id: "FeatureType_4",
      name: "Store search",
      desc: "Quick Store Search",
      img: feature4,
      imgLight: feature4Light,
    },
  ];

  const _renderItem = (item: FeatureType, index: number) => {
    return (
      <div key={item.id} className="flex items-center">
        <div className="w-1/4 p-4 flex-shrink-0">
          <img className="block dark:hidden" src={item.img} alt="Feature" />
          <img
            className="hidden dark:block"
            src={item.imgLight}
            alt="Feature Light"
          />
        </div>
        <div className="flex-grow px-4 my-2 border-l border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-200">
          <h2 className="text-xl xl:text-2xl font-medium">{item.name}</h2>
          <span className="font-LibreFranklin text-sm">{item.desc}</span>
        </div>
      </div>
    );
  };
  return (
    <div className="py-8 md:py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DATA.map(_renderItem)}
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
