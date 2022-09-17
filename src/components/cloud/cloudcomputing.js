import React, { Component } from "react";
import Cloudleft from "./cloudleft";
import Cloudright from "./cloudright";
import "../ml/ml.css";
import "../web/webslider.css";
import Cloudslider from "./cloudslider";
import Footer from "../home/footer";
export default class cloudcomputing extends Component {
  render() {
    return (
      <div className="intro">
       <div className="top">
        <Cloudslider /></div>

        <div className="intro  leftrightflex">
          <div className="leftbox">
            <Cloudleft />
          </div>
          <div className="rightbox">
            <Cloudright />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
