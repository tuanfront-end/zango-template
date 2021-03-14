import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import Header from "components/Header/Header";
import Input from "components/Input/Input";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import Select from "components/Select/Select";
import Textarea from "components/Textarea/Textarea";
import React from "react";

export default function CheckoutPage() {
  const _renderTitle = (title: string) => {
    return (
      <h2 className="font-medium text-xl uppercase mb-6 tracking-wide text-gray-900 dark:text-gray-100">
        {title}
      </h2>
    );
  };

  const _renderBillingForm = () => {
    return (
      <div className="grid grid-cols-1 gap-5 md:gap-7 text-gray-800 dark:text-gray-200">
        <div className="grid grid-cols-2 gap-5 md:gap-8">
          <Input label="First name*" />
          <Input label="Last name*" />
        </div>
        <Input label="Company name (optional)" />
        <Select label="Country*">
          <option value="">United States (US)</option>
          <option value="">United Kingdom (UK)</option>
          <option value="">Vanuatu</option>
          <option value="">Vatican</option>
          <option value="">Uruguay</option>
          <option value="">Vietnam</option>
          <option value="">Yemen</option>
          <option value="">More Country</option>
        </Select>
        <div className="space-y-5">
          <Input
            label="Street address*"
            placeholder="House number and street name"
          />
          <Input placeholder="Apartment, suite, unit etc. (optional)" />
        </div>
        <Input label="Town / City *" />
        <Select label="State*">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
          <option value="">Option 4</option>
          <option value="">Option 5</option>
        </Select>
        <Input label="Postcode / ZIP (optional)" />
        <Input label="Phone*" />
        <Input label="Email address*" />
        <span></span>
        <label className="inline-flex items-center">
          <input type="checkbox" checked className="border-gray-300" />
          <span className="ml-2 text-sm md:text-lg uppercase tracking-wide">
            Deliver to a different address!
          </span>
        </label>
        <Textarea
          label="Order notes (optional)"
          placeholder="Notes about your order, e.g. special notes for delivery."
        />
      </div>
    );
  };

  const _renderOrderTable = () => {
    return (
      <div>
        {_renderTitle("your order")}
        <div className="divide-y divide-gray-300 dark:divide-gray-600 border-b border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">
          <div className="font-medium uppercase text-sm pb-4 pt-2 flex justify-between">
            <span>product</span>
            <span>Subtotal</span>
          </div>
          <div className=" py-4 text-base tracking-wide flex justify-between">
            <span>
              Orbitan Sander <span className="font-medium"> × 1</span>{" "}
            </span>
            <span>$33.00</span>
          </div>
          <div className=" py-4 text-base tracking-wide flex justify-between">
            <span>
              Dewalt <span className="font-medium"> × 1</span>{" "}
            </span>
            <span>$22.00</span>
          </div>
          <div className="font-medium uppercase text-sm py-4 flex justify-between">
            <span>Subtotal</span>
            <span className="font-normal">$90.00</span>
          </div>
          <div className="font-medium uppercase text-sm py-4 flex justify-between">
            <span>shipping</span>
            <span className="font-normal capitalize">Flat rate: $10.00</span>
          </div>
          <div className="font-medium uppercase text-sm py-4 flex justify-between">
            <span>total</span>
            <span>$110.00</span>
          </div>
        </div>
      </div>
    );
  };

  const _renderCheckPayment = () => {
    return (
      <div className="mt-14 tracking-wide">
        {_renderTitle("Check payment")}
        <div className="p-8 bg-gray-100 dark:bg-gray-700 mb-6">
          <span className="text-gray-700 dark:text-gray-300">
            Please send a check to Store name, Store Street, Store Town,Store
            State/ country, Store Postcode
          </span>
        </div>
        <span className="text-gray-700 dark:text-gray-300 mb-12 block">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </span>
        <ButtonSecondary
          border="border-gray-800 dark:border-gray-200"
          fontSize="text-xs 2xl:text-sm uppercase text-gray-900 dark:text-gray-200"
        >
          place holder
        </ButtonSecondary>
      </div>
    );
  };

  return (
    <div className="ttnc-CheckoutPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Checkout" />
      <div className="container py-14 lg:py-24">
        <div className="px-5 py-4 font-LibreFranklin text-sm bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 mb-11 tracking-wide">
          <span className="text-gray-700 dark:text-gray-300">
            Have a coupon!{" "}
          </span>
          <a
            className="text-gray-900 dark:text-gray-100 underline"
            href="#root"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to enter your code
          </a>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-12 gap-5 xl:gap-8">
          <div className="col-start-1 md:col-span-7 mb-12 md:mb-0">
            {_renderTitle("Billing details")}
            {_renderBillingForm()}
          </div>
          <div className="md:col-span-5 md:col-end-13 pl-4 xl:pl-16 2xl:pl-20">
            {_renderOrderTable()}
            {_renderCheckPayment()}
          </div>
        </form>
      </div>
    </div>
  );
}
