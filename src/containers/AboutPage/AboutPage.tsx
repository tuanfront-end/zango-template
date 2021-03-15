import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import SectionFeatures from "components/SectionFeatures/SectionFeatures";
import React from "react";
import SectionClientSay from "./SectionClientSay";
import SectionCTA from "./SectionCTA";
import SectionOurBlog from "./SectionOurBlog";

export default function AboutPage() {
  return (
    <div className="ttnc-AboutPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="About Us" />
      <div className="py-8 lg:py-14">
        <div className="container">
          <SectionFeatures />
        </div>
        <div>
          <SectionCTA />
        </div>
        <div>
          <SectionClientSay />
        </div>
        <div>
          <SectionOurBlog />
        </div>
      </div>
    </div>
  );
}
