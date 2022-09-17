import React, { Component } from "react";
import Mlslider from "./mlslider";
import "./ml.css";
import Left from "./left";
import Right from "./right";
import Footer from "../home/footer";
export default class machinelearning extends Component {
  render() {
    return (
      <div className="intro">
       <div className="topmargin"><Mlslider /></div> 

        <div className="intro  leftrightflex">
          <div className="leftbox">
            {" "}
            <Left />
          </div>
          <div className="rightbox">
            <Right />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
