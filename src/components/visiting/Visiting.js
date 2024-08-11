import React, { useEffect } from "react";
import "./visiting.css";
import { Col, Container, ListGroup, ListGroupItem, } from "reactstrap";
import { Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Visiting = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-xxl bg-primary visiting-hours my-5 py-5" data-aos="fade-up"
      data-aos-duration="3000">
      <Container className="py-5">
        <Row className="g-5">
          <Col md="6">
            <h1 className="display-6 text-white mb-5">Visiting Hours</h1>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <span>Holiday</span>
                <span>7:00AM - 6:00PM</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Monday</span>
                <span>9:00AM - 6:00PM</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Tuesday</span>
                <span>9:00AM - 6:00PM</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Wednesday</span>
                <span>9:00AM - 6:00PM</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Thursday</span>
                <span>9:00AM - 6:00PM</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Friday</span>
                <span>9:00AM - 6:00PM</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Saturday</span>
                <span>8:00AM - 6:00PM</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Sunday</span>
                <span>Closed</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col md="6" className="text-light">
            <h1 className="display-6 text-white mb-5">Contact Info</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Office</td>
                  <td>123 Street, New York, USA</td>
                </tr>
                <tr>
                  <td>Zoo</td>
                  <td>123 Street, New York, USA</td>
                </tr>
                <tr>
                  <td>Ticket</td>
                  <td>
                    <p className="mb-2">+012 345 6789</p>
                    <p className="mb-0">ticket@example.com</p>
                  </td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>
                    <p className="mb-2">+012 345 6789</p>
                    <p className="mb-0">support@example.com</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Visiting;
