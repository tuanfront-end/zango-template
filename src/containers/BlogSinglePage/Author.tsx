import React from "react";
import authorImg from "images/author.png";

const Author = () => {
  return (
    <div className="ttnc-SingleAuthor flex flex-col sm:flex-row">
      <img className="w-32 h-32 object-cover mr-6" src={authorImg} alt="" />
      <div>
        <div className=" mb-2">
          <h2 className="inline-block text-lg font-medium text-gray-900 dark:text-gray-100">
            Eden Joony
          </h2>
        </div>
        <span className="mb-4 block font-LibreFranklin text-gray-700 dark:text-gray-300 text-sm">
          Magazine and housed in a nice, gilded frame. It showed a lady fitted
          out with a fur hat and fur boa who sat upright, raising a heavy fur
          muff that covered
        </span>
        <div className="text-xl text-gray-900 dark:text-gray-100 space-x-2">
          <a href="#root">
            <i className="lab la-facebook-f"></i>
          </a>
          <a href="#root">
            <i className="lab la-twitter"></i>
          </a>
          <a href="#root">
            <i className="lab la-instagram"></i>
          </a>
          <a href="#root">
            <i className="lab la-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
