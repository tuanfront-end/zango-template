import Card2 from "components/Card2/Card2";
import { CARD2_DATA } from "containers/HomePage/HomePage";
import React from "react";

const SectionRelated = () => {
  return (
    <div className="ttnc-SectionRelated mt-24">
      <h2>Related</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-8 mb-16">
        {CARD2_DATA.map((card) => {
          return <Card2 key={card.id} {...card} />;
        })}
      </div>
    </div>
  );
};

export default SectionRelated;
