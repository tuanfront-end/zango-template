import Button from "components/Button/Button";
import Card2, { Card2Props } from "components/Card2/Card2";
import React from "react";

export interface SectionProductsProps {
  cards: Card2Props[];
}

const SectionProducts: React.FC<SectionProductsProps> = ({ cards }) => {
  return (
    <div className="ttnc-SectionProducts py-8 md:py-14 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="flex items-center justify-center space-x-12 uppercase text-gray-900 dark:text-gray-100 text-base mb-6 font-medium">
          <a
            href="#root"
            className="inline-block border-b border-gray-800 dark:border-gray-300"
          >
            New arrival
          </a>
          <a href="#root">Best sellers</a>
          <a href="#root">Sale product</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-16">
          {cards.map((card) => {
            return <Card2 key={card.id} {...card} />;
          })}
        </div>
        <div className="flex items-center justify-center">
          <Button containerClassName="bg-black text-white uppercase">
            more product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
