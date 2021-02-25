import React from "react";
import p4Img from "images/p4.png";
import p3Img from "images/p2.png";
import ListIconOnCard from "components/ListIconOnCard/ListIconOnCard";

export interface Card2Props {
  img?: string;
  img2?: string;
  name?: string;
  price?: string;
  saleUp?: string;
}
const Card2: React.FC<Card2Props> = ({ img, img2, name, price, saleUp }) => {
  return (
    <div className="group relative">
      {saleUp && (
        <div className="absolute right-0 top-8 z-20">
          <span className="py-2 px-3 bg-secondary text-white">{saleUp}</span>
        </div>
      )}
      <div className="aspect-w-3 aspect-h-4 bg-gray-400">
        <div className="transform opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 absolute pb-8 flex items-end justify-center bottom-8 left-1/2 -translate-x-1/2 transition-all z-10">
          <ListIconOnCard />
        </div>
        <a href="#root">
          <img
            className="block group-hover:hidden w-full h-full object-cover"
            src={img || p4Img}
            alt="Product some"
          />
          <img
            className="hidden group-hover:block w-full h-full object-cover"
            src={img2 || p3Img}
            alt="Product some"
          />
        </a>
      </div>
      <div className="p-6 text-center text-gray-900 dark:text-white font-medium">
        <a
          href="#root"
          className="transition-all block text-lg mb-3 group-hover:text-secondary"
        >
          {name || `Running shoes`}
        </a>
        <span className="block text-base">{price || `154$`}</span>
      </div>
    </div>
  );
};

export default Card2;
