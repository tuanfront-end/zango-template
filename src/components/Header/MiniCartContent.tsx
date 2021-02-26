import React from "react";
import p4 from "images/p4.png";
import Button from "components/Button/Button";

const MiniCartContent = () => {
  const _renderItem = () => {
    return (
      <div className="px-4 mini-cart-item flex space-x-3 font-normal text-base relative group">
        <div className="mini-cart-item-image w-3/12 flex-shrink-0">
          <img src={p4} alt="" />
          <a
            className="absolute inset-0 z-10"
            href="#root"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div className="mini-cart-item-des flex-grow flex flex-col space-y-1 text-sm">
          <span className="text-black font-medium capitalize dark:text-white text-base group-hover:underline">
            Elegant skirt
          </span>
          <span className="mini-cart-item-quantity text-gray-600 dark:text-gray-400">
            Qty: 1
          </span>
          <span className="mini-cart-item-price font-medium text-gray-600 dark:text-gray-400">
            $20.15
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-72 shadow-lg bg-white dark:bg-gray-900 py-4 divide-y divide-gray-200 dark:divide-gray-800">
      <div className="pb-4 space-y-3">
        {_renderItem()}
        {_renderItem()}
      </div>
      <div className="px-4 flex flex-col space-y-2 text-center pt-2">
        <a
          className="font-medium text-gray-600 dark:text-gray-300 text-base block py-2 hover:underline"
          href="#root"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subtotal: $215.14
        </a>
        <Button containerClassName="bg-gray-900 dark:bg-gray-600 hover:bg-black text-white uppercase">
          View Cart
        </Button>
        <Button containerClassName="bg-gray-700 text-white hover:bg-black uppercase">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default MiniCartContent;
