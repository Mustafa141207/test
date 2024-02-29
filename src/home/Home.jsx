import React, { Component } from "react";
import "../home/home.css";

export default class Home extends Component {
  state = [];

  render() {
    return (
      <>
      <section id="home">
      <div className="home d-flex justify-content-center align-items-center p-5 text-white">
          <div className="container text-center">
            <div className="title position-relative mb-4 d-inline-block text-center">
              <h2>About Componnent</h2>
              <div className="layer">
                <div className="left bg-white"></div>
                <i class="fa-solid fa-star"></i>
                <div className="right bg-white"></div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p className="">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization
                </p>
              </div>
            </div>
          </div>
        </div>



      </section>
       
      </>
    );
  }
}
