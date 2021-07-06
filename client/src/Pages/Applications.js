import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar";

function Applications(props) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/applications")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const handleViewApplicant = (e, id) => {
    e.preventDefault();
    props.history.push({
      pathname: "/view/" + id,
    });
  };

  return (
    <div id="main-wrapper">
      <div className="App">
        <Navbar />
        <br></br>
        <Container className="p-3">
          <h2 className="text-center">Recent Applications</h2>
          <br></br>
          <div className="row">
            <div className="col-sm-12 text-center">
              <br></br>
              <p>{!data ? "Loading..." : ""}</p>
            </div>

            {data &&
              data.map((application, index) => (
                <div className="col-sm-4 text-center" key={index}>
                  <Card style={{ width: "95%" }}>
                    <Card.Body>
                      <Card.Title>{application.name}</Card.Title>
                      <Card.Text>{application.about}</Card.Text>

                      <div className="col-sm-12 text-center">
                        <Button
                          variant="dark"
                          onClick={(e) =>
                            handleViewApplicant(e, application._id)
                          }
                        >
                          View Details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                  <b></b>
                  <br></br>
                </div>
              ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Applications;
