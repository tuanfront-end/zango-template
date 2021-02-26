import React from "react";
import p1Img from "images/p1.png";
import MyLink from "components/MyLink/MyLink";

export interface Card1Props {
  img?: string;
  name?: string;
}
const Card1: React.FC<Card1Props> = ({ img, name }) => {
  return (
    <div className="aspect-w-1 aspect-h-1 bg-gray-400 relative group">
      <img
        className="w-full h-full object-cover"
        src={img || p1Img}
        alt="Product some"
      />
      <div className="absolute inset-0 pl-10 pb-14 flex flex-col justify-end text-gray-900">
        <span className="transition-all block text-2xl font-medium mb-3 group-hover:text-secondary">
          {name || `Running shoes`}
        </span>
        <MyLink containerClassName="group-hover:text-secondary">
          Shop now
        </MyLink>
      </div>
      <a className="absolute inset-0 z-10" href="#root"></a>
    </div>
  );
};

export default Card1;
