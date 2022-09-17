import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import "./home.css";

import Footercontent from "./footercontent";
import HomeSlider from "./homeslider"; // <HomeSlider/>
export default class home extends Component {
  render() {
    return (
      <div className="Appn">
        <div className="top">
          <HomeSlider />
        </div>
        <div>
          <div
            className=" w3-container w3-content w3-center w3-padding-64 w3-container w3-center w3-animate-bottom"
            style={{ maxWidth: 800 }}
            id="band"
          >
            <p className="w3-center header">Road map</p>
            <p className="w3-opacity">
              <i>We are here to be a partner in your journey</i>
            </p>
            <p className="new">
              The simplest form of technology is the development and use of
              basic tools. In this technical era a lot of students want to learn
              the new technologies to stay in the competition.They are very
              enthusiastic and passionate about their careers.Due to lack of
              some basic knowledge and lack of information about the good study
              resources they waste their lot of time in searching about the
              specific technical domains information along with its study
              resources. For the solution of this type of problem we are here to
              help you in your technical journey with our suggested study
              resources which are gathered together and at the same time you can
              also suggest some of the best study resources that you have found
              on the internet. Our blog and resource page is developed only for
              that purpose where you can upload your blogs for differnet domains
              information along with the links of study resources.
            </p>
          </div>
          <Footercontent />

          <Footer />
        </div>
        <div></div>
      </div>
    );
  }
}
