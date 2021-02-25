import React from "react";
import LogoImg from "images/logo.png";
import { Link } from "react-router-dom";

const Logo: React.FC<{}> = ({}) => {
  return (
    <Link to="/" className="ttnc-logo block">
      <img className="block" src={LogoImg} alt="Logo" />
    </Link>
  );
};

export default Logo;
