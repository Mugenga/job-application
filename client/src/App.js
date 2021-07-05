import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {/* <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "} */}
          Job Application System
        </Navbar.Brand>
      </Navbar>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To Job Application Portal</h1>
          <h3>Select an option</h3>
          <div className="row">
            <div className="col-sm-6">
              <Button variant="primary">Applicant</Button>{" "}
            </div>
            <div className="col-sm-6">
              <Button variant="secondary">HR</Button>{" "}
            </div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
