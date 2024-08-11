import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import slide1 from "../../images/home/bgr-pic3.png";
import slide2 from "../../images/home/bgr-pic2.png";
import slide3 from "../../images/home/bgr-pic.png";

const items = [
  {
    src: slide1,
    text: "Feel closer to nature at Vietnam Safari, discover amazing wildlife, learn how we're protecting their future and share incredible memories of our leaping, roaring, squawking natural world.",
    caption: 'ZooFari',
    altText: 'Slide 1',
    key: 1,
  },
  {
    src: slide2,
    text: "Feel closer to nature at Vietnam Safari, discover amazing wildlife, learn how we're protecting their future and share incredible memories of our leaping, roaring, squawking natural world.",
    caption: 'ZooFari',
    altText: 'Slide 2',
    key: 2,
  },
  {
    src: slide3,
    text: "Feel closer to nature at Vietnam Safari, discover amazing wildlife, learn how we're protecting their future and share incredible memories of our leaping, roaring, squawking natural world.",
    caption: 'ZooFari',
    altText: 'Slide 3',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{ 
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      >
        <img src={item.src} alt={item.altText} className='d-block w-100'/>
        <CarouselCaption
          captionText={item.text}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;