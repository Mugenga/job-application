import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";

class Home extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <div className="App">
          <Navbar />
          <br></br>
          <Container className="p-3">
            <Jumbotron>
              <div className="col-sm-12 text-center">
                <h1 className="header">Welcome To Job Application Portal</h1>{" "}
                <br></br> <br></br>
                <h3>Select an option</h3> <br></br> <br></br>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <Link to="/apply" className="NavbarLogin">
                    <Button
                      className="buttonMain"
                      variant="primary"
                      size="lg"
                      style={{ width: "90%" }}
                    >
                      Applicant
                    </Button>
                  </Link>
                </div>
                <div className="col-sm-6">
                  <Link to="/applications" className="NavbarLogin">
                    <Button
                      variant="secondary"
                      size="lg"
                      style={{ width: "90%" }}
                    >
                      HR
                    </Button>
                  </Link>
                </div>
              </div>
            </Jumbotron>
          </Container>
        </div>{" "}
        */
      </div>
    );
  }
}

export default Home;
