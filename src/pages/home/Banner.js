import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import React from "react";

import img1 from "../../images/home/bgr-pic.png";
import img2 from "../../images/home/bgr-pic2.png";
import img3 from "../../images/home/bgr-pic3.png";

export default function Banner() {
  return (
    // Banner
    <CCarousel controls transition="crossfade">
      <CCarouselItem>
        <CImage className="d-block w-100" src={img1} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>VIETNAM SAFARI</h1>
          <p>
            Feel closer to nature at Vietnam Safari, discover amazing wildlife,
            learn how we're protecting their future and share incredible
            memories of our leaping, roaring, squawking natural world.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={img2} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>VIETNAM SAFARI</h1>
          <p>
            Feel closer to nature at Vietnam Safari, discover amazing wildlife,
            learn how we're protecting their future and share incredible
            memories of our leaping, roaring, squawking natural world.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={img3} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h1>VIETNAM SAFARI</h1>
          <p>
            Feel closer to nature at Vietnam Safari, discover amazing wildlife,
            learn how we're protecting their future and share incredible
            memories of our leaping, roaring, squawking natural world.
          </p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
}
