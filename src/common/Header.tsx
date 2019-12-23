import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div>
      <Link to="/">Begoos</Link>
      <Link to="/about">Sobre Nosotros</Link>
    </div>
  );
};

export default Header;
