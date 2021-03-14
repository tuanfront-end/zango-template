import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import Header from "components/Header/Header";
import SectionBannerPage from "components/SectionBannerPage/SectionBannerPage";
import p7 from "images/p7.png";
import p2 from "images/p2.png";
import React from "react";

export default function CartPage() {
  const _renderTable_tr = (index: 1 | 2) => {
    return (
      <tr className="border-gray-300 dark:border-gray-600 ">
        <td className="md:pl-8 w-full md:w-28 text-center relative">
          <a
            href="#root"
            className="absolute md:static text-2xl md:text-lg right-1 top-1 p-2 md:p-1 focus:outline-none focus:ring focus:ring-gray-900"
          >
            <i className="las la-times"></i>
          </a>
        </td>
        <td>
          <img className="w-16" src={index < 2 ? p7 : p2} alt="" />
        </td>
        <td data-title="Product">
          <a
            href="#root"
            className="text-base  no-underline font-normal hover:underline"
          >
            {index < 2 ? "Women black pants" : "Running shoe"}
          </a>
        </td>
        <td data-title="Price">
          <span className="text-base font-medium ">
            {index < 2 ? " $45" : "$33"}
          </span>
        </td>
        <td data-title="Quantity">
          <input
            className="w-16 border-gray-300 text-gray-800"
            type="number"
            name="q"
            defaultValue="1"
          />
        </td>
        <td data-title="Total">
          <span className="text-base font-medium">
            {index < 2 ? " $245" : "$413"}
          </span>
        </td>
      </tr>
    );
  };

  const _renderTableCart = () => {
    return (
      <table className="border border-gray-300 dark:border-gray-600 mb-24 ">
        <thead className="hidden md:table-header-group font-medium text-sm uppercase border-gray-300 dark:border-gray-600">
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {_renderTable_tr(1)}
          {_renderTable_tr(2)}
          <tr>
            <td colSpan={6}>
              <div className="px-2 md:px-8 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:items-center md:justify-between">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="border-gray-300"
                  />
                  <ButtonPrimary textClass="tracking-wider" url="">
                    Apply coupon
                  </ButtonPrimary>
                </div>
                <ButtonPrimary textClass="tracking-wider" url="">
                  Update cart
                </ButtonPrimary>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  const _renderTableTotal = () => {
    return (
      <div className="text-gray-800 dark:text-gray-100">
        <h2 className="font-medium text-base uppercase mb-6">Cart totals</h2>
        <div className="grid mb-8 border border-gray-300 dark:border-gray-600 divide-y divide-gray-300 dark:divide-gray-600 font-LibreFranklin text-sm">
          <div className="py-5 px-8 flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium">$200</span>
          </div>
          <div className="py-5 px-8 flex justify-between">
            <span>Total</span>
            <span className="font-medium">$200</span>
          </div>
        </div>
        <ButtonPrimary textClass="tracking-wider" url="">
          Proceed to checkout
        </ButtonPrimary>
      </div>
    );
  };

  return (
    <div className="ttnc-CartPage bg-white dark:bg-gray-800">
      <Header />
      <SectionBannerPage pageName="Cart" />
      <div className="container">
        <div className="prose w-full max-w-full py-14 lg:py-24 text-gray-800 dark:text-gray-100">
          {_renderTableCart()}
          {_renderTableTotal()}
        </div>
      </div>
    </div>
  );
}
