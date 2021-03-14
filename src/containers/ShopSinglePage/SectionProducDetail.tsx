import React from "react";
import shopSinglePImage from "images/shopSinglePImage.png";
import shopSinglePImage2 from "images/shopSinglePImage2.png";
import shopSinglePImage3 from "images/shopSinglePImage3.png";
import shopSinglePImage4 from "images/shopSinglePImage5.png";
import HeartIcon from "components/HeartIcon/HeartIcon";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import ProductDetailContent from "components/ProductDetailContent/ProductDetailContent";

const SectionProducDetail = () => {
  const IMAGES = [
    shopSinglePImage,
    shopSinglePImage2,
    shopSinglePImage3,
    shopSinglePImage4,
  ];

  return (
    <div className="ttnc-SectionProducDetail">
      <ProductDetailContent imageData={IMAGES} />
    </div>
  );
};

export default SectionProducDetail;
