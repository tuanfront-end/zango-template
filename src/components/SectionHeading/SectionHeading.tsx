import MyLink from "components/MyLink/MyLink";
import NextPrev from "components/NextPrev/NextPrev";
import React from "react";

const SectionHeading = () => {
  return (
    <div className="flex items-center justify-between mb-7 space-x-4 text-gray-900 dark:text-white">
      <h2 className="uppercase text-2xl xl:text-3xl 2xl:text-4xl">Trends</h2>
      <div className="flex-shrink-0 space-x-8 flex items-center">
        <MyLink>More Product</MyLink>
        <NextPrev
          btnClass="bg-white hover:bg-gray-900 rounded-none border border-gray-900 text-gray-900 hover:text-white"
          containerClassName="-space-x-px"
        />
      </div>
    </div>
  );
};

export default SectionHeading;
