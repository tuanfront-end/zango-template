import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import React from "react";
import SectionFormContact from "./SectionFormContact";

export default function ContactPage() {
  return (
    <div className="ttnc-ContactPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Contact" />
      <div className="py-8 lg:py-14">
        <div className="container">
          <SectionFormContact />
        </div>
        <div className="py-8 lg:py-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
            allowFullScreen
            height="500px"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
