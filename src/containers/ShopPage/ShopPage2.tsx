import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import SectionProductsPageShop from "./SectionProductsPageShop";

export default function ShopPage2() {
  return (
    <div className="ttnc-ShopPage2 bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Shop" />
      <div className="container py-14 xl:py-24">
        <SectionProductsPageShop />
      </div>
    </div>
  );
}
