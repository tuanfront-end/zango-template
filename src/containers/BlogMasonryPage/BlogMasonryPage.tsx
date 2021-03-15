import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import Pagination from "components/Pagination/Pagination";
import BlogCard3 from "components/BlogCard3/BlogCard3";
import { PostCardType } from "containers/BlogPage/BlogPage";
import masonry1 from "images/masonry1.png";
import masonry2 from "images/masonry2.png";
import masonry3 from "images/masonry3.png";
import masonry4 from "images/masonry4.png";
import masonry5 from "images/masonry5.png";
import masonry6 from "images/masonry6.png";
import masonry7 from "images/masonry7.png";
import masonry8 from "images/masonry8.png";
import masonry9 from "images/masonry9.png";
import masonry10 from "images/masonry10.png";
import masonry11 from "images/masonry11.png";
import masonry12 from "images/masonry12.png";
export const DATA_MASONRY: PostCardType[] = [
  { title: "The next level of Fashion", img: masonry1 },
  { title: "Wear and set trends", img: masonry2 },
  { title: "Perfectly Describe your Outfits", img: masonry3 },
  { title: "Customers then You Are", img: masonry4 },
  { title: "Clothes for Your Best Moments", img: masonry5 },
  { title: "Best fashion", img: masonry6 },
  { title: "Wear and set trends", img: masonry7 },
  { title: "Stylish clothes", img: masonry8 },
  { title: "Authentic peace", img: masonry9 },
  { title: "Stocking out", img: masonry10 },
  { title: "Clothes for Trendsetters", img: masonry11 },
  { title: "Your Body Foundation", img: masonry12 },
];
export default function BlogPage() {
  return (
    <div className="ttnc-BlogPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Blog Masonry" />
      <div className="py-14 lg:py-24">
        <div className="space-y-10 sm:space-y-12 lg:space-y-20 2xl:space-y-24 ">
          <div className="ttnc-masonry-grid">
            <div className="ttnc-masonry-grid__sizer w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"></div>
            {DATA_MASONRY.map((item, index) => (
              <div
                key={String(index)}
                className="ttnc-masonry-grid__item p-4 w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"
              >
                <BlogCard3 {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
