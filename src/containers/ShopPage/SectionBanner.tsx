import React from "react";

export interface SectionBannerProps {
  pageName?: string;
}
const SectionBanner: React.FC<SectionBannerProps> = ({
  children,
  pageName = "Shop",
}) => {
  return (
    <div className="ttnc-SectionBanner bg-accents-900 py-20 xl:py-28 text-white text-center">
      <div className="container">
        <h2 className="text-4xl xl:text-6xl font-medium mb-5 uppercase">
          {pageName}
        </h2>
        <div className="flex items-center justify-center space-x-4 text-lg">
          <i className="las la-home"></i>
          <i className="las la-long-arrow-alt-right"></i>
          <h3 className="text-base">{pageName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
