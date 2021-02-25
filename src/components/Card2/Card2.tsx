import React from "react";
import p4Img from "images/p4.png";
import MyLink from "components/MyLink/MyLink";
import ListIconOnCard from "components/ListIconOnCard/ListIconOnCard";
import Modal from "components/Modal/Modal";

export interface Card2Props {
  img?: string;
  name?: string;
  price?: string;
}
const Card2: React.FC<Card2Props> = ({ img, name, price }) => {
  return (
    <div className="group relative">
      <div className="aspect-w-3 aspect-h-4 bg-gray-400">
        <a href="#root">
          <img
            className="w-full h-full object-cover"
            src={img || p4Img}
            alt="Product some"
          />
        </a>

        <div className="transform opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 absolute pb-8 flex items-end justify-center bottom-8 left-1/2 -translate-x-1/2 transition-all">
          <ListIconOnCard />
        </div>
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
