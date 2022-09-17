import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../web/webslider.css";
import slider1 from "./webdev.jpg";
import slider2 from "./appdev1.png";
import slider3 from "./block11.jpg";
import slider4 from "./cloud.jpg";
import slider5 from "./cyber2.jpg";
import slider6 from "./ds2.jpg";
import slider7 from "./ml5.png";
export default class home extends Component {
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

               
              </Carousel.Item>
              <Carousel.Item  interval={1000} className="img3">
                <img
                  className="sliderimage vaibhav d-block w-100"
                  src={slider3}
                  alt="Third slide"
                />
                
              </Carousel.Item>
              <Carousel.Item  interval={1000} className="img3">
                <img
                  className="sliderimage vaibhav d-block w-100"
                  src={slider4}
                  alt="Third slide"
                />
                
              </Carousel.Item>
              <Carousel.Item  interval={1000} className="img3">
                <img
                  className="sliderimage vaibhav d-block w-100"
                  src={slider5}
                  alt="Third slide"
                />
                
              </Carousel.Item>
              
              <Carousel.Item  interval={1000} className="img3">
                <img
                  className="sliderimage vaibhav d-block w-100"
                  src={slider6}
                  alt="Third slide"
                />
                
              </Carousel.Item>
              
              <Carousel.Item  interval={1000} className="img3">
                <img
                  className="sliderimage vaibhav d-block w-100"
                  src={slider7}
                  alt="Fourth slide"
                />
                <Carousel.Caption  className="cc">
                  MACHINE LEARNING
                </Carousel.Caption>
                
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
