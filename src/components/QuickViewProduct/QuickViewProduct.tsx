import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import HeartIcon from "components/HeartIcon/HeartIcon";
import ProductDetailContent from "components/ProductDetailContent/ProductDetailContent";
import React from "react";

export interface QuickViewProductProps {
  id: string;
  name?: string;
  images: string[];
  price?: string;
  oldPrice?: string;
}

const QuickViewProduct: React.FC<QuickViewProductProps> = ({
  id,
  name,
  images,
  price,
  oldPrice,
}) => {
  const _renderBody = () => {
    return <ProductDetailContent isQuickViewModal imageData={images} />;
  };

  return (
    <div
      className="hidden overflow-hidden fixed inset-0 z-max outline-none focus:outline-none justify-center items-center p-8"
      id={id}
    >
      <div className="my-6 overflow-auto max-w-6xl max-h-full relative z-20">
        {/* <!--content--> */}
        <div className="relative shadow-lg flex flex-col w-full bg-white dark:bg-gray-800 p-4 text-gray-900 dark:text-white  outline-none focus:outline-none">
          <div className="absolute right-2 top-2">
            <ButtonClose modalToggleId={id} />
          </div>
          {_renderBody()}
        </div>
      </div>
      <div
        className="hidden opacity-90 fixed inset-0 z-10 bg-black dark:bg-white"
        id={`${id}-backdrop`}
        data-ttnc-modal-toggle={id}
      ></div>
    </div>
  );
};

export default QuickViewProduct;
