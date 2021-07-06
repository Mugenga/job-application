import React from "react";
import Container from "react-bootstrap/Container";
import { Form, Jumbotron, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar";

function ViewApplication(props) {
  let data = {
    name: null,
    email: null,
    gender: null,
    birth_date: null,
    about: null,
    company: null,
    role: null,
  };

  const [uploading, setUploading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    fetch("/api/applications", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // SerializeJSON body
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then(function (result) {
        // Update candidate state data
        alert("Application Submitted");
        setUploading(false);
        props.history.push({
          pathname: '/',
        });
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  };

  return (
    <div id="main-wrapper">
      <div className="App">
        <Navbar />
        <br></br>
        <Container className="p-3">
          <h2 className="text-center">Application Form</h2>
          <Jumbotron>
            <div className="row">
              <div className="col-sm-12">
                <Form>
                  <h3>Personal Information</h3>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Names</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Names"
                      onChange={(event) => (data.name = event.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => (data.email = event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(event) => (data.gender = event.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      onChange={(event) =>
                        (data.birth_date = event.target.value)
                      }
                    />
                  </Form.Group>
                  <h3>Experience</h3>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Small description about you</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(event) => (data.about = event.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Employment</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Previous/current Company"
                      onChange={(event) => (data.company = event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Previous/current Role"
                      onChange={(event) => (data.role = event.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit{uploading == true ? "ting..." : ""}
                  </Button>
                </Form>
              </div>
            </div>
          </Jumbotron>
        </Container>
      </div>
    </div>
  );
}

export default ViewApplication;
