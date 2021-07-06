import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar";
import moment from "moment";

function ViewApplication(props) {
  // State for API data
  const [data, setData] = React.useState(null);

  const [uploading, setUploading] = React.useState(false);

  // Get candidate data from API
  React.useEffect(() => {
    fetch("/api/view/" + props.match.params.id)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  // Make request to Backend to Update candifate application status
  const handleChangeApplicantStatus = (e, id, status) => {
    setUploading(true);
    fetch("/api/update/" + id, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // SerializeJSON body
      body: JSON.stringify({
        status: status,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(function (result) {
        // Update candidate state data
        setData(result);
        setUploading(false);
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
          <h2 className="text-center">Details</h2>
          <Jumbotron>
            <div className="col-sm-12 text-center">
              <p>{!data ? "Loading..." : ""}</p>
            </div>
            {data && (
              <div className="row">
                <div className="col-sm-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70%"
                    height="70%s"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </div>
                <div className="col-sm-4">
                  <p>
                    <b>Full Names: </b> {data && data.name}
                  </p>
                  <p>
                    <b>Email: </b> {data && data.email}
                  </p>
                  <p>
                    <b>Gender: </b> {data && data.gender}
                  </p>
                  <p>
                    <b>Birth Date:</b>{" "}
                    {data && moment(data.birth_date).format("YYYY-MM-DD")}
                  </p>
                  <p>
                    <b>Status:</b> {data && data.status}
                  </p>
                  <p>
                    <b>Application Date:</b>{" "}
                    {data && moment(data.applied_at).format("YYYY-MM-DD")}
                  </p>
                </div>
                <div className="col-sm-4">
                  <p>
                    <b>About:</b> {data.about}
                  </p>
                  <p>
                    <b>Recent Company:</b> {data.company}
                  </p>
                  <p>
                    <b>Recent Role:</b> {data.role}
                  </p>
                  {data && data.status !== "pending" && (
                    <div className="row">
                      <div className="col-sm-6">
                        <Button
                          variant="warning"
                          onClick={(e) =>
                            handleChangeApplicantStatus(e, data._id, "dropped")
                          }
                        >
                          Drop Candidate
                        </Button>
                      </div>
                      <div className="col-sm-6">
                        <Button
                          variant="primary"
                          onClick={(e) =>
                            handleChangeApplicantStatus(e, data._id, "passed")
                          }
                        >
                          Pass Candidate
                        </Button>
                      </div>
                      <div className="col-sm-12">
                        <p>{uploading == true ? "Uploading..." : ""}</p>
                        <Link to="/applications" className="NavbarLogin" style={{ color: "black" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            />
                          </svg>{" "}
                          Back
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Jumbotron>
        </Container>
      </div>
    </div>
  );
}

export default ViewApplication;
