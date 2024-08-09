import React from "react";
import "./ourTeam.css";
import { Container, Row, Col } from "reactstrap";
import team1 from "../../images/team/team-1.jpg";
import team2 from "../../images/team/team-2.jpg";
import team3 from "../../images/team/team-3.jpg";

const OurTeam = () => {
  return (
    <Container fluid className="team pb-5 my-3">
      <Container className="pb-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
          <h4>
            <span className="text-primary">#</span> Meet Our Team
          </h4>
          <h1 className="display-5 mb-4">
            Our Waterland Park Dedicated Team Member
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            reprehenderit nesciunt omnis delectus exercitationem dolorum
            impedit, vel, ipsa cum deserunt quam quos consequuntur quia minima
            ipsum? Dolore alias debitis in. Tenetur adipisci facilis cupiditate
            recusandae aperiam temporibus corporis itaque quis facere.
          </p>
        </div>
        <Row className="g-4 justyfy-content-center">
          <Col md="6" lg="6" xl="4">
            <div className="team-item p-4">
              <div className="team-content">
                <div className="d-flex justify-content-between border-bottom pb-4">
                  <div className="text-start">
                    <h4 className="mb-0">David James</h4>
                    <p className="mb-0">Profession</p>
                  </div>
                  <div>
                    <img
                      src={team1}
                      alt=""
                      className="img-fluid rounded"
                      style={{ width: "100px;", height: "100px;" }}
                    />
                  </div>
                </div>

                <div class="team-icon rounded-pill my-4 p-3">
                  <a
                    class="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    class="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    class="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <p class="text-center mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, quibusdam eveniet itaque provident sequi deserunt.
                </p>
              </div>
            </div>
          </Col>

          <Col md="6" lg="6" xl="4">
            <div className="team-item p-4">
              <div className="team-content">
                <div className="d-flex justify-content-between border-bottom pb-4">
                  <div className="text-start">
                    <h4 className="mb-0">William John</h4>
                    <p className="mb-0">Profession</p>
                  </div>
                  <div>
                    <img
                      src={team2}
                      alt=""
                      className="img-fluid rounded"
                      style={{ width: "100px;", height: "100px;" }}
                    />
                  </div>
                </div>
                <div className="team-icon rounded-pill my-4 p-3">
                  <a
                    href=""
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <p className="text-center mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, quibusdam eveniet itaque provident sequi deserunt.
                </p>
              </div>
            </div>
          </Col>

          <Col md="6" lg="6" xl="4">
            <div className="team-item p-4">
              <div className="team-content">
                <div className="d-flex justify-content-between border-bottom pb-4">
                  <div className="text-start">
                    <h4 className="mb-0">Michael John</h4>
                    <p className="mb-0">Profession</p>
                  </div>
                  <div>
                    <img
                      src={team3}
                      alt=""
                      className="img-fluid rounded"
                      style={{ width: "100px;", height: "100px;" }}
                    />
                  </div>
                </div>
                <div className="team-icon rounded-pill my-4 p-3">
                  <a
                    href=""
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <p className="text-center mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, quibusdam eveniet itaque provident sequi deserunt.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OurTeam;
