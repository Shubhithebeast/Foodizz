import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></Link>
            <span className="text-muted">© 2023 Foodizz, Inc</span>
          </div>
        </footer>
      </div> */}

      <Card className="text-center " >
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Footer className="bg-dark">
            <Card.Link href="/"></Card.Link>
            <Card.Text className=" text-white"> © 2023 Foodizz, Inc </Card.Text>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
};

export default Footer;
