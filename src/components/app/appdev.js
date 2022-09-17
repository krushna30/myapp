import React, { Component } from 'react'
import Appslider from "./appslider";
import Footer from "../home/footer";
import Appright from "./appright";
import Appleft from "./appleft";
import "../ml/ml.css";
import "../web/webslider.css";
export default class appdev extends Component {
  render() {
    return (
      <div >
        <div className='topmargin'>
      <Appslider/></div>
      <div className="intro  leftrightflex">
          <div className="leftbox">
            {" "}
            <Appleft />
          </div>
          <div className="rightbox">
            <Appright />
          </div>
        </div>
      <Footer/>
      </div>
    )
  }
}
