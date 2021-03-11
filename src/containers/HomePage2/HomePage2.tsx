import Card1 from "components/Card1/Card1";
import { Card2Props } from "components/Card2/Card2";
import React from "react";
import card3_p3 from "images/card3_p3.png";
import card3_p1 from "images/card3_p1.png";
import home2P1 from "images/home2_p1.png";
import home2P2 from "images/home2_p2.png";
import home2P3 from "images/home2_p3.png";
import home2P4 from "images/home2_p4.png";

import SectionHero2 from "components/SectionHero2/SectionHero2";
import Header2 from "components/Header2/Header2";
import SectionFeatures from "components/SectionFeatures/SectionFeatures";
import SectionProducts from "components/SectionProducts/SectionProducts";
import SectionPromo from "components/SectionPromo/SectionPromo";
import { CARD_DATA } from "containers/HomePage/HomePage";

export default function HomePage2() {
  return (
    <div className="pb-14 bg-white dark:bg-gray-800">
      {/*  */}
      <Header2 />
      {/*  */}
      <SectionHero2 />
      <section className="py-8 md:py-14 bg-white dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card1
              containerClassName="aspect-w-4 aspect-h-3"
              name={
                <span>
                  New <br /> Arrival
                </span>
              }
              img={home2P1}
            />
            <div className="grid grid-cols-1 gap-4">
              <Card1
                containerClassName="aspect-w-4 aspect-h-3"
                name={
                  <span>
                    Running <br /> shoes
                  </span>
                }
                img={home2P2}
              />
              <Card1
                containerClassName="aspect-w-4 aspect-h-3"
                img={home2P3}
                name={
                  <span>
                    Spring <br /> Collection
                  </span>
                }
              />
            </div>
            <Card1
              containerClassName="aspect-w-4 aspect-h-3 "
              name={
                <span>
                  Wool <br /> sweater
                </span>
              }
              img={home2P4}
              textColor="text-white"
            />
          </div>
        </div>
      </section>
      <SectionProducts cards={CARD_DATA} />
      <SectionPromo img2={card3_p3} img1={card3_p1} />
      <SectionFeatures />
    </div>
  );
}
