import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./footercontent.css";
import Web from "./webdev2.jpg";
import App from "./app.jpg";
import Block from "./block.jpg";
import Cloud from "./cloud.jpg";
import Cyber from "./cyber2.jpg";
import Datas from "./ds2.jpg";
import Ml from "./ml2.png";
export default function Footercontent() {
  let navigate = useNavigate();
  // const home = () => {
  //   let path = "/home";
  //   navigate(path);
  // };
  const send = () => {
    let text = document.getElementById("msg").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let msg = ",%0A" + text + "%0A" + email;

    window.open(
      "mailto:kalporwal54@gmail.com?subject=feedback&body=" + name + msg
    );
  };
  const webdev = () => {
    let path = "/webdev";
    navigate(path);
  };
  const cyber = () => {
    let path = "/cyber";
    navigate(path);
  };
  const appdev = () => {
    let path = "/appdev";
    navigate(path);
  };
  const cloud = () => {
    let path = "/cloudcomputing";
    navigate(path);
  };
  const block = () => {
    let path = "/blockchain";
    navigate(path);
  };
  const ds = () => {
    let path = "/datascience";
    navigate(path);
  };
  const ml = () => {
    let path = "/machinelearning";
    navigate(path);
  };

  return (
    <div>
      <div className="w3-black" id="tour">
        <div
          className="w3-container w3-content w3-padding-64"
          style={{ maxWidth: 800 }}
        >
          <h2 className="w3-wide w3-center">BE TECHNO-HOLIC</h2>
          <p className="w3-opacity w3-center">
            <i>Remember your goals and step up...!</i>
          </p>
          <br />
          <ul className="w3-ul w3-border w3-white w3-text-grey"></ul>
          <div
            className=" w3-row-padding w3-padding-32"
            style={{ margin: "0 -16px" }}
          >
            <div className="image w3-third w3-margin-bottom">
              <img
                src={Web}
                alt="web"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="belowcard w3-container w3-white">
                <Container>
                  <Button
                    className="button w3-button w3-black w3-margin-bottom"
                    onClick={webdev}
                  >
                    Explore Webdev
                  </Button>
                </Container>
              </div>
            </div>

            <div className="app w3-third w3-margin-bottom">
              <img
                src={App}
                alt="New York"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="belowcard w3-container w3-white">
                <Container>
                  <Button
                    className="button w3-button w3-black w3-margin-bottom"
                    onClick={appdev}
                  >
                    Explore Appdev
                  </Button>
                </Container>
              </div>
            </div>

            <div className="image w3-third w3-margin-bottom">
              <img
                src={Block}
                alt="Paris"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="belowcard w3-container w3-white">
                <Container>
                  <Button
                    className="button w3-button w3-black w3-margin-bottom"
                    onClick={block}
                  >
                    Explore BlockChain
                  </Button>
                </Container>
              </div>
            </div>

            <div className="cc w3-third w3-margin-bottom">
              <img
                src={Cloud}
                alt="New York"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="belowcard w3-container w3-white">
                <Container>
                  <Button
                    className="button w3-button w3-black w3-margin-bottom"
                    onClick={cloud}
                  >
                    Cloud Computing
                  </Button>
                </Container>
              </div>
            </div>

            <div className=" ds w3-third w3-margin-bottom">
              <img
                src={Datas}
                alt="New York"
                style={{ width: "100%" }}
                className=" w3-hover-opacity"
              />
              <div className="belowcard w3-container w3-white">
                <Container>
                  <Button
                    className="button w3-button w3-black w3-margin-bottom"
                    onClick={ds}
                  >
                    Explore DataScience
                  </Button>
                </Container>
              </div>
            </div>

            <div className=" cyber w3-third w3-margin-bottom">
              <img
                src={Cyber}
                alt="New York"
                style={{ width: "100%" }}
                className=" w3-hover-opacity"
              />
              <div className="belowcard w3-container w3-white">
                <Container>
                  <Button
                    className="button w3-button w3-black w3-margin-bottom"
                    onClick={cyber}
                  >
                    Cyber Security
                  </Button>
                </Container>
              </div>
            </div>

            <div className="ml w3-third w3-margin-bottom">
              <img
                src={Ml}
                alt="New York"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="belowcard w3-container w3-white">
                <Container>
                  <Button
                    className="button w3-button w3-black w3-margin-bottom"
                    onClick={ml}
                  >
                    Machine Learning{" "}
                  </Button>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w3-container w3-content w3-padding-64"
        style={{ maxWidth: 800 }}
        id="contact"
      >
        <h2 className="w3-wide w3-center">CONTACT</h2>
        <p className="w3-opacity w3-center">
          <i>Want to contribute..?....!!! Drop a note!</i>
        </p>
        <div className="w3-row w3-padding-32">
          <div className="w3-col m6 w3-large w3-margin-bottom">
            <i className="fa fa-map-marker" style={{ width: 30 }} /> Pune,
            Maharashtra
            <br />
            <i className="fa fa-phone" style={{ width: 30 }} /> Phone:+91
            9856451223
            <br />
            <i className="fa fa-envelope" style={{ width: 30 }}>
              {" "}
            </i>{" "}
            Email: kalporwal54@gmail.com
            <br />
          </div>
          <div className="w3-col m6">
            <form action="/action_page.php" target="_blank">
              <div
                className="w3-row-padding"
                style={{ margin: "0 -16px 8px -16px" }}
              >
                <div className="w3-half">
                  <input
                    id="name"
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  />
                </div>
                <div className="w3-half">
                  <input
                    id="mail"
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                  />
                </div>
              </div>
              <input
                id="msg"
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
              <button
                className="w3-button w3-black w3-section w3-right"
                type="submit"
                onClick={send}
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
