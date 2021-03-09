import React from "react";
import hero3_topProduct from "images/home3_topProduct.jpg";
import Button from "components/Button/Button";

const SectionTopProduct = () => {
  return (
    <div className="ttnc-SectionLogoClounds py-8 md:py-14 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <img src={hero3_topProduct} alt="hero3_topProduct" />
          </div>
          <div>
            <h2>Fashionable pink sneakers for both men & women</h2>
            <span>
              When Gregor Samsa woke from troubled dreams, he found himself
              transformed in his bed into a horrible vermin. He lay on his
              armour-like back, and if he lifted his head a little he could see
              his brown belly, slightly domed he found himself transformed in
              his bed into a horrible vermin. when Gregor Samsa woke from
              troubled dreams, he found himself{" "}
            </span>
            <div>
              <span>$780</span>
              <span>$850</span>
            </div>
            <div className="flex space-x-2">
              <Button
                containerClassName="bg-transparent text-gray-400 border border-gray-900"
                padding="p-4"
                fontSize="text-xl xl:text-2xl"
              >
                <i className="la la-heart"></i>
              </Button>
              <Button
                containerClassName="bg-transparent text-gray-400 border border-gray-900 "
                padding="p-4"
                fontSize="text-xl xl:text-2xl"
              >
                <i className="la la-eye"></i>
              </Button>
              <Button containerClassName="bg-black text-white uppercase">
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTopProduct;
