import React from "react";
import aboutCTA from "images/aboutCTA.png";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";

const SectionCTA = () => {
  return (
    <div className="px-4 py-8 md:py-14">
      <div className="grid grid-cols-1 xl:grid-cols-3 max-w-2xl xl:max-w-full mx-auto">
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full p-4 xl:px-10 xl:py-14 2xl:px-16 2xl:py-20 mb-8 xl:mb-0 xl:shadow-xl xl:absolute xl:top-1/2 xl:transform xl:-translate-y-1/2 xl:-right-14 2xl:-right-16 text-center xl:text-right">
            <span className="uppercase text-secondary tracking-widest font-medium text-xs mb-4 block">
              About us
            </span>
            <h2 className="text-2xl lg:text-4xl 2xl:text-5xl mb-8">
              Clothes that will be your best friends
            </h2>
            <ButtonSecondary
              fontSize="text-xs 2xl:text-sm uppercase"
              border="border-gray-800 dark:border-white"
            >
              Contact us
            </ButtonSecondary>
          </div>
        </div>
        <div>
          <img className="w-full" src={aboutCTA} alt="" />
        </div>
        <div className="px-4 mt-10 xl:mt-0 xl:px-12 2xl:px-16 flex items-center justify-center text-center xl:text-left">
          <div className="text-gray-700 dark:text-gray-300">
            <h2 className="border-b inline-block text-2xl lg:text-3xl  border-gray-800 mb-4 text-gray-900 dark:text-gray-100">
              Our Mission
            </h2>
            <span className="font-LibreFranklin text-base block mb-8 xl:mb-12">
              Pitifully thin compared with the size of the rest of him, waved
              about helplessly as he looked. "What's happened to me gregor then
              turned to look out the window at the dull weather deal to the day
            </span>
            <h2 className="text-2xl lg:text-3xl border-b inline-block border-gray-800 mb-4 text-gray-900 dark:text-gray-100">
              Goal of our business
            </h2>
            <span className="font-LibreFranklin text-base block mb-8 xl:mb-12">
              Gilded frame. It showed a lady fitted out with a fur hat and fur
              boa who sat upright, raising a heavy fur muff thaered the whole of
              her lower arm towards the viewer done.
            </span>
            <ButtonPrimary>go to shop</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCTA;
