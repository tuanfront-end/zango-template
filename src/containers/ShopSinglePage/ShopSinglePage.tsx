import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import SectionDescription from "./SectionDescription";
import SectionProducDetail from "./SectionProducDetail";
import SectionRelated from "./SectionRelated";

export default function ShopSinglePage() {
  return (
    <div className="ttnc-ShopSinglePage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Shop Single" />
      <div className="container py-14 xl:py-24">
        <SectionProducDetail />
        <SectionDescription />
        <SectionRelated />
      </div>
    </div>
  );
}
