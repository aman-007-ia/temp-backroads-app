import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ presentClass, itemClass }) => {
  return (
    <ul className={presentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
