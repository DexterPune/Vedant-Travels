import React from 'react';
import Slider from "react-slick";

const TestimonialKeyword = ({ testimonials }) => {
  // Slick slider settings
  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Infinite looping of slides
    speed: 500,         // Transition speed (ms)
    slidesToShow: 2,    // Number of slides to show in large screens
    slidesToScroll: 1,  // How many slides to scroll at a time
    autoplay: true,     // Enable autoplay
    autoplaySpeed: 5000, // Speed for auto slide change (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // Show 2 slides on medium-sized screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <div className="testimonial-area ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive"></i> Testimonials
              </span>
              <h2 className="site-title text-white">
                What Our Client <span>Say's</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
       <div>

 <Slider {...settings} >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-single ">
              <div className="testimonial-content ">
               
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon">
                  <i className="far fa-quote-right"></i>
                </span>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-rate">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <i className="fas fa-star" key={idx}></i>
                ))}
              </div>
            </div>
          ))}
        </Slider>

       </div>
      </div>
    </div>
  );
};

export default TestimonialKeyword;
