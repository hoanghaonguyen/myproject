import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./about.css";
import about_img from "../../images/aboutUs/aboutus.pic.3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Container fluid className="py-5">
      <Container>
        <Row className="g-5">
          <Col lg="6" data-aos="fade-right" data-aos-duration="1500" >
            <p>
              <span className="text-success me-2">#</span>Welcome To Zoofari
            </p>
            <h1 className="display-5 mb-4">
              Why You Should Visit <span className="text-success">Zoofari</span>{" "}
              Park!
            </h1>
            <p className="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
              nonumy clita sit at, sed sit sanctus dolor eos.
            </p>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-success me-3"></i>Free Car
              Parking
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-success me-3"></i>Natural
              Environment
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-success me-3"></i>
              Professional Guide & Security
            </h5>
            <h5 className="mb-3">
              <i className="far fa-check-circle text-success me-3"></i>World
              Best Animals
            </h5>
            <Button className="py-3 px-5 mt-3 btn-primary" href="/">
              Read More
            </Button>
          </Col>
          <Col lg="6" data-aos="fade-left" data-aos-duration="1500">
            <div className="img-border">
              <img className="img-fluid" src={about_img} alt="About Zoofari" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
