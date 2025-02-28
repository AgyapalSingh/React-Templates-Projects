import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="Header">
        <h1>
          Developed By -
          <a
            href="https://www.linkedin.com/in/agyapal-singh-020983241/"
            target="_blank"
          >
            Agyapal Singh
          </a>
        </h1>
      </div>
      <div className="home-link">
        <Link to="/">
          <MdHome />
        </Link>
      </div>
    </header>
  );
};

export default Header;
