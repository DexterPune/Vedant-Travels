import React from 'react';

const AboutArea = () => {
  return (
    <div className="about-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
              <div className="about-img">
                <img src="./images/car2.png" alt="" />
              </div>
              {/* <div className="about-experience">
                <div className="about-experience-icon">
                  <img src="./img/icon/taxi-booking.svg" alt="" />
                </div>
                <b>30 Years Of <br /> Quality Service</b>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right wow fadeInRight" data-wow-delay=".25s">
              <div className="site-heading mb-3">
                <span className="site-title-tagline justify-content-start">
                  <i className="flaticon-drive"></i> Our Services
                </span>
                <h2 className="site-title">
                Travel Smoothly with <span>Vedant Travels</span>  Pune to Mumbai and Mumbai to Pune
                </h2>
              </div>
              <p className="about-text">
              "At Vedant Cab, we redefine travel with a seamless blend of comfort, safety, and punctuality. From the moment you book with us to the final destination, every ride is crafted to provide an exceptional experience. Whether you're heading to a business meeting or a weekend getaway, Vedant Cab ensures your journey is smooth, reliable, and tailored to your needs."
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>24/7 Assistance to Ensure Safe Travels</li>
                  <li>Offering Diverse Vehicle Options for Every Journey</li>
                  <li>Vedant Travels – A Name You Can Trust for Safe Journeys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
