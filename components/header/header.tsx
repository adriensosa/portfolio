import React from "react";
import { useEffect, useState } from "react";
import crazyToggle from "./crazyToggle";

const Header = (params) => {
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
            <li data-scroll className="fadeIn" style={{ "--delay": "0s" }}>
              <span>{params.crazy ? "Crazy" : "About"}</span>
            </li>
            <li data-scroll className="fadeIn" style={{ "--delay": "0.2s" }}>
              <span>{params.crazy ? "Crazy" : "About"}</span>
            </li>
            <li data-scroll className="fadeIn" style={{ "--delay": "0.4s" }}>
              <span>{params.crazy ? "Crazy" : "About"}</span>
            </li>
            <li data-scroll className="fadeIn" style={{ "--delay": "0.6s" }}>
              <span>{params.crazy ? "Crazy" : "About"}</span>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <button
            data-crazy={params.crazy}
            data-scroll
            className="fadeIn crazy-toggle"
            style={{ "--delay": "1s" }}
            onClick={() => params.setCrazy(!params.crazy)}
          >
            <svg
              width={26}
              height={26}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13ZM10.544 6.06a.963.963 0 0 1 0 1.362L9.182 8.784l1.362 1.361a.963.963 0 0 1-1.362 1.362l-1.361-1.361-1.362 1.361a.963.963 0 0 1-1.362-1.362l1.362-1.361-1.362-1.362A.963.963 0 1 1 6.459 6.06L7.82 7.422 9.182 6.06a.963.963 0 0 1 1.362 0Zm10.194 0a.963.963 0 0 1 0 1.362l-1.362 1.362 1.362 1.361a.963.963 0 1 1-1.362 1.362l-1.361-1.361-1.362 1.361a.963.963 0 1 1-1.362-1.362l1.362-1.361-1.362-1.362a.963.963 0 1 1 1.362-1.362l1.362 1.362 1.361-1.362a.963.963 0 0 1 1.362 0ZM15.73 21.207a7.77 7.77 0 0 0 1.524-.843l-1.5-2.78a.87.87 0 1 0-1.507.873l1.483 2.75Zm-1.72.478L12.74 19.33a2.612 2.612 0 1 1 4.519-2.622l1.332 2.47a9.267 9.267 0 0 0 1.805-2.95l1.627.622c-1.476 3.864-4.953 6.655-9.086 6.655-4.132 0-7.61-2.791-9.085-6.655l1.627-.622c1.26 3.302 4.16 5.535 7.458 5.535.363 0 .72-.027 1.072-.08Z"
              />
            </svg>
          </button>
          {/* <a href="/">Github</a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
