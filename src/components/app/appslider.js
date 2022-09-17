import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../web/webslider.css";
import slider1 from "./appdev1.png";
import slider2 from "./appdev.jpg";
import slider3 from "./appdev3.jpg";
import slider4 from "./appdev4.png";
export default class appslider extends Component {
  render() {
    return (
      <div className="Block">
        <div>
          <div className="home__container">
            <Carousel>
              <Carousel.Item interval={1000} className="img">
                <img
                  className=" sliderimage vaibhav d-block w-100"
                  src={slider1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="img">
                <img
                  className="sliderimage vaibhav d-block w-100"
                  src={slider2}
                  alt="Second slide"
                  width={456}
                />

                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item  interval={1000} className="img3">
                <img
                  className="sliderimage vaibhav d-block w-100"
                  src={slider3}
                  alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000} className="img">
                <img
                  className=" sliderimage vaibhav d-block w-100"
                  src={slider4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
              
              
          </div>
        </div>
      </div>
    );
  }
}
