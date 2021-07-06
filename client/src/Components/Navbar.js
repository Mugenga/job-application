import React, { Component } from "react";
import { Navbar as Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Nav bg="dark" variant="dark">
        <Nav.Brand href="#home">
          <Link to="/" className="NavbarLogin" style={{ color: "white" }}>
            Job Application System
          </Link>
        </Nav.Brand>
      </Nav>
    );
  }
}

export default Navbar;
