import React, { Component } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Start from "../start/Start";
import Contact from "../contact/Contact";

export default class Master extends Component {
  render() {
    return (
      <>
        <Nav />

        <Outlet />

        <Footer />
      </>
    );
  }
}
