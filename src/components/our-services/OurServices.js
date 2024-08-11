import React, { useEffect } from "react";
import { Col, Container } from "reactstrap";
import { Row } from "reactstrap";
import icon2 from "../../images/icon/icon-2.png";
import icon3 from "../../images/icon/icon-3.png";
import icon4 from "../../images/icon/icon-4.png";
import icon5 from "../../images/icon/icon-5.png";
import icon6 from "../../images/icon/icon-6.png";
import icon7 from "../../images/icon/icon-7.png";
import icon8 from "../../images/icon/icon-8.png";
import icon9 from "../../images/icon/icon-9.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-5 mb-5">
          <Col lg="6" data-aos="fade-down-right" data-aos-duration="1500">
            <p>
              <span class="text-primary me-2">#</span>Our Services
            </p>
            <h1 class="display-5 mb-0" >
              Special Services For
              <span class="text-primary"> Zoofari</span> Visitors
            </h1>
          </Col>

          <Col lg="6" data-aos="fade-down-left" data-aos-duration="1500">
            <div className="bg-primary h-100 d-flex align-items-center py-4 px-4 px-sm-5" >
              <i className="fa fa-3x fa-mobile-alt text-white"></i>
              <div className="ms-4" >
                <p className="text-white mb-0">Call for more info</p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="gy-5 gx-4">
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon2} alt="Icon" />
            <h5 className="mb-3">Car Parking</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon3} alt="Icon" />
            <h5 className="mb-3">Animal Photos</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon4} alt="Icon" />
            <h5 className="mb-3">Guide Services</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon5} alt="Icon" />
            <h5 className="mb-3">Food & Beverages</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon6} alt="Icon" />
            <h5 className="mb-3">Zoo Shopping</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon7} alt="Icon" />
            <h5 className="mb-3">Free Hi Speed Wi-Fi</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon8} alt="Icon" />
            <h5 className="mb-3">Play Ground</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
          <Col lg="3" md="4" sm="6" data-aos="fade-up"
            data-aos-duration="3000">
            <img className="img-fluid mb-3" src={icon9} alt="Icon" />
            <h5 className="mb-3">Rest House</h5>
            <span>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
