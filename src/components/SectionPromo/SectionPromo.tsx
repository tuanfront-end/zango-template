import Card3 from "components/Card3/Card3";
import React from "react";
export interface SectionPromoProps {
  img1: string;
  img2: string;
}
const SectionPromo: React.FC<SectionPromoProps> = ({ img1, img2 }) => {
  return (
    <div className="SectionPromo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 py-14">
          <Card3 img={img1} />
          <Card3
            img={img2}
            name={
              <span>
                Men’s <br /> collection
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SectionPromo;
