import BlogCard1 from "components/BlogCard1/BlogCard1";
import Card1 from "components/Card1/Card1";
import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import blog1 from "images/blog1.png";
import blog2 from "images/blog2.png";
import blog3 from "images/blog3.png";
import blog4 from "images/blog4.png";
import blog5 from "images/blog5.png";
import blog6 from "images/blog6.png";

interface PostType {
  img: string;
  title: string;
}

export default function BlogPage() {
  const BLOG_DATA1: PostType[] = [
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
  const BLOG_DATA2: PostType[] = [
    {
      title: "Upright, raising a heavy fur muff that covered the whole lower ",
      img: blog4,
    },
    {
      title: "Arm towards the viewer pegor then turned to look out the window ",
      img: blog5,
    },
    {
      title: "Housed in a nice, gilded frame showed a lady fitted out with",
      img: blog6,
    },
  ];
  return (
    <div className="ttnc-BlogPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Blog" />
      <div className="container py-14 lg:py-24">
        <div className="grid grid-cols-12">
          <div className="grid-cols-9 pr-8">
            <div>
              <BlogCard1 {...BLOG_DATA1[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
