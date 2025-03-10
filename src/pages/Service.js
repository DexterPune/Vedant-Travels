import React from 'react';

const services = [
  {
    title: 'Online Booking',
    image: '/img/icon/taxi-booking-1.svg',
    description: 'Vedant Cab offers an easy and secure online booking system, allowing you to book your ride quickly with just a few clicks from anywhere.',
    link: '/booking'
  },
  {
    title: 'City Transport',
    image: '/img/icon/city-taxi.svg',
    description: 'For comfortable city travel, Vedant Cab provides reliable transport services that ensure timely pick-up and drop-off across the city.',
    link: '/booking'
  },
  {
    title: 'Airport Transport',
    image: '/img/icon/airport.svg',
    description: 'With Vedant Cab, enjoy stress-free airport transfers. We ensure timely pick-ups and drop-offs to make your travel experience smooth.',
    link: '/booking'
  },
  {
    title: 'Business Transport',
    image: '/img/icon/business.svg',
    description: 'Vedant Cab offers premium business transport services, providing comfortable rides for corporate events, meetings, and airport transfers.',
    link: '/booking'
  },
  {
    title: 'Regular Transport',
    image: '/img/icon/taxi-2.svg',
    description: 'For daily transportation, Vedant Cab ensures reliable and comfortable rides. Whether commuting or running errands, we’ve got your travel needs covered.',
    link: '/booking'
  },
  {
    title: 'Tour Transport',
    image: '/img/icon/taxi.svg',
    description: 'Vedant Cab’s tour transport service offers safe and comfortable rides for sightseeing. Explore new places with us while enjoying a smooth journey.',
    link: '/booking'
  }
];



const ServiceArea = () => {
  return (
    <div className="service-area bg ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Services</span>
              <h2 className="site-title">Our Best Services For You</h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 py-4 ">
              <div className={`service-item service-itemm wow fadeInUp border`} data-wow-delay={`${(index + 1) * 0.25}s`}>
                <div className="service-icon service-iconn">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <p className="service-text">
                    {service.description}
                  </p>
                  <div className="service-arrow">
                    <a href={service.link} className="theme-btn">
                      Book Now <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
