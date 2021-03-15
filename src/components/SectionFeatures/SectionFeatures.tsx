import React from "react";

export interface FeatureType {
  id: string;
  icon: string;
  name: string;
  desc: string;
}

const SectionFeatures = () => {
  const DATA: FeatureType[] = [
    {
      id: "FeatureType_1",
      name: "Free shpping",
      desc: "Around the world",
      icon: "pe-7s-car",
    },
    {
      id: "FeatureType_2",
      name: "24/7 Support",
      desc: "Curtomer support",
      icon: "pe-7s-alarm",
    },
    {
      id: "FeatureType_3",
      name: "Money returns",
      desc: "Guarantee of money return ",
      icon: "pe-7s-wallet",
    },
    {
      id: "FeatureType_4",
      name: "Store search",
      desc: "Quick Store Search",
      icon: "pe-7s-rocket",
    },
  ];

  const _renderItem = (item: FeatureType, index: number) => {
    return (
      <div key={item.id} className="flex items-center">
        <div className="pr-4 flex-shrink-0 text-4xl xl:text-5xl text-gray-700 dark:text-gray-300">
          <i className={item.icon}></i>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {DATA.map(_renderItem)}
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
