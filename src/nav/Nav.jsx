import React, { Component } from "react";
import'../nav/Nav.css'
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm   navbar-dark">
          <div className="container">
            <Link className="navbar-brand fw-bolder fs-2" to="start">
              FrameWork
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="  nav-link" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="  nav-link" to="Portofolio">
                    Portofolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="  nav-link" to="contact">
                    contact
                  </Link>
                </li>
                {/* <li className="nav-item">
                    <Link className='  nav-link' to='blog'>blog</Link>
                    </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
