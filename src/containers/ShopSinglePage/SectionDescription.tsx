import Comment from "components/Comment/Comment";
import React from "react";

const SectionDescription = () => {
  const _renderReview = () => {
    return (
      <div className=" max-w-3xl mx-auto px-4">
        <Comment />
      </div>
    );
  };
  const _renderDesc = () => {
    return (
      <div className=" max-w-3xl mx-auto text-sm px-4 text-gray-800 dark:text-gray-200">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
        voluptatibus mollitia aspernatur consequatur veniam quasi voluptate
        libero nostrum aliquid eius reprehenderit neque dicta eos natus, sint
        enim expedita! Molestiae ipsum reprehenderit saepe natus? Aliquid quae,
        doloribus placeat similique sequi dolorem commodi hic eum excepturi,
        facere architecto deleniti at necessitatibus?
        <br />
        <br />
        Omnis illo animi quisquam hic harum et deleniti nihil libero laudantium,
        unde, nam asperiores mollitia! Voluptatem sint dolor ullam provident
        similique pariatur. Molestiae ipsum reprehenderit saepe natus? Aliquid
        quae, doloribus placeat similique sequi dolorem commodi hic eum
        excepturi, facere architecto deleniti at necessitatibus?
      </div>
    );
  };
  return (
    <div className="ttnc-SectionDescription glide-fade bg-white dark:bg-gray-800 mt-24">
      <div
        className="border-t border-b border-gray-300 flex items-center justify-center py-6 space-x-10 mb-9"
        data-glide-el="controls[nav]"
      >
        <button data-glide-dir="=0">
          <span className=" uppercase font-medium text-sm p-1">
            description
          </span>
        </button>
        <button data-glide-dir="=1">
          <span className=" uppercase font-medium text-sm p-1">
            Reviews (3)
          </span>
        </button>
      </div>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">{_renderDesc()}</li>
          <li className="glide__slide">{_renderReview()}</li>
        </ul>
      </div>
    </div>
  );
};

export default SectionDescription;
