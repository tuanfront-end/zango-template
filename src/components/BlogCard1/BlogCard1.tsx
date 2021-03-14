import React from "react";

export interface BlogCard1Props {
  title: string;
  img: string;
}

const BlogCard1: React.FC<BlogCard1Props> = ({ title, img }) => {
  return (
    <div className="ttnc-BlogCard1">
      <div>
        <img src={img} alt="" />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default BlogCard1;
