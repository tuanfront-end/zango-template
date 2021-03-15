import BlogCard4 from "components/BlogCard4/BlogCard4";
import { DATA_MASONRY } from "containers/BlogMasonryPage/BlogMasonryPage";
import { PostCardType } from "containers/BlogPage/BlogPage";
import React from "react";

const SectionOurBlog = () => {
  const _renderPostItem = (item: PostCardType, index: number) => {
    if (index >= 3) return null;
    return <BlogCard4 {...item} />;
  };

  return (
    <div className="ttnc-SectionOurBlog py-8 lg:py-14 text-gray-900 dark:text-gray-100">
      <div className="container">
        <div className="mb-6 text-center">
          <span className="text-secondary tracking-widest uppercase text-xs font-medium inline-block mb-2">
            Recent news
          </span>
          <h2 className="font-medium uppercase text-xl">From our blog</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 gap-y-8">
          {DATA_MASONRY.map(_renderPostItem)}
        </div>
      </div>
    </div>
  );
};

export default SectionOurBlog;
