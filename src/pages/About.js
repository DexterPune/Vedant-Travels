import React from 'react';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet';
import Visionn from './Visionn';
const About = () => {
  return (
    <>




      <div
        className="site-breadcrumb"
        style={{ background: 'url(/img/breadcrumb/01.jpg)' }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">About Us</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>



      <div className="about-area py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                <div className="about-img">
                  <img src="/images/car3.jpg" alt="About Image" />
                </div>
                <div className="about-experience">
                  <div className="about-experience-icon">
                    <img src="/img/icon/taxi-booking.svg" alt="Taxi Booking Icon" />
                  </div>
                  <b>15 Years Of <br /> Quality Service</b>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right wow fadeInRight" data-wow-delay=".25s">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline justify-content-start">
                    <i className="flaticon-drive"></i> About Us
                  </span>
                  <h2 className="site-title">
                    We Provide Trusted <span>Cab Service</span>  Between Pune and Mumbai
                  </h2>
                </div>
                <p className="about-text">
                Since its inception, Vedant Travels has been committed to delivering exceptional, reliable, and comfortable travel experiences to its customers. With a fleet of well-maintained vehicles, ranging from compact cars to luxury SUVs and sedans, and a team of professional, skilled drivers, we ensure that every journey is safe, smooth, and enjoyable.
                  <br />
                  Whether you're in need of a quick city ride, daily taxi services between Pune and Mumbai, airport transfers, corporate travel, or an outstation trip, Vedant Travels tailors its services to meet your specific travel needs with convenient booking options. We take great pride in offering timely, affordable, and high-quality transportation, with customer satisfaction at the forefront of our service.
                  <br />
                  With a strong emphasis on reliability, transparency, and comfort, Vedant Travels strives to make every ride a pleasant and stress-free experience. Our round-the-clock availability, user-friendly online booking system, and customer-first approach ensure that you always have a trustworthy travel companion for all your journeys.
                </p>
                <div className="about-list-wrapper">
                  <ul className="about-list list-unstyled">
                    <li>All Type Vehicle Available</li>
                    <li>You Get 24/7 Roadside Assistance.</li>
                    <li>We Are The India's Largest Provider.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
<Visionn/>
      <Testimonial />

    </>
  );
};

export default About;
