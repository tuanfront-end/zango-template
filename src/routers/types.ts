import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/home2"?: {};
  "/home3"?: {};
  "/shop"?: {};
  "/shop2"?: {};
  "/shop-single"?: {};
  "/about-us"?: {};
  "/contact"?: {};
  "/cart"?: {};
  "/checkout"?: {};
  "/the-blog"?: {};
  "/the-blog-masonry"?: {};
  "/blog-single"?: {};
  "/404"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
