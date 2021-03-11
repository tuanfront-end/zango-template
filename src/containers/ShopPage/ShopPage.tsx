import Header from "components/Header/Header";
import React from "react";
import SectionBanner from "./SectionBanner";
import SectionProductsPageShop from "./SectionProductsPageShop";
import SectionSidebarFilter from "./SectionSidebarFilter";

export default function ShopPage() {
  return (
    <div className="ttnc-ShopPage">
      <Header />
      <SectionBanner pageName="Shop" />
      <div className="py-16 xl:py-24 px-4 xl:px-24">
        <div className="flex">
          <div className="w-72 pr-20">
            <SectionSidebarFilter />
          </div>
          <SectionProductsPageShop />
        </div>
      </div>
    </div>
  );
}
