import Modal from "components/Modal/Modal";
import { QuickViewProductModalId } from "components/QuickViewProduct/QuickViewProduct";
import ToolTip2 from "components/ToolTip2/ToolTip2";
import ToolTip2Panel from "components/ToolTip2/ToolTip2Panel";
import ToolTip2Trigger from "components/ToolTip2/ToolTip2Trigger";
import React from "react";

const ListIconOnCard = () => {
  const classes =
    "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-lg";
  const svgClass = "h-5 w-5 md:w-6 md:h-6";

  const _renderQuickView = () => {
    return (
      <ToolTip2>
        <ToolTip2Trigger>
          <div
            className={`${classes}`}
            data-ttnc-modal-toggle={QuickViewProductModalId}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={svgClass}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </ToolTip2Trigger>
        <ToolTip2Panel>Quick view!</ToolTip2Panel>
      </ToolTip2>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-3 text-base">
      {_renderQuickView()}

      <ToolTip2>
        <ToolTip2Trigger>
          <div className={classes}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={svgClass}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </ToolTip2Trigger>
        <ToolTip2Panel>
          <div>Add to Wishlist!</div>
        </ToolTip2Panel>
      </ToolTip2>

      <ToolTip2>
        <ToolTip2Trigger>
          <div className={classes}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={svgClass}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </ToolTip2Trigger>
        <ToolTip2Panel>Add to Cart!</ToolTip2Panel>
      </ToolTip2>
    </div>
  );
};

export default ListIconOnCard;
