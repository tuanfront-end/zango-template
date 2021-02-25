import React from "react";
import { Link } from "react-router-dom";

export interface MyLinkProps {
  href?: string;
  containerClassName?: string;
}
const MyLink: React.FC<MyLinkProps> = ({
  children,
  href = "#root",
  containerClassName = "text-gray-700 dark:text-gray-200",
}) => {
  return (
    <Link
      className={`uppercase tracking-widest text-xs underline font-medium hover:text-secondary ${containerClassName}`}
      to={href}
    >
      {children}
    </Link>
  );
};

export default MyLink;
