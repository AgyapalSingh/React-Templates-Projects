import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">Back To Home</Link>
      </div>
    </header>
  );
};

export default Header;
