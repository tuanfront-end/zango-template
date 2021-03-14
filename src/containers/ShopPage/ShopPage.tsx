import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import SectionProductsPageShop from "./SectionProductsPageShop";
import SectionSidebarFilter from "./SectionSidebarFilter";

export default function ShopPage() {
  return (
    <div className="ttnc-ShopPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Shop" />
      <div className="py-14 xl:py-24 px-4 xl:px-24">
        <div className="flex flex-col-reverse md:flex-row">
          <div className=" flex-shrink-0 md:w-64 md:mr-10 lg:w-72 xl:mr-14 2xl:mr-20">
            <SectionSidebarFilter />
          </div>
          <div className="md:flex-grow mb-10 md:mb-0">
            <SectionProductsPageShop />
          </div>
        </div>
      </div>
    </div>
  );
}
