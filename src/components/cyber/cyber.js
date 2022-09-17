import React, { Component } from 'react'
import "../ml/ml.css";
import "./cyber.css"
import "../web/webslider.css";
import Cyberleft from './cyberleft'
import Cyberright from './cyberright'
import Cyberslider from './cyberslider'
import Footer from "../home/footer";
export default class cyber extends Component {
  render() {
    return (
        <div className="intro">
        <div className="top">
         <Cyberslider /></div>
 
         <div className="intro  leftrightflex">
           <div className="leftbox">
             <Cyberleft />
           </div>
           <div className="rightbox">
             <Cyberright />
           </div>
         </div>
 
         <Footer />
       </div>
    )
  }
}
