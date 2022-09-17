import React, { Component } from "react";


console.log("Welcome");
export default class appleft extends Component {
  render() {
    return (
      <div className="intro sub subpara">
        <div className="left ">
          <h2 className="head">Table of Contents</h2>
          <div className="para">
            {" "}
            <hr className="one" />
          </div>

          <a href="#1.">
            {" "}
            <h5 className="sub">1.Introduction to App Developement</h5>{" "}
          </a>
          <a href="#importance">
            {" "}
            <h5 className="sub">
              2. The Importance Of Cross-Platform Technologies{" "}
            </h5>
          </a>
          <a href="#total">
            {" "}
            <h5 className="sub">3. Front End vs. Back End Development </h5>
          </a>
          <a href="#ways">
            {" "}
            <h5 className="sub">4. Types of App Developement</h5>
          </a>
          <a href="#ios">
            {" "}
            <h5 className="subsub">4.1. Resources for iOS App Developement</h5>
          </a>
          <a href="#android">
            {" "}
            <h5 className="subsub">
              4.2. Resources for Android App Developement
            </h5>
          </a>
          <a href="#nativead">
            {" "}
            <h5 className="subsub">4.3. Advantages of Building Native Apps:</h5>
          </a>
          <a href="#nativedisad">
            {" "}
            <h5 className="subsub">
              4.4. Disadvantages of Building Native Apps:
            </h5>
          </a>
          <a href="#hybrid">
            {" "}
            <h5 className="subsub">4.5 Hybrid App Developement </h5>
          </a>
          <a href="#react">
            {" "}
            <h5 className="sub subsub">4.5.1 Resources for React Native</h5>
          </a>
          <a href="#flutter">
            {" "}
            <h5 className="sub subsub">
              {" "}
              4.5.2 Resources for Flutter Developement
            </h5>
          </a>
          <a href="#hybridad">
            <h5 className="subsub">4.6 Advantages of Hybrid Apps</h5>
          </a>
          <a href="#hybriddisad">
            {" "}
            <h5 className="subsub">4.7 Disdvantages of Hybrid Apps</h5>
          </a>
          <a href="#prog">
            {" "}
            <h5 className="sub">5. Progressive Web Applications</h5>
          </a>
        </div>
      </div>
    );
  }
}
