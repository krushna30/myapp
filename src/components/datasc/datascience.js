import React, { Component } from 'react'
import Dsleft from "./dsleft";
import Dsright from "./dsright";
import "../ml/ml.css";
import "../web/webslider.css";
import "./ds.css";
import Footer from "../home/footer";
import Dataslider from "./dataslider";
export default class datascience extends Component {
  render() {
    return (
      <div className="intro">
     <div className="topmargin"> <Dataslider /></div> 

      <div className="intro  leftrightflex">
        <div className="leftbox">
          {" "}
          <Dsleft />
        </div>
        <div className="rightbox">
          <Dsright />
        </div>
      </div>

      <Footer />
    </div>
    )
  }
}
