import Card2, { Card2Props } from "components/Card2/Card2";
import SectionHeading from "components/SectionHeading/SectionHeading";
import React from "react";

export interface SectionTrensProps {
  cards: Card2Props[];
}

const SectionTrens: React.FC<SectionTrensProps> = ({ cards }) => {
  return (
    <div className="ttnc-SectionTrens py-8 md:py-14 bg-white dark:bg-gray-800">
      <div className="container">
        <div
          className="glide"
          ttnc-data-glide-item-per-row={4}
          ttnc-data-glide-gap={32}
        >
          <SectionHeading />
          <div className="glide__track" data-glide-el="track">
            {/* ttnc-glide__slides-has-quickview for js remove transform when click view */}
            <ul className="glide__slides ttnc-glide__slides-has-quickview">
              {cards.map((card, index) => {
                return (
                  <li key={card.id} className="glide__slide">
                    <Card2 key={card.id} {...card} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTrens;
