import React, { Component } from "react";
import Webright from "./webright";
import Webleft from "./webleft";
import "./webdev.css";
import "../ml/ml.css";
import Footer from "../home/footer";
import Webslider from "./webslider";
export default class webdev extends Component {
  render() {
    return (
      <div>
        <div  className="topmargin"> <Webslider /></div>
      
        <div className="intro  leftrightflex">
          <div className="leftbox">
            {" "}
            <Webleft />
          </div>
          <div className="rightbox">
            <Webright />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
