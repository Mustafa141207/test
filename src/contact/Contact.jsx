import React, { Component } from "react";
import "../contact/contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="items p-5 my-5 d-flex flex-column justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Username"
                className=" form-control"
              />
              <input type="text" placeholder="Age" className=" form-control" />
              <input
                type="text"
                placeholder="E-mail"
                className=" form-control"
              />
              <input
                type="text"
                placeholder="Password"
                className=" form-control"
              />
              <button id="btn" className=" btn  p-2 align-self-start">
                Send massage
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
