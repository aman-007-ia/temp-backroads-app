import React from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks presentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLinks.map((social) => {
            return <SocialLink key={social.id} {...social} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
