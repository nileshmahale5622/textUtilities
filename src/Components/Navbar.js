import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode}
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler btn-primary"
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li> */}
          </ul>
          {/* <div className="form-check form-switch"> */}
            {/* <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault1"
              onClick={props.redToggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault1"
            >
              Red Color Theme
            </label> */}
          {/* </div> */}
          {/* <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault2"
              onClick={props.greenToggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault2"
            >
              Green Color Theme
            </label>
          </div> */}
          <form className="d-flex" role="search mx-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault3"
                onClick={props.toglehandler}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault3"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Dark Mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
}
Navbar.defaultProps={
    title:"Hello"
}
