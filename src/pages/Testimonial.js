import React from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, // Display 3 testimonials at once on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablet and smaller devices
        settings: {
          slidesToShow: 1, // Show 1 testimonial for tablet screens
        }
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 testimonial for mobile screens
        }
      }
    ]
  };

  return (
    <div className="testimonial-area py-120">
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

        <Slider {...settings} className="testimonial-slider owl-carousel owl-theme">
          {/* Testimonial 1 */}
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-info">
                <h4>Mr. Raghav Patil</h4>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="far fa-quote-right"></i>
              </span>
              <p>
                "I had an amazing experience with Vedant Travels! The ride was smooth, and the driver was very professional. Highly recommend their service for a hassle-free trip from Pune to Mumbai."
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-info">
                <h4>Miss. Anjali Desai</h4>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="far fa-quote-right"></i>
              </span>
              <p>
                "Vedant Travels made my travel comfortable and stress-free. The driver was punctual and took all safety precautions. I will definitely choose them for my future travels."
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-info">
                <h4>Mr. Aarav Mehta</h4>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="far fa-quote-right"></i>
              </span>
              <p>
                "Great experience with Vedant Travels! The car was clean, and the driver was friendly and knowledgeable. My journey from Mumbai to Pune was seamless and enjoyable."
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-info">
                <h4>Miss. Priya Kapoor</h4>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="far fa-quote-right"></i>
              </span>
              <p>
                "I’ve used many cab services, but Vedant Travels is by far the best. Their drivers are courteous, the vehicles are well-maintained, and the booking process is easy. Totally satisfied!"
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-info">
                <h4>Mr. Vikram Joshi</h4>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="far fa-quote-right"></i>
              </span>
              <p>
                "Vedant Travels provides excellent service. I was able to book my ride on time and the driver made the journey smooth. It's my go-to choice for trips between Pune and Mumbai."
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
