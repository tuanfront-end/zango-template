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
      <div className="grid grid-cols-2" style={{ height: 600 }}>
        <div className="px-8 pt-8 border border-black">
          <div className="relative w-full h-full">
            <img
              className="absolute bottom-0 left-0 w-full"
              src={item.img}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-start max-w-lg">
          <div className="text-gray-200">
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
      className="ttnc-SectionClientSay my-24 bg-cover"
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
