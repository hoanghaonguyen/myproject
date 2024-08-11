import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import animal_md_1 from "../../images/animals/animal-md-1.jpg";
import animal_md_2 from "../../images/animals/animal-md-2.jpg";
import animal_md_3 from "../../images/animals/animal-md-3.jpg";
import animal_lg_1 from "../../images/animals/animal-lg-1.jpg";
import animal_lg_2 from "../../images/animals/animal-lg-2.jpg";
import animal_lg_3 from "../../images/animals/animal-lg-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const OurAnimals = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-5 mb-5 align-items-end">
          <Col lg="6" data-aos="fade-up">
            <p>
              <span class="text-primary me-2">#</span>Our Animals
            </p>
            <h1 class="display-5 mb-0" >
              Let`s See Our <span class="text-primary">Zoofari</span> Awsome
              Animals
            </h1>
          </Col>
          <Col lg="6" className="text-lg-end" data-aos="fade-up">
            <a className="btn btn-primary py-3 px-5" href="#">
              Explore More Animals
            </a>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg="4" md="6">
            <Row className="g-4">
              <div class="col-12" data-aos="fade-up"
                data-aos-duration="3000">
                <a
                  class="animal-item"
                  href={animal_md_1}
                  data-lightbox="animal"
                >
                  <div class="position-relative">
                    <img class="img-fluid" src={animal_md_1} alt="" />
                    <div class="animal-text p-4">
                      <p class="text-white small text-uppercase mb-0">Animal</p>
                      <h3 class="text-primary mb-0">Eland Antelope</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-12" data-aos="fade-up"
                data-aos-duration="3000">
                <a
                  class="animal-item"
                  href={animal_lg_1}
                  data-lightbox="animal"
                >
                  <div class="position-relative">
                    <img class="img-fluid" src={animal_lg_1} alt="" />
                    <div class="animal-text p-4">
                      <p class="text-white small text-uppercase mb-0">Animal</p>
                      <h3 class="text-primary mb-0"> Lemuroidea</h3>
                    </div>
                  </div>
                </a>
              </div>
            </Row>
          </Col>
          <Col lg="4" md="6">
            <Row className="g-4">
              <div class="col-12" data-aos="fade-up"
                data-aos-duration="3000">
                <a
                  class="animal-item"
                  href={animal_lg_2}
                  data-lightbox="animal"
                >
                  <div class="position-relative">
                    <img class="img-fluid" src={animal_lg_2} alt="" />
                    <div class="animal-text p-4">
                      <p class="text-white small text-uppercase mb-0">Animal</p>
                      <h3 class="text-primary mb-0">Cat</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-12" data-aos="fade-up"
                data-aos-duration="3000">
                <a
                  class="animal-item"
                  href={animal_md_2}
                  data-lightbox="animal"
                >
                  <div class="position-relative">
                    <img class="img-fluid" src={animal_md_2} alt="" />
                    <div class="animal-text p-4">
                      <p class="text-white small text-uppercase mb-0">Animal</p>
                      <h3 class="text-primary mb-0">Zebra</h3>
                    </div>
                  </div>
                </a>
              </div>
            </Row>
          </Col>
          <Col lg="4" md="6">
            <Row className="g-4">
              <div class="col-12" data-aos="fade-up"
                data-aos-duration="3000">
                <a
                  class="animal-item"
                  href={animal_md_3}
                  data-lightbox="animal"
                >
                  <div class="position-relative">
                    <img class="img-fluid" src={animal_md_3} alt="" />
                    <div class="animal-text p-4">
                      <p class="text-white small text-uppercase mb-0">Animal</p>
                      <h3 class="text-primary mb-0">Elephant</h3>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-12" data-aos="fade-up"
                data-aos-duration="3000">
                <a
                  class="animal-item"
                  href={animal_lg_3}
                  data-lightbox="animal"
                >
                  <div class="position-relative">
                    <img class="img-fluid" src={animal_lg_3} alt="" />
                    <div class="animal-text p-4">
                      <p class="text-white small text-uppercase mb-0">Animal</p>
                      <h3 class="text-primary mb-0">Giraffa</h3>
                    </div>
                  </div>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurAnimals;
