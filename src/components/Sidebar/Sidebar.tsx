import WidgetSearch from "components/WidgetSearch/WidgetSearch";
import React from "react";
import blog4 from "images/blog4.png";
import blog5 from "images/blog5.png";
import blog6 from "images/blog6.png";
import BlogCard2 from "components/BlogCard2/BlogCard2";
import { PostCardType } from "containers/BlogPage/BlogPage";

const Sidebar = () => {
  const BLOG_DATA2: PostCardType[] = [
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

  const _renderWidgetTitle = (title: string) => {
    return (
      <h2 className="mb-4 uppercase font-medium text-base tracking-wider text-gray-900 dark:text-gray-100">
        {title}
      </h2>
    );
  };

  const _renderWidgetCat = () => {
    return (
      <div>
        {_renderWidgetTitle("category")}

        <ul className="text-sm font-LibreFranklin  space-y-3">
          <li>
            <a
              className="text-gray-700 hover:text-secondary dark:hover:text-secondary dark:text-gray-300"
              href="#root"
            >
              Woomen
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-secondary dark:hover:text-secondary dark:text-gray-300"
              href="#root"
            >
              Fashion
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-secondary dark:hover:text-secondary dark:text-gray-300"
              href="#root"
            >
              Jents T-shirt
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 hover:text-secondary dark:hover:text-secondary dark:text-gray-300"
              href="#root"
            >
              Trendy sorts
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const _renderWidgetRecentPost = () => {
    return (
      <div>
        {_renderWidgetTitle("recent posts")}
        <div className="space-y-4">
          {BLOG_DATA2.map((item, index) => (
            <BlogCard2 key={index} {...item} />
          ))}
        </div>
      </div>
    );
  };

  const _renderWidgetAbout = () => {
    return (
      <div>
        {_renderWidgetTitle("about us")}
        <span className="font-LibreFranklin text-sm text-gray-600 dark:text-gray-300">
          Towards the viewer hregor then turned to look out the window at the
          dull weather towards the viewer regor then turned to look
        </span>
      </div>
    );
  };

  const _renderWidgetTags = () => {
    return (
      <div>
        {_renderWidgetTitle("tags")}
        <ul className="uppercase text-sm  flex flex-wrap">
          {[
            "fashion",
            "t-shirt",
            "trend",
            "woomen",
            "men-fashion",
            "clothes",
          ].map((item, index) => (
            <li key={index}>
              <a
                className="mr-1 text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary"
                href="#root"
              >
                {item},
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="ttnc-Sidebar space-y-10 lg:space-y-14">
      <WidgetSearch />
      {_renderWidgetCat()}
      {_renderWidgetRecentPost()}
      {_renderWidgetAbout()}
      {_renderWidgetTags()}
    </div>
  );
};

export default Sidebar;
