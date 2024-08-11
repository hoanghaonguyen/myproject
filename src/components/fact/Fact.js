import React, { useEffect } from "react";
import "./fact.css";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import AOS from "aos";
import "aos/dist/aos.css";

const Fact = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger once when it comes into view
    threshold: 0.1,     //  Percentage of the target element which is visible
  });

  return (
    <div className="container-xxl bg-primary facts my-5 py-5" data-aos="fade-up" data-aos-duration="1500" ref={ref}>
      <Container className="py-5">
        <Row className="g-4 text-center">
          <Col md="6" lg="3">
            <i className="fa fa-paw fa-3x text-primary mb-3"></i>
            <h1 className="text-white mb-2">
              {inView && <CountUp start={0} end={12345} duration={3} />}
            </h1>
            <p className="text-white mb-0">Total Animal</p>
          </Col>
          <Col md="6" lg="3">
            <i className="fa fa-user fa-3x text-primary mb-3"></i>
            <h1 className="text-white mb-2">
              {inView && <CountUp start={0} end={12345} duration={3} />}
            </h1>
            <p className="text-white mb-0">Daily Visitors</p>
          </Col>
          <Col md="6" lg="3">
            <i className="fa fa-certificate fa-3x text-primary mb-3"></i>
            <h1 className="text-white mb-2">
              {inView && <CountUp start={0} end={12345} duration={3} />}
            </h1>
            <p className="text-white mb-0">Total Membership</p>
          </Col>
          <Col md="6" lg="3">
            <i className="fa fa-shield-alt fa-3x text-primary mb-3"></i>
            <h1 className="text-white mb-2">
              {inView && <CountUp start={0} end={12345} duration={3} />}
            </h1>
            <p className="text-white mb-0">Save Wild Life</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fact;
