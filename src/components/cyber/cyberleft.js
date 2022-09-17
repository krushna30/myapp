import React, { Component } from "react";
import "./cyberleft.css";
export default class cyberleft extends Component {
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
            <h5 className="sub">1.Introduction to Cyber Security</h5>{" "}
          </a>
          <a href="#2">
            {" "}
            <h5 className="sub">2. What is cybersecurity all about? </h5>
          </a>
          <a href="#3">
            {" "}
            <h5 className="sub">3. Importance of Cyber Security </h5>
          </a>
          <a href="#4">
            {" "}
            <h5 className="sub">4. Levels of Qualifications </h5>
          </a>
          <a href="#skills">
            {" "}
            <h5 className="sub">5. Skills for Cyber Security</h5>
          </a>
          <a href="#choice">
            {" "}
            <h5 className="sub">6. Types of Cyber Security</h5>
          </a>
          <a href="#resources">
            {" "}
            <h5 className="sub">7. Resources for Cyber Security</h5>
          </a>
        </div>
      </div>
    );
  }
}
