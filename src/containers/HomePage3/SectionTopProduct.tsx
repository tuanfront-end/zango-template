import React from "react";
import hero3_topProduct from "images/home3_topProduct.jpg";
import Hero3_1 from "images/Hero3_1.png";
import p2 from "images/p2.png";
import Button from "components/Button/Button";
export interface ItemType {
  title: string;
  price: string;
  oldPrice: string;
  img: string;
}
const SectionTopProduct = () => {
  const DATA: ItemType[] = [
    {
      title: "Fashionable pink sneakers for both men & women",
      price: "$780",
      oldPrice: "$980",
      img: hero3_topProduct,
    },
    {
      title: "The best Fashionable sneakers Black for men",
      price: "$580",
      oldPrice: "$770",
      img: Hero3_1,
    },
    {
      title: "The Best Fashionable Black sneakers for women",
      price: "$440",
      oldPrice: "$920",
      img: p2,
    },
  ];
  const renderItem = (item: ItemType, index: number) => {
    return (
      <li key={String(index)} className="glide__slide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          <div className="transform transition duration-1000 -translate-y-16 opacity-0 ttnc-glide-active-reset">
            <img className="w-full" src={item.img} alt="hero3_topProduct" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-gray-100 mb-6 transform transition duration-1000 translate-y-8 opacity-0 ttnc-glide-active-reset">
              {item.title}
            </h2>
            <span className="font-LibreFranklin text-sm leading-7 text-gray-600 dark:text-gray-400 mb-8 lg:mb-12 transform transition duration-1000 translate-y-8 opacity-0 delay-75 ttnc-glide-active-reset">
              When Gregor Samsa woke from troubled dreams, he found himself
              transformed in his bed into a horrible vermin. He lay on his
              armour-like back, and if he lifted his head a little he could see
              his brown belly, slightly domed he found himself transformed in
              his bed into a horrible vermin. when Gregor Samsa woke from
              troubled dreams, he found himself{" "}
            </span>
            <div className="mb-6 lg:mb-8 transition transform duration-1000 translate-y-8 opacity-0 delay-100 ttnc-glide-active-reset">
              <span className="text-3xl lg:text-4xl text-gray-900 dark:text-gray-100 mr-4">
                {item.price}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {item.oldPrice}
              </span>
            </div>
            <div className="flex space-x-2 lg:mb-14 mb-10 transition transform duration-1000 translate-y-8 opacity-0 delay-150 ttnc-glide-active-reset">
              <Button
                containerClassName="bg-transparent text-gray-900 border border-gray-900"
                padding="p-4"
                fontSize="text-xl xl:text-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Button>
              <Button
                containerClassName="bg-transparent text-gray-900 border border-gray-900 "
                padding="p-4"
                fontSize="text-xl xl:text-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6"
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
              </Button>
              <Button containerClassName="bg-black text-white uppercase">
                add to cart
              </Button>
            </div>

            <div
              className="flex items-center space-x-4 transition transform duration-1000 delay-150 opacity-0 ttnc-glide-active-reset"
              data-glide-el="controls[nav]"
            >
              <span
                data-glide-dir="=0"
                className="flex items-center text-lg text-gray-800 space-x-4"
              >
                <span>01</span>
                <span className="block border-b border-gray-800 w-0"></span>
              </span>
              <span
                data-glide-dir="=1"
                className="flex items-center text-lg text-gray-800 space-x-4"
              >
                <span>02</span>
                <span className="block border-b border-gray-800 w-0"></span>
              </span>
              <span
                data-glide-dir="=2"
                className="flex items-center text-lg text-gray-800 space-x-4"
              >
                <span>03</span>
                <span className="block border-b border-gray-800 w-0"></span>
              </span>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="ttnc-SectionLogoClounds py-8 md:py-14 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="glide-fade">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">{DATA.map(renderItem)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTopProduct;
