import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/home2"?: {};
  "/home3"?: {};
  "/shop"?: {};
  "/producs"?: {};
  "/produc-detail"?: {};
  "/about-us"?: {};
  "/contact"?: {};
  "/cart"?: {};
  "/checkout"?: {};
  "/the-blog"?: {};
  "/blog-single"?: {};
  "/detail2"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
