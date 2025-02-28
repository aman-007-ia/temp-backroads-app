import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks presentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((social) => {
          return <SocialLink key={social.id} {...social} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
