import { Card2Props } from "components/Card2/Card2";
import React from "react";
import promo_3 from "images/promo_3.png";
import promo_4 from "images/promo_4.png";
import p5 from "images/p5.png";
import p6 from "images/p6.png";
import p7 from "images/p7.png";
import p8 from "images/p8.png";
import p9 from "images/p9.png";
import p10 from "images/p10.png";
import p11 from "images/p11.png";
import p13 from "images/p13.png";
import p15 from "images/p15.png";
import p16 from "images/p16.png";
import SectionHero3 from "components/SectionHero3/SectionHero3";
import Header3 from "components/Header3/Header3";
import SectionFeatures from "components/SectionFeatures/SectionFeatures";
import SectionProducts from "components/SectionProducts/SectionProducts";
import SectionTopProduct from "./SectionTopProduct";
import SectionPromo from "components/SectionPromo/SectionPromo";

export default function HomePage3() {
  const cards: Card2Props[] = [
    {
      id: "tren1_card2_1",
      price: "$144",
      oldPrice: "$244",
      saleUp: "12%",
      name: "Women Wool Runner",
      img: p5,
      img2: p15,
    },
    {
      id: "tren1_card2_2",
      price: "$244",
      name: "Two Colure Hoodie",
      img: p7,
      img2: p6,
    },
    {
      id: "tren1_card2_3",
      price: "$164",
      name: "Beautifull Stylish Handbag",
      img: p16,
    },
    {
      id: "tren1_card2_4",
      price: "$224",
      oldPrice: "$333",
      saleUp: "11%",
      name: "Shadedeye Gold Sunglasses",
      img: p8,
      img2: p9,
    },

    {
      id: "tren1_card2_5",
      price: "$322",
      name: "Stylish Smart Watch",
      img: p13,
    },
    {
      id: "tren1_card2_6",
      price: "$844",
      oldPrice: "$944",
      saleUp: "10%",
      name: "Gray Fitness T-Shirt",
      img: p10,
      img2: p11,
    },
    {
      id: "tren1_card2_7",
      price: "$244",
      name: "Two Colure Hoodie",
      img: p7,
      img2: p6,
    },
    {
      id: "tren1_card2_8",
      price: "$164",
      name: "Beautifull Stylish Handbag",
      img: p16,
    },
  ];

  return (
    <div className="ttnc-HomePage3 pb-14 bg-white dark:bg-gray-800">
      {/*  */}
      <Header3 />
      {/*  */}
      <SectionHero3 />
      <SectionFeatures />
      <SectionTopProduct />
      <SectionProducts cards={cards} />
      <SectionPromo img1={promo_3} img2={promo_4} />
    </div>
  );
}
