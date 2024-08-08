import React from "react";
import "./mission.css";
import mission from "../../images/aboutUs/mission.png";
import { Col, Container, Row } from "reactstrap";

const Mission = () => {
  return (
    <div className="mission">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" sm="12">
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
                <div className="number">
                  <Row className="row ms-0 align-items-center">
                    <Col sm="4" md="4" lg="4" className="align-items-center">
                      <h3>Visiter</h3>
                      <h1>
                        <span className="num">160</span>
                        {/*counter up */}k
                      </h1>
                    </Col>
                    <Col sm="4" md="4" lg="4" className="align-items-center">
                      <h3>Visiter</h3>
                      <h1>
                        <span className="num">850</span>
                        {/*counter up */}k
                      </h1>
                    </Col>
                    <Col sm="4" md="4" lg="4" className="align-items-center">
                      <h3>Visiter</h3>
                      <h1>
                        <span className="num">230</span>
                        {/*counter up */}k
                      </h1>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <div className="animal">
              <div className="picture">
                <img src={mission} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;
