import React, { useEffect } from "react";
import "./mission.css";
import mission from "../../images/aboutUs/mission.png";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger once when it comes into view
    threshold: 0.1,     //  Percentage of the target element which is visible
  });
  return (
    <div className="mission">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" sm="12" data-aos="fade-right">
            <div className="animal">
              <div className="picture">
                <img src={mission} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6" sm="12" data-aos="fade-left">
            <div className="left">
              <div className="text">
                <h3 className="card-title-1">Mission</h3>
                <h1 className="card-title">
                  <span>AWESOME ANIMALS IN</span>
                  <br></br>OUR SAFARI
                </h1>
                <p className="card-text">
                  Silver carp pygmy sunfish blue triggerfish longneck eel dory
                  bullhead shark; spotted dogfish perch silver dollar fangtooth
                  dab Rainbow trout. Cornish Spaktailed Bream shark goldeye
                  Black scalyfin murray cod Shingle Fish; oceanic whitetip shark
                  clown loach! Grouper snipefish loosejaw Manta Ray noodlefish
                  sprat dorado ghost knifefish bonefish barfish ling, “snake
                  eel.
                </p>
                <p className="card-text">
                  Largemouth bass sabertooth fish hatchetfish loach Hammerjaw
                  spikefish! Cutlassfish frogfish sand dab sawtooth eel
                  tenpounder crucian carp tilefish
                </p>
                <div className="number" ref={ref}>
                  <Row className="row ms-0 align-items-center">
                    <Col sm="4" md="4" lg="4" className="align-items-center">
                      <h3>Visiter</h3>
                      <h1>
                        {inView && <CountUp start={0} end={160} duration={1.5} />}
                        {/*counter up */}k
                      </h1>
                    </Col>
                    <Col sm="4" md="4" lg="4" className="align-items-center">
                      <h3>Visiter</h3>
                      <h1>
                        {inView && <CountUp start={0} end={850} duration={1.5} />}
                        {/*counter up */}k
                      </h1>
                    </Col>
                    <Col sm="4" md="4" lg="4" className="align-items-center">
                      <h3>Visiter</h3>
                      <h1>
                        {inView && <CountUp start={0} end={230} duration={1.5} />}
                        {/*counter up */}k
                      </h1>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;
