import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    // get header height and set is as a root css variable
    const $header = document.querySelector("header");
    if ($header) {
      const headerHeight = $header.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
    }
  }, []);

  return (
    <header className="text-black dark:text-beige-regular" data-scroll-section>
      <div className="container">
        <nav>
          <ul>
            <li style={{ "--delay": "0s" }}>About</li>
            <li style={{ "--delay": "0.2s" }}>About</li>
            <li style={{ "--delay": "0.4s" }}>About</li>
            <li style={{ "--delay": "0.6s" }}>About</li>
          </ul>
        </nav>
        <div className="header__actions">
          <a href="/">Github</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
