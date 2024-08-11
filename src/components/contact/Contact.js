import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { BarLoader } from "react-spinners";

import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // check if required fields are empty
    if (!name || !email || !subject || !message) {
      alert("All fields are required!");
      Swal.fire({
        title: "Required",
        text: "All fields are required!",
        icon: "question"
      });
      return;
    }

    setLoading(true); // show loading spinner
    // Your EmailJS service ID, template ID, and public key 
    const serviceID = "service_1z0i5cp00";
    const templateID = "template_k6753ih";
    const publicKey = "aKdSpH011sM0d1DmZ";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "ZooFari",
      subject: subject,
      message: message,
    };

    // Send an email using EmailJS send method
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setLoading(false); // hide loading spinner
        Swal.fire({
          title: "Good job!",
          text: "Email sent successfully!",
          icon: "success"
        });
        console.log("Success!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false); // hide loading spinner
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send email. Please try again later.",
        });
        console.log("Failed...", error);
      });

  }
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-4 mb-5">
          <Col lg="4" data-aos="fade-up"
     data-aos-duration="3000">
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
          <Col lg="4" data-aos="fade-up"
     data-aos-duration="3000">
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
          <Col lg="4" data-aos="fade-up"
     data-aos-duration="3000">
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
          <Col lg="6" data-aos="zoom-in-up">
            <p>
              <span className="text-primary me-2">#</span>
              Contact US
            </p>
            <h1 className="display-5 mb-4">
              Have Any Questions? Please Contact Us!
            </h1>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      id="exampleEmail"
                      name="text"
                      placeholder="*Your name..."
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <FormGroup>
                  <Input
                    id="exampleSubject"
                    name="subject"
                    placeholder="*Subject..."
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    placeholder="*Message..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormGroup>
              </Row>

              <Button className="btn-primary">
                {loading ? <BarLoader color="#fff" /> : "Send Message"}
              </Button>
            </Form>
          </Col>
          <Col lg="6" data-aos="zoom-in-up">
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
