import React, { useEffect, useState } from "react";
import { Card, CardImg, Col, Container, Row, Button } from "reactstrap";
import gallery from "../../images/gal/gallery-.png";
import gallery1 from "../../images/gal/gallery-1.png";
import gallery2 from "../../images/gal/gallery-2.png";
import gallery3 from "../../images/gal/gallery-3.png";
import gallery4 from "../../images/gal/gallery-4.png";
import gallery5 from "../../images/gal/gallery-5.png";
import gallery6 from "../../images/gal/gallery-6.png";
import gallery7 from "../../images/gal/gallery-7.png";
import gallery8 from "../../images/gal/gallery-8.png";
import gallery9 from "../../images/gal/gallery-9.png";
import gallery10 from "../../images/gal/gallery-10.png";
import gallery11 from "../../images/gal/gallery-11.png";
import gallery12 from "../../images/gal/gallery-12.png";
import gallery13 from "../../images/gal/gallery-13.png";
import gallery14 from "../../images/gal/gallery-14.png";
import gallery15 from "../../images/gal/gallery-15.png";
import gallery16 from "../../images/gal/gallery-16.png";
import gallery17 from "../../images/gal/gallery-17.png";
import gallery18 from "../../images/gal/gallery-18.png";
import gallery19 from "../../images/gal/gallery-19.png";
import gallery20 from "../../images/gal/gallery-20.png";
import gallery21 from "../../images/gal/gallery-21.png";
import gallery22 from "../../images/gal/gallery-22.png";
import gallery23 from "../../images/gal/gallery-23.png";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const images = [
    gallery,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery16,
    gallery17,
    gallery18,
    gallery19,
    gallery20,
    gallery21,
    gallery22,
    gallery23,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([1, 2]);
  const imagesPerPage = 6;

  // Calculate the indices for slicing the images array
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Calculate total pages
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Handler for navigating between pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Update the page range based on current page
  const handlePageChange = (direction) => {
    if (direction === "next" && pageRange[1] < totalPages) {
      setPageRange([pageRange[0] + 1, pageRange[1] + 1]);
    } else if (direction === "previous" && pageRange[0] > 1) {
      setPageRange([pageRange[0] - 1, pageRange[1] - 1]);
    }
  };

  return (
    <Container className="py-5 my-3">
      <Row className="g-4">
        {currentImages.map((image, index) => (
          <Col sm="6" lg="4" key={index} >
            <Card data-aos="flip-left">
              <Zoom>
                <CardImg
                  alt={`Gallery image ${index + 1}`}
                  src={image}
                  top
                  width="100%"
                  style={{
                          objectFit: "cover",
                          cursor: "pointer" }}
                />
              </Zoom>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <Button
            onClick={() => {
              paginate(currentPage - 1);
              handlePageChange("previous");
            }}
            disabled={currentPage === 1}
            className="mx-1 btn-primary"
          >
            {`<`}
          </Button>
          {pageRange.map((page) => (
            <Button
              key={page}
              onClick={() => paginate(page)}
              active={currentPage === page}
              className="mx-1 btn-primary"
            >
              {page}
            </Button>
          ))}
          <Button
            onClick={() => {
              paginate(currentPage + 1);
              handlePageChange("next");
            }}
            disabled={currentPage === totalPages}
            className="mx-1 btn-primary"
          >
            {`>`}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
