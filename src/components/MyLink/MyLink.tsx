import React from "react";
import { Link } from "react-router-dom";
import { LocationStates } from "routers/types";

export interface MyLinkProps {
  href?: keyof LocationStates | "#root";
  containerClassName?: string;
}
const MyLink: React.FC<MyLinkProps> = ({
  children,
  href = "#root",
  containerClassName = "",
}) => {
  return (
    <Link className={` ${containerClassName}`} to={href}>
      {children}
    </Link>
  );
};

export default MyLink;
