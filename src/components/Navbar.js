import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// React functional component
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <div className="navbar-brand" >
            {props.title}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About us
                </Link>
              </li>
              
            </ul>
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="modeCheckBox"
                onClick = {props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode ==='light'?'Dark':'Light'} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title",
};
