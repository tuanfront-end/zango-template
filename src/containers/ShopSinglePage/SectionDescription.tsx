import Comment from "components/Comment/Comment";
import CommentForm from "containers/BlogSinglePage/CommentForm";
import React from "react";

const SectionDescription = () => {
  const _renderReview = () => {
    return (
      <div id="tab-review" className="hidden py-2 max-w-3xl mx-auto px-4">
        <ul className="comments space-y-10">
          <li>
            <Comment />
            <ul className="children ml-2 md:ml-13 my-10 pl-10 md:pl-5 space-y-10">
              <li>
                <Comment />
                <ul className="children ml-2 md:ml-13 my-10 pl-10 md:pl-5 space-y-10">
                  <li>
                    <Comment />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <CommentForm />
        </div>
      </div>
    );
  };
  const _renderDesc = () => {
    return (
      <div
        id="tab-description"
        className="block py-2 max-w-3xl mx-auto text-sm px-4 text-gray-800 dark:text-gray-200"
      >
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
    <div
      id="tabs-id"
      className="ttnc-SectionDescription bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 mt-20"
    >
      <ul className="border-t border-b border-gray-300 flex items-center justify-center py-6 space-x-10 mb-8">
        <li>
          <a
            href="#root"
            className="bg-none bg-transparent underline inline-block"
            data-ttnc-tab="tab-description"
          >
            <span className=" uppercase font-medium text-sm p-1">
              description
            </span>
          </a>
        </li>
        <li>
          <a
            href="#root"
            className="bg-none bg-transparent inline-block"
            data-ttnc-tab="tab-review"
          >
            <span className=" uppercase font-medium text-sm p-1">
              Reviews (3)
            </span>
          </a>
        </li>
      </ul>
      <div className="tab-content tab-space">
        {_renderDesc()}
        {_renderReview()}
      </div>
    </div>
  );
};

export default SectionDescription;
