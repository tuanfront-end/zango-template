import React from "react";
import clientSayBG from "images/clientSayBG.png";
import client1 from "images/client1.png";
import client2 from "images/client2.png";

const SectionClientSay = () => {
  const DATA = [
    {
      img: client1,
      text:
        "Samsa was a travelling salesman - and above it there hung a   picture that he had recently cut out of an illustrated magazine  and housed in a nice, gilded frame. It showed a lady fitted out    with a fur hat and",
      author: "michel Jone",
    },
    {
      img: client2,
      text:
        "I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.",
      author: "Eden Victory",
    },
  ];

  const _renderItem = (item: any) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block  pt-2 md:px-8 md:pt-8 2xl:mt-10 col-span-1">
          <div className="w-full h-full relative">
            <img
              className="absolute bottom-0 right-0 max-w-full max-h-full object-cover"
              src={item.img}
              alt=""
            />
          </div>
        </div>
        <div className="md:col-span-1 flex items-center justify-start max-w-lg">
          <div className="text-gray-200 px-4 sm:px-0 py-12 md:py-24 lg:py-32 xl:py-40">
            <span className="block mb-8 2xl:mb-10 text-lg">
              {`“${item.text}”`}
            </span>
            <span className="uppercase text-base border-b border-gray-200 inline-block mb-6 2xl:mb-8">
              - {item.author}
            </span>
            <div className="" data-glide-el="controls[nav]">
              <button className="glide__bullet" data-glide-dir="=0"></button>
              <button className="glide__bullet" data-glide-dir="=1"></button>
              <button className="glide__bullet" data-glide-dir="=2"></button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="ttnc-SectionClientSay my-8 lg:my-14 bg-cover"
      style={{
        backgroundImage: `url(${clientSayBG})`,
      }}
    >
      <div className="container">
        <div className="glide-fade">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {DATA.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="glide__slide transition duration-700"
                  >
                    {_renderItem(item)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
