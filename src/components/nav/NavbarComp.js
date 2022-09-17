import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "../home/home";
import Appdev from "../app/appdev";
import Webdev from "../web/webdev";
import Blockchain from "../block/blockchain";
import Cloudcomputing from "../cloud/cloudcomputing";
import Cyber from "../cyber/cyber";
import Resources from "../resources/resources";
import Datascience from "../datasc/datascience";
import Machinelearning from "../ml/machinelearning";

import styles from "./home1.module.css";
import Login from "../resources/login";
import Blog from "../resources/blog";
import { signOut } from "firebase/auth";
import { auth } from "../resources/firebase";
export default function NavbarComp() {
  // const [isAuth, setIsAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <div className={styles.Appbar}>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand>TECH-LANCES</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/webdev"}>
                  Web Developement
                </Nav.Link>
                <Nav.Link as={Link} to={"/appdev"}>
                  App Developement
                </Nav.Link>
                <Nav.Link as={Link} to={"/blockchain"}>
                  Blockchain Technology
                </Nav.Link>
                <Nav.Link as={Link} to={"/cloudcomputing"}>
                  Cloud Computing
                </Nav.Link>
                <Nav.Link as={Link} to={"/cyber"}>
                  Cyber Security
                </Nav.Link>
                <NavDropdown
                  title="Artificial Intelligence"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to={"/datascience"}>
                    Data Science
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/machinelearning"}>
                    Machine Learning
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {!isAuth ? (
                  <Nav.Link eventKey={2} as={Link} to={"/login"}>
                    Login
                  </Nav.Link>
                ) : (
                  <>
                    <Nav.Link as={Link} to={"/resources"}>
                      Blogs n Resources
                    </Nav.Link>
                    <button onClick={signUserOut}>Log Out</button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appdev" element={<Appdev />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/cloudcomputing" element={<Cloudcomputing />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="/datascience" element={<Datascience />} />
          <Route path="/machinelearning" element={<Machinelearning />} />
          {/* <Route path="/resources" element={<Resources  />} /> */}
          <Route path="/resources" element={<Resources isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/blog" element={<Blog isAuth={isAuth} />} />
        </Routes>
      </div>
    </Router>
  );
}
