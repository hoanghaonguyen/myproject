import React, { useEffect } from "react";
import "./testimonials.css";
import Slider from "react-slick";
import { Container } from "reactstrap";
import testimonial1 from "../../images/home/feedback.1.png";
import testimonial2 from "../../images/home/feedback.2.png";
import testimonial3 from "../../images/home/feedback.3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Container fluid className="testimonial py-5">
      <Container>
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: "800px;" }}
          data-aos="fade-up"
     data-aos-duration="3000"
        >
          <h4 className="text-primary">Testimonials</h4>
          <h1 className="display-5 text-white mb-4">Our Clients Reviews</h1>
          <p className="text-white mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptate cumque modi veniam dolore atque nam consequatur, quod
            repellat facere recusandae? Inventore nesciunt aliquid incidunt
            fugiat ab fuga voluptas quod!
          </p>
        </div>

        <Slider {...settings}>
          <div className="testimonial-item p-4" data-aos="fade-up"
     data-aos-duration="3000">
            <p className="text-white fs-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
              consequatur, nam iste eius velit perferendis voluptatem at atque
              neque soluta reiciendis doloremque.
            </p>
            <div className="testimonial-inner">
              <div className="testimonial-img">
                <img
                  src={testimonial1}
                  alt="Testimonial"
                  className="img-fluid"
                />
                <div className="testimonial-quote btn-lg-square rounded-circle">
                  <i className="fa fa-quote-right fa-2x"></i>
                </div>
              </div>
              <div className="ms-4">
                <h4>Anna Belt</h4>
                <p className="text-start text-white">Safari visiter</p>
                <div className="d-flex text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item p-4">
            <p className="text-white fs-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
              consequatur, nam iste eius velit perferendis voluptatem at atque
              neque soluta reiciendis doloremque.
            </p>
            <div className="testimonial-inner">
              <div className="testimonial-img">
                <img
                  src={testimonial2}
                  alt="Testimonial"
                  className="img-fluid"
                />
                <div className="testimonial-quote btn-lg-square rounded-circle">
                  <i className="fa fa-quote-right fa-2x"></i>
                </div>
              </div>
              <div className="ms-4">
                <h4>Ariana</h4>
                <p className="text-start text-white fst-italic">
                  Safari visiter
                </p>
                <div className="d-flex text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item p-4">
            <p className="text-white fs-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
              consequatur, nam iste eius velit perferendis voluptatem at atque
              neque soluta reiciendis doloremque.
            </p>
            <div className="testimonial-inner">
              <div className="testimonial-img">
                <img
                  src={testimonial3}
                  alt="Testimonial"
                  className="img-fluid"
                />
                <div className="testimonial-quote btn-lg-square rounded-circle">
                  <i className="fa fa-quote-right fa-2x"></i>
                </div>
              </div>
              <div className="ms-4">
                <h4>Robert Jame</h4>
                <p className="text-start text-white">Safari keeper</p>
                <div className="d-flex text-warning">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </Container>
  );
};

export default Testimonials;
