import Card1 from "components/Card1/Card1";
import SectionHero1 from "components/SectionHero1/SectionHero1";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import p2Img from "images/p2.png";
import p3Img from "images/p3.png";
import React from "react";
import SectionDeal from "./SectionDeal";
import SectionLogoClounds from "./SectionLogoClounds";
import SectionTrens from "./SectionTrens";

export default function HomePage() {
  return (
    <div className="pb-14 bg-white dark:bg-gray-800">
      <div className="fixed top-0 left-0 z-max">
        <SwithNightMode />
      </div>
      <SectionHero1 />
      <section className="py-8 md:py-14 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card1 name="New Arrival" />
            <Card1 name="Running shoes" img={p2Img} />
            <Card1 name="New Arrival" img={p3Img} />
          </div>
        </div>
      </section>
      <SectionTrens />
      <SectionDeal />
      <SectionTrens />
      <SectionLogoClounds />
    </div>
  );
}
