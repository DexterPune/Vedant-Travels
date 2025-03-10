import React from 'react';
import Slider from "react-slick";

const testimonials = [
    {
      name: 'Mr. Rajesh Kumar',
      image: '/img/testimonial/01.jpg',
      role: 'Customer',
      quote: "Vedant Travels offers exceptional services! The booking process is so easy, and the drivers are highly professional. I’ve traveled with them several times, and I always have a smooth experience.",
      rating: 5
    },
    {
      name: 'Miss. Priya Sharma',
      image: '/img/testimonial/02.jpg',
      role: 'Customer',
      quote: "I highly recommend Vedant Travels for both long and short trips. The vehicles are comfortable and clean, and the staff is friendly and accommodating.",
      rating: 5
    },
    {
      name: 'Mr. Amit Patel',
      image: '/img/testimonial/03.jpg',
      role: 'Customer',
      quote: "I’ve used many cab services before, but Vedant Travels stands out for its punctuality and quality of service. They are my go-to service for all my travel needs.",
      rating: 5
    },
    {
      name: 'Miss. Sunita Verma',
      image: '/img/testimonial/04.jpg',
      role: 'Customer',
      quote: "Thanks to Vedant Travels, my business trips are always stress-free. The vehicles are always on time and ready to take me to my destination without any hassle.",
      rating: 5
    },
    {
      name: 'Mr. Vikram Singh',
      image: '/img/testimonial/05.jpg',
      role: 'Customer',
      quote: "The drivers are not just skilled, but they are very polite and respectful. It’s always a pleasure to travel with Vedant Travels.",
      rating: 5
    }
  ];
const TestimonialArea = () => {
  // Slick slider settings
  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Infinite looping of slides
    speed: 500,         // Transition speed (ms)
    slidesToShow: 3,    // Number of slides to show in large screens
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
    <div className="testimonial-area py-120">
      <div className="container ">
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
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-single" style={{ padding: '20px' }}> {/* Added padding */}
              <div className="testimonial-content">
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
  );
};

export default TestimonialArea;
