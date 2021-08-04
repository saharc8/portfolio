import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/sahar-cohen-447995114"
        target="_blank"
        rel="noreferrer"
      >
        <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="linkedin" />
      </a>
      <a href="https://github.com/saharc8" target="_blank" rel="noreferrer">
        <img src={`${process.env.PUBLIC_URL}/github.png`} alt="github" />
      </a>
    </footer>
  );
};

export default Footer;
