import React, { Component } from "react";
import "../footer/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="  text-center position-relative">
          <div className="container">
            <div className="item p-5">
              <div className="row">
                <div className="col-md-4">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                    <h3>AROUND THE WEB</h3>
                    <div className="icons d-flex  justify-content-center align-items-center">
                        <div className="icon"><i class="fa-brands fa-facebook"></i></div>
                        <div className="icon"><i class="fa-brands fa-instagram"></i></div>
                        <div className="icon"><i class="fa-brands fa-twitter"></i></div>
                        <div className="icon"><i class="fa-brands fa-linkedin"></i></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>



              </div>
          
            </div>
          </div>
          <div className="end bg-dark p-4">
            <p>Copyright © Your Website 2021</p>
          </div>
        </footer>
      
     
      </>
    );
  }
}
