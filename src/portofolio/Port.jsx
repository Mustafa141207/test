import "../portofolio/Port.css";
import img1 from "../assets/img/poert1.png";
import img2 from "../assets/img/port2.png";
import img3 from "../assets/img/port3.png";


import React from "react";

export default function Port() {
  return (
    <section id="Port">
      <div className="container py-5 text-center">
        <div className="title d-inline-block">
          <h3 className="">Portofolio Component</h3>
          <div className="layer">
            <div className="left  bg-black w-50"></div>
            <i class="fa-solid fa-star"></i>
            <div className="right w-50 bg-black"></div>
          </div>
        </div>
        <div className="row g-4 my-4">
          <div className="col-md-4">
            <div className="subx position-relative  border rounded-4 border-2 ">
              <img src={img1} className=" w-100" alt="" />
              <div className="over" id="lay">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subx  border rounded-4 border-2">
              <img src={img2} className=" w-100" alt="" />
              <div className="over" id="lay">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subx  border rounded-4 border-2">
              <img src={img3} className=" w-100" alt="" />
              <div className="over" id="lay">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subx  border rounded-4 border-2">
              <img src={img1} className=" w-100" alt="" />
              <div className="over" id="lay">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subx  border rounded-4 border-2">
              <img src={img2} className=" w-100" alt="" />
              <div className="over" id="lay">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="subx  border rounded-4 border-2">
              <img src={img3} className=" w-100" alt="" />
              <div className="over" id="lay">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
