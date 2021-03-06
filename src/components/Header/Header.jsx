import React from "react";
require("bootstrap");
const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light">
        <a className="navbar-brand" href="/">
          PAOLO DOT COM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link navbarItem" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/118jg-eSMw6ZOcvXIVRIfSpnW_WLi4k6O/view?usp=sharing"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
