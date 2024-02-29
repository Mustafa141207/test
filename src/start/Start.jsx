import React, { Component } from "react";
import img from "../assets/img/avataaars.svg";
import "../start/start.css";

export default class Start extends Component {
  render() {
    return (
      <>
        <section id="start">
          <div className="container p-5 text-white">
            <div className="title d-flex flex-column justify-content-center align-items-center">
              <img src={img} className=" w-25 my-5" alt="" />
              <div className="title d-inline-block text-center">
                <h3>start framework</h3>
                <div className="layer d-flex justify-content-center align-items-center">
                  <div className="left"></div>
                  <i class="fa-solid fa-star"></i>
                  <div className="right"></div>
                </div>
              </div>
              <p className=" fs-4 fw-light font-uppercase">
                <span>Graphic Artist</span> - <span> Web Designer</span> -
                Illustrator
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
