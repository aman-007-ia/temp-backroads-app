import React from "react";

const SocialLink = ({ id, href, icon }) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
