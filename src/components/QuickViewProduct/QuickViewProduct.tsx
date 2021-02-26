import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import HeartIcon from "components/HeartIcon/HeartIcon";
import React from "react";

export interface QuickViewProductProps {
  id: string;
  name?: string;
  img?: string;
  price?: string;
  oldPrice?: string;
}

const QuickViewProduct: React.FC<QuickViewProductProps> = ({
  id,
  name,
  img,
  price,
  oldPrice,
}) => {
  const _renderBody = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 p-4 sm:p-8">
        <div className="flex items-center justify-center">
          <img src={img} alt={name} />
        </div>
        <div className="py-8">
          <h2 className="text-3xl lg:text-4xl 2xl:text-5xl mb-5">{name}</h2>
          <div className="flex text-base space-x-4 mb-2">
            <span className="block">{price || `154$`}</span>
            {oldPrice && (
              <span className="block line-through text-gray-400">
                {oldPrice}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-secondary mb-6 text-sm">
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star"></i>
            <i className="las la-star-half"></i>
            <span className="text-gray-700 dark:text-gray-300">
              (2 Customer review)
            </span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. praesentium temporibus,
            veniam quod repellendus vitae exercitationem,
          </p>
          <div className="flex my-6">
            <input
              type="number"
              name="sluong"
              defaultValue="1"
              className="w-14 sm:w-20 mr-1 sm:mr-4 border border-gray-600 text-gray-700"
            />
            <Button containerClassName="bg-gray-700 text-white uppercase text-xs border border-gray-700">
              Add to card
            </Button>
          </div>
          <a className="flex items-center space-x-2 mb-3" href="#root">
            <HeartIcon />
            <span> Add to wishlist</span>
          </a>
          <div className="product_meta text-sm flex flex-col text-gray-500 dark:text-gray-400">
            <span className="sku_wrapper text-gray-800 dark:text-gray-100">
              SKU: <span className="sku">71236-1</span>
            </span>
            <span className="posted_in ">
              <span className="text-gray-800 dark:text-gray-100">
                Categories:
              </span>{" "}
              <a href="#root">Clothing</a>, <a href="#root">Tops</a>,{" "}
              <a href="#root">Women</a>
            </span>
            <span className="tagged_as ">
              <span className="text-gray-800 dark:text-gray-100">Tags:</span>{" "}
              <a href="#root">Button</a>, <a href="#root">Red</a>,{" "}
              <a href="#root">Tshirt</a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div
        className="hidden overflow-hidden fixed inset-0 z-max outline-none focus:outline-none justify-center items-center p-8"
        id={id}
      >
        <div className="my-6 overflow-auto max-w-6xl max-h-full">
          {/* <!--content--> */}
          <div className="relative shadow-lg flex flex-col w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white  outline-none focus:outline-none">
            <div className="absolute right-2 top-2">
              <ButtonClose modalToggleId={id} />
            </div>
            {_renderBody()}
          </div>
        </div>
      </div>
      <div
        className="hidden opacity-60 fixed inset-0 z-40 bg-black dark:bg-white"
        id={`${id}-backdrop`}
        data-ttnc-modal-toggle={id}
      ></div>
    </React.Fragment>
  );
};

export default QuickViewProduct;
