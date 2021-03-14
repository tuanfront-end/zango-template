import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import HeartIcon from "components/HeartIcon/HeartIcon";
import React from "react";
export interface ProductDetailContentProps {
  imageData: string[];
  isQuickViewModal?: boolean;
}

const ProductDetailContent: React.FC<ProductDetailContentProps> = ({
  imageData = [],
  isQuickViewModal = false,
}) => {
  const IMAGES = imageData;

  const _imageItemThumnail = (item: string) => {
    return (
      <img
        className="w-full h-full object-cover"
        src={item}
        alt="shopSinglePImageThumb"
      />
    );
  };
  const _imageItem = (item: string, index: number) => {
    return (
      <div className="img-zoom-container relative">
        <img
          id={"myimage" + index}
          className={`ttnc-myimage-zoom-lens ${
            isQuickViewModal ? "mx-auto" : "w-full"
          }`}
          data-resuilt-id={"myresult" + index}
          src={item}
          alt="shopSinglePImage"
        />
        <div id={"myresult" + index} className="img-zoom-result"></div>
      </div>
    );
  };

  const _renderImageSlide = () => {
    return (
      <div
        className="glide-for-product-content"
        ttnc-data-glide-gap="10"
        ttnc-data-glide-item-per-row="1"
        ttnc-data-glide-item-per-row-1100="1"
        ttnc-data-glide-item-per-row-800="1"
      >
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {IMAGES.map((item, index) => (
              <li key={index} className="glide__slide">
                {_imageItem(item, index)}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4" data-glide-el="controls[nav]">
          {IMAGES.map((item, index) => (
            <button
              key={index}
              className="w-20 h-20 2xl:w-24 2xl:h-24 mr-2 md:mr-4"
              data-glide-dir={`=${index}`}
            >
              {_imageItemThumnail(item)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const _renderBody = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-14">
        <div className="">{_renderImageSlide()}</div>
        <div className="py-8">
          <div className="space-y-5 2xl:space-y-6">
            <h2 className="text-2xl font-medium lg:text-3xl max-w-lg text-gray-900 dark:text-gray-100">
              Stuffed Eggplant with Schezwan Sauce Recipe
            </h2>
            <div className="flex space-x-4 font-medium text-xl 2xl:text-2xl text-gray-800 dark:text-gray-200">
              <span className="block">{`154$`}</span>
              <span className="block line-through text-gray-300 dark:text-gray-600">
                $220
              </span>
            </div>
            <div className="flex items-center space-x-1 text-secondary text-sm">
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star"></i>
              <i className="las la-star-half"></i>
              <span className="text-gray-700 dark:text-gray-300">
                (2 Customer review)
              </span>
            </div>
            {!isQuickViewModal && (
              <p className="text-gray-700 dark:text-gray-300">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. praesentium temporibus, veniam quod repellendus vitae
                exercitationem,
              </p>
            )}
          </div>
          <div className="mt-10 space-y-5 xl:space-y-6">
            <div className="flex">
              <input
                type="number"
                name="sluong"
                defaultValue="1"
                className="w-14 sm:w-20 mr-1 sm:mr-4 border border-gray-600 text-gray-700"
              />

              <ButtonPrimary>Add to card</ButtonPrimary>
            </div>
            <a
              className="flex items-center space-x-2 text-gray-800"
              href="#root"
            >
              <HeartIcon />
              <span className="font-medium"> Add to wishlist</span>
            </a>
            <div className="product_meta text-xs flex flex-col text-gray-700 dark:text-gray-300 font-LibreFranklin space-y-2">
              <span className="sku">
                <span className="text-gray-900 font-semibold dark:text-gray-100 uppercase">
                  SKU:
                </span>{" "}
                <span className="">71236-1</span>
              </span>
              <span className="posted_in ">
                <span className="text-gray-900 font-semibold dark:text-gray-100 uppercase">
                  Categories:
                </span>{" "}
                <a href="#root">Clothing</a>, <a href="#root">Tops</a>,{" "}
                <a href="#root">Women</a>
              </span>
              <span className="tagged_as ">
                <span className="text-gray-900 font-semibold dark:text-gray-100 uppercase">
                  Tags:
                </span>{" "}
                <a href="#root">Button</a>, <a href="#root">Red</a>,{" "}
                <a href="#root">Tshirt</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="ttnc-ProductDetailContent">{_renderBody()}</div>;
};

export default ProductDetailContent;
