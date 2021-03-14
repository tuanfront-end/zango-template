import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "containers/HomePage/HomePage";
import { Page } from "./types";
import Footer from "components/Footer/Footer";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import HomePage2 from "containers/HomePage2/HomePage2";
import HomePage3 from "containers/HomePage3/HomePage3";
import ShopPage from "containers/ShopPage/ShopPage";
import ShopPage2 from "containers/ShopPage/ShopPage2";
import ShopSinglePage from "containers/ShopSinglePage/ShopSinglePage";
import CartPage from "containers/CartPage/CartPage";
import CheckoutPage from "containers/CheckoutPage/CheckoutPage";

export const pages: Page[] = [
  { path: "/", exact: true, component: HomePage },
  { path: "/home2", exact: true, component: HomePage2 },
  { path: "/home3", exact: true, component: HomePage3 },
  { path: "/shop", exact: true, component: ShopPage },
  { path: "/shop2", exact: true, component: ShopPage2 },
  { path: "/shop-single", exact: true, component: ShopSinglePage },
  { path: "/cart", exact: true, component: CartPage },
  { path: "/checkout", exact: true, component: CheckoutPage },
];

const Routes = () => {
  return (
    <BrowserRouter>
      {/* === HEADER... === */}
      {/* <Header /> */}

      {/* === PAGE CONTENT... === */}
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={() => <h1>404</h1>} />
      </Switch>

      {/* === FOOTER... === */}
      <Footer />

      {/* === MODAL... === */}
      <div className="hidden md:block fixed bottom-10 md:bottom-16 right-5 z-50">
        <SwithNightMode />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
