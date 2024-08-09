import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const Contact = () => {
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-4 mb-5">
          <Col lg="4">
            <div className="h-100 bg-light d-flex align-items-center p-5">
              <div className="btn-lg-square bg-white flex-shrink-0">
                <i class="fa fa-map-marker-alt text-primary"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">
                  <span className="text-primary me-2">#</span>
                  Address
                </p>
                <h5 className="mb-0">
                  135 Hai Bà Trưng, Bến Nghé, Quận 1, Hồ Chí Minh
                </h5>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="h-100 bg-light d-flex align-items-center p-5">
              <div className="btn-lg-square bg-white flex-shrink-0">
                <i class="fa fa-phone-alt text-primary"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">
                  <span className="text-primary me-2">#</span>
                  Call Now
                </p>
                <h5 className="mb-0">+084 396 106 587</h5>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="h-100 bg-light d-flex align-items-center p-5">
              <div className="btn-lg-square bg-white flex-shrink-0">
                <i class="fa fa-envelope-open text-primary"></i>
              </div>
              <div className="ms-4">
                <p className="mb-2">
                  <span className="text-primary me-2">#</span>
                  Mail Now
                </p>
                <h5 className="mb-0">info@example.com</h5>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="g-5">
          <Col lg="6">
            <p>
              <span className="text-primary me-2">#</span>
              Contact US
            </p>
            <h1 className="display-5 mb-4">
              Have Any Questions? Please Contact Us!
            </h1>

            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      id="exampleEmail"
                      name="text"
                      placeholder="*Your name..."
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="*Your email..."
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <FormGroup>
                  <Input
                    id="exampleSubject"
                    name="subject"
                    placeholder="*Subject..."
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    placeholder="*Message..."
                  />
                </FormGroup>
              </Row>

              <Button className="btn-primary">Send Message</Button>
            </Form>
          </Col>
          <Col lg="6">
            <div className="h-100" style={{ minHeight: "400px" }}>
              <iframe
                className="rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.484530402528!2d106.69814631533444!3d10.779783662041125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40f1b0b0f7%3A0x7f1f3822b14e3b6c!2s135%20Hai%20B%C3%A0%20Tr%C6%B0ng%2C%20B%C3%A1nh%20Th%C3%A0nh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
