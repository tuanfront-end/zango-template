import Comment from "components/Comment/Comment";
import React from "react";

const CommentArea = () => {
  return (
    <div className="ttnc-CommentArea">
      <h2 className="text-lg uppercase font-medium mb-8 text-gray-900 dark:text-gray-100">
        4 comments
      </h2>
      <div>
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
      </div>
    </div>
  );
};

export default CommentArea;
