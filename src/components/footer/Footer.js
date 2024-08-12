import React from "react";
import "./footer.css";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import payment from "../../images/payment.png";

const Footer = () => {
  return (
    <Container fluid className="footer py-5">
      <Container className="py-5">
        <Row className="g-5">
          <Col md="6" lg="6" xl="4">
            <div className="footer-item">
              <Link to="/" className="p-0">
                <h4 className="text-white mb-4">ZooFari</h4>
              </Link>
              <p className="mb-2">
                Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                ipsum dolor sit amet, consectetur adipiscing...
              </p>
              <div className="d-flex align-items-center">
                <i class="fas fa-map-marker-alt text-primary me-3"></i>
                <p class="text-white mb-0">123 Street New York.USA</p>
              </div>
              <div className="d-flex align-items-center">
                <i class="fas fa-envelope text-primary me-3"></i>
                <p class="text-white mb-0">safari@example.com</p>
              </div>
              <div className="d-flex align-items-center">
                <i class="fa fa-phone-alt text-primary me-3"></i>
                <p class="text-white mb-0">(+012) 3456 7890</p>
              </div>
            </div>
          </Col>
          <Col md="6" lg="6" xl="2">
            <div className="footer-item">
              <h4 className="text-white mb-4">ZooFari</h4>
              <Link to="/about">
                <i class="fas fa-angle-right me-2"></i> About Us
              </Link>
              <Link to="/discovery">
                <i class="fas fa-angle-right me-2"></i> Discovery
              </Link>
              <Link to="/event">
                <i class="fas fa-angle-right me-2"></i> Event
              </Link>
              <Link to="/service">
                <i class="fas fa-angle-right me-2"></i> Service
              </Link>
              <Link to="/contact">
                <i class="fas fa-angle-right me-2"></i> Contact us
              </Link>
            </div>
          </Col>
          <Col md="6" lg="6" xl="2">
            <div className="footer-item">
              <h4 className="text-white mb-4">Support</h4>
              <Link to="#">
                <i class="fas fa-angle-right me-2"></i> Privacy Policy
              </Link>
              <Link to="#">
                <i class="fas fa-angle-right me-2"></i> Terms & Conditions
              </Link>
              <Link to="#">
                <i class="fas fa-angle-right me-2"></i> Support
              </Link>
              <Link to="#">
                <i class="fas fa-angle-right me-2"></i> FAQ
              </Link>
              <Link to="#">
                <i class="fas fa-angle-right me-2"></i> Help
              </Link>
            </div>
          </Col>
          <Col md="6" lg="6" xl="4">
            <div className="footer-item">
              <h4 className="text-white mb-4">Opening Hours</h4>
              <div className="opening-date mb-3 pb-3">
                <div className="opening-clock flex-shrink-0">
                  <h6 className="text-white mb-0 me-auto">Monday - Friday: </h6>
                  <p className="mb-0">
                    <i class="fas fa-clock text-primary me-2"></i> 09:00 AM -
                    18:00 PM
                  </p>
                </div>
                <div className="opening-clock flex-shrink-0">
                  <h6 className="text-white mb-0 me-auto">Saturday: </h6>
                  <p className="mb-0">
                    <i class="fas fa-clock text-primary me-2"></i> 08:00 AM -
                    18:00 PM
                  </p>
                </div>
                <div className="opening-clock flex-shrink-0">
                  <h6 className="text-white mb-0 me-auto">Holiday: </h6>
                  <p className="mb-0">
                    <i class="fas fa-clock text-primary me-2"></i> 08:00 AM -
                    18:00 PM
                  </p>
                </div>
                <div className="opening-clock flex-shrink-0">
                  <h6 className="text-white mb-0 me-auto">Sunday: </h6>
                  <p className="mb-0">Closed</p>
                </div>
              </div>
              <div>
                <p class="text-white mb-2">Payment Accepted</p>
                <img src={payment} alt="Payment" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
