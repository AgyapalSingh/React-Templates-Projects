import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <section className="ag-footer-container">
        <div className="ag-footer-social-links">
          <a
            href="https://www.linkedin.com/in/agyapal-singh-020983241/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/AgyapalSingh" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/agyapal.singh.58726/"
            target="_blank"
          >
            <BiLogoFacebook />
          </a>
          <a href="https://www.instagram.com/agya_aujla/" target="_blank">
            <BiLogoInstagram />
          </a>
        </div>
        <div className="ag-footer-copyright">
          <p>© AGYAPAL SINGH. All rights reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
