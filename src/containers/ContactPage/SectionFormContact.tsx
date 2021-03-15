import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import React from "react";

interface InfoItemType {
  icon: string;
  title: string;
  span: string;
  span2?: string;
}

const SectionFormContact = () => {
  const DATA: InfoItemType[] = [
    {
      icon: "pe-7s-culture",
      title: "Office address",
      span:
        "Ailded frame  showed a lady fitted out with fur hat and fur boa who sat upright",
    },
    {
      icon: "pe-7s-phone",
      title: "Phone number",
      span: "54875465-65741895-6547",
      span2: "2222-3333-4444-555",
    },

    {
      icon: "pe-7s-mail",
      title: "Email us",
      span: "eoard@mail.com",
      span2: "example@demomail.com",
    },
    {
      icon: "pe-7s-alarm",
      title: "Office time",
      span: "10AM - 5 PM",
      span2: "Sunday closed",
    },
  ];

  const _renderInfoItem = (item: InfoItemType, index: number) => {
    return (
      <div key={index} className="pl-16 relative">
        <div className="absolute left-0 top-1 text-4xl md:text-5xl text-gray-700 dark:text-gray-300">
          <i className={item.icon}></i>
        </div>
        <div className="font-LibreFranklin text-gray-700 dark:text-gray-300 text-sm">
          <h2 className="font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-2">
            {item.title}
          </h2>
          <span className="block">{item.span}</span>
          {item.span2 && <span className="block">{item.span2}</span>}
        </div>
      </div>
    );
  };
  return (
    <div className="ttnc-SectionFormContact grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 py-8 lg:py-14">
      <div className="col-start-1 lg:col-span-5 xl:pl-20 space-y-10">
        {DATA.map(_renderInfoItem)}
      </div>
      <div className="lg:col-span-7 lg:col-end-13 mt-8 lg:mt-0 lg:pl-5 xl:pl-8 xl:pr-20 text-gray-900 dark:text-gray-100">
        <h2 className="text-2xl uppercase mb-6">Let’s talk to us</h2>
        <form action="" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Input placeholder="Your Name*" />
            <Input placeholder="Your Email*" />
          </div>
          <Input placeholder="Subject*" />
          <Textarea placeholder="Message" />
          <div className="mt-8">
            <ButtonSecondary
              fontSize="text-xs 2xl:text-sm uppercase text-gray-900 dark:text-gray-100"
              border="border-gray-900 dark:border-gray-100"
            >
              send Message
            </ButtonSecondary>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionFormContact;
