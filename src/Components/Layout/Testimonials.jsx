// Testimonials.js

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { test1, test2, test3, test4, test5 } from "../../assets/images";

const testimonialsData = [
  {
    id: 1,
    image: test1,
  },
  {
    id: 2,
    image: test2,
  },
  {
    id: 3,
    image: test3,
  },
  {
    id: 4,
    image: test4,
  },
  {
    id: 5,
    image: test5,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonial = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const previousTestimonial = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleSwipe = (delta) => {
    if (delta < 0) {
      nextTestimonial();
    } else {
      previousTestimonial();
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startIndex]);

  const visibleTestimonials = [
    testimonialsData[
      (startIndex - 1 + testimonialsData.length) % testimonialsData.length
    ],
    testimonialsData[startIndex],
    testimonialsData[(startIndex + 1) % testimonialsData.length],
  ];

  const handleDotClick = (index) => {
    setStartIndex(index);
  };

  return (
    <>
      <div className="text-center font-nunito mb-12 px-1 lg:px-0 lg:pt-20 pt-16">
        <span className="text-[36px] lg:text-5xl font-bold headings leading-[56px]">
          Hear From Our Happy Clients
        </span>
      </div>
      <div
        {...handlers}
        className="flex font-nunito mb-5 max-container lg:space-x-10 text-center  px-5  lg:px-[100px] overflow-hidden"
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`w-full  relative  testimonial`}>
            <img
              src={testimonial.image}
              alt=""
              className="w-[370px] h-[375px] object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center mb-20 justify-center space-x-2">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`rounded-full cursor-pointer ${
              index === startIndex
                ? "bg-[#d940ff] w-40 h-3 animateDot"
                : "border border-blue-500 w-3 h-3"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
};
export default Testimonials;
