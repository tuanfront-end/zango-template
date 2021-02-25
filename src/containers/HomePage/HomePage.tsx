import Card1 from "components/Card1/Card1";
import SectionHero1 from "components/SectionHero1/SectionHero1";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import p2Img from "images/p2.png";
import p3Img from "images/p3.png";
import React from "react";
import SectionTrens from "./SectionTrens";

export default function HomePage() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-max">
        <SwithNightMode />
      </div>
      <SectionHero1 />
      <section className="py-28 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card1 name="New Arrival" />
            <Card1 name="Running shoes" img={p2Img} />
            <Card1 name="New Arrival" img={p3Img} />
          </div>
        </div>
      </section>
      <SectionTrens />
    </div>
  );
}
