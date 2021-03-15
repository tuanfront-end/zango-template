import BlogCard1 from "components/BlogCard1/BlogCard1";
import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import blog1 from "images/blog1.png";
import blog2 from "images/blog2.png";
import blog3 from "images/blog3.png";
import BlogCardQuote from "components/BlogCardQuote/BlogCardQuote";
import Pagination from "components/Pagination/Pagination";
import Sidebar from "components/Sidebar/Sidebar";

export interface PostCardType {
  img: string;
  title: string;
}

export const BLOG_DATA1: PostCardType[] = [
  {
    title:
      "Appearance is the first impression you convey to others major factor that contributes",
    img: blog1,
  },
  {
    title:
      "These cheesy lines help these stores to portray their offerings precisely and solidly",
    img: blog2,
  },
  {
    title:
      "Stores and looking for clothing store slogans that could perfectly describe your outfits",
    img: blog3,
  },
];

export default function BlogPage() {
  return (
    <div className="ttnc-BlogPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Blog" />
      <div className="container py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-start-1 lg:col-span-8 xl:col-span-9 lg:pr-8 gap-5 lg:gap-8">
            <div className="space-y-10 sm:space-y-12 lg:space-y-20 2xl:space-y-24 ">
              <BlogCard1 {...BLOG_DATA1[0]} />
              <BlogCardQuote />
              <BlogCard1 {...BLOG_DATA1[1]} />
              <BlogCard1 {...BLOG_DATA1[2]} />
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-4 xl:col-span-3 lg:col-end-13">
            <Sidebar />
          </div>
        </div>
        <div className="mt-20">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
