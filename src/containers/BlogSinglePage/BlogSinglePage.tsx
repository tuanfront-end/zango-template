import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import Sidebar from "components/Sidebar/Sidebar";
import blogsingleImg from "images/blogsingle.png";
import Author from "./Author";
import CommentArea from "./CommentArea";
import CommentForm from "./CommentForm";

export default function BlogSinglePage() {
  const _renderPostMeta = () => {
    return (
      <div className="flex flex-wrap items-center text-xs tracking-wider text-gray-600 dark:text-gray-300 uppercase font-medium space-x-3 mb-6">
        <span>27 nov 2021</span>
        <span className="w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-400 flex-shrink-0"></span>
        <div className="border-b border-gray-400 space-x-1">
          <a className="" href="#root">
            fashion,
          </a>
          <a href="#root" className="">
            Tren
          </a>
        </div>
      </div>
    );
  };

  const _renderEntryContent = () => {
    return (
      <div className="prose max-w-3xl text-gray-700 dark:text-gray-300">
        <p>
          Wasn't a dream. His room, a proper human room although a little too
          small, lay peacefully between its four familiar walls. A collection of
          textile samples lay spread out on the table - Samsa was a travelling
          salesman - and above it there hung a picture that he had recently cut
          out of an illustrated magazine and housed in a nice, gilded frame. It
          showed a lady fitted out with a fur hat and fur boa who sat upright,
          raising a heavy fur muff that covered the whole of her lower arm
          towards the viewer dregor then turned to look
        </p>
        <blockquote>
          <p>
            Why is Tailwind removing the default styles on my <code>h1</code>{" "}
            elements? How do I disable this? What do you mean I lose all the
            other base styles too?
          </p>
        </blockquote>
        <p>
          Now I'm going to show you an example of an unordered list to make sure
          that looks good, too:
        </p>
        <ul>
          <li>So here is the first item in this list.</li>
          <li>In this example we're keeping the items short.</li>
          <li>Later, we'll use longer, more complex list items.</li>
        </ul>
        <p>
          Rcently cut out of an illustrated magazine and housed in a nice,
          gilded frame. It showed a lady fitted out with a fur hat and fur boa
          who sat upright, raising a heavy fur muff that covered the whole of
          her lower arm towards the viewer dregor then turned to look
        </p>
      </div>
    );
  };

  const _renderSocialShare = () => {
    return (
      <div className="mb-14">
        <ul className="flex items-center flex-grow flex-wrap space-x-8 font-medium text-xs tracking-wider uppercase text-gray-900 dark:text-gray-100">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </li>
          <li>
            <a className="hover:text-secondary" href="#root">
              facebook
            </a>
          </li>
          <li>
            <a className="hover:text-secondary" href="#root">
              twitter
            </a>
          </li>
          <li>
            <a className="hover:text-secondary" href="#root">
              pinterest
            </a>
          </li>
          <li>
            <a className="hover:text-secondary" href="#root">
              instagram
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const _renderNextPrevPost = () => {
    return (
      <div className="border border-gray-300 p-7 flex justify-between uppercase font-semibold text-xl text-gray-600 dark:text-gray-400">
        <a href="#root" className="flex items-center">
          <i className="las la-long-arrow-alt-left"></i>
          <span className="text-xs ml-2 text-gray-900 dark:text-gray-100">
            Previous Post
          </span>
        </a>
        <a href="#root" className="flex items-center">
          <span className="text-xs mr-2 text-gray-900 dark:text-gray-100">
            Next Post
          </span>
          <i className="las la-long-arrow-alt-right"></i>
        </a>
      </div>
    );
  };

  return (
    <div className="ttnc-BlogSinglePage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Blog Single" />
      <div className="container py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
          <div className="col-start-1 lg:col-span-8 xl:col-span-9 lg:pr-8">
            <div className="">
              <img className="mb-8" src={blogsingleImg} alt="blogsingleImg" />
              {_renderPostMeta()}
              <h2 className="text-4xl font-medium mb-5 max-w-3xl text-gray-900 dark:text-gray-100">
                Appearance is the first impression you convey to others major
                factor that contributes
              </h2>
              <div className="space-y-16">
                {_renderEntryContent()}
                {_renderSocialShare()}
                <Author />
                {_renderNextPrevPost()}
                <CommentArea />
                <CommentForm />
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-4 xl:col-span-3 lg:col-end-13">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
