import React from 'react';
import { Helmet } from 'react-helmet';

const OurFleet = () => {
  const services = [
    
    {
      title: "Swift Desire",
      image: "/images/ourfleet/2.jpg",
      icon: "/img/icon/city-taxi.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Amaze ",
      image: "/images/ourfleet/1.jpg",
      icon: "/img/icon/taxi-2.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Aura ",
      image: "/images/ourfleet/3.jpg",
      icon: "/img/icon/airport.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Ertiga ",
      image: "/images/ourfleet/5.jpg",
      icon: "/img/icon/taxi-booking-1.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Scorpio ",
      image: "/images/ourfleet/8.jpg",
      icon: "/img/icon/business.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Innova Crysta ",
      image: "/images/ourfleet/4.jpg",
      icon: "/img/icon/taxi-2.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
   
    {
      title: "Tavera ",
      image: "/images/ourfleet/7.jpg",
      icon: "/img/icon/taxi-2.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Kia Carens ",
      image: "/images/ourfleet/9.jpg",
      icon: "/img/icon/taxi-2.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Innova Cab ",
      image: "/images/ourfleet/6.jpg",
      icon: "/img/icon/taxi.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Tempo Traveller ",
      image: "/images/ourfleet/10.jpg",
      icon: "/img/icon/taxi.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Mini Bus ",
      image: "/images/ourfleet/11.jpg",
      icon: "/img/icon/taxi-2.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      title: "Luxury Bus ",
      image: "/images/ourfleet/12.jpg",
      icon: "/img/icon/taxi-2.svg",
      description: "There are many variations of passages orem ipsum available, but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
  ];

  return (
    <>
     

      {/* Breadcrumb */}
      <div className="site-breadcrumb" style={{ background: 'url(/img/breadcrumb/01.jpg)' }}>
        <div className="container">
          <h2 className="breadcrumb-title">Our Fleet</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">Our Fleet</li>
          </ul>
        </div>
      </div>

      {/* Service Area */}
      <div className="service-area bg py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Our Fleet</span>
                <h2 className="site-title">Our Best Services For You</h2>
                <div className="heading-divider"></div>
              </div>
            </div>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="service-item wow fadeInUp" data-wow-delay={`${0.25 * (index + 1)}s`}>
                  <div className="service-img">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <a href={service.link}>{service.title}</a>
                    </h3>
                    <p className="service-text text-white">{service.description}</p>
                    {/* <div className="service-arrow">
                      <a href={service.link} className="theme-btn">
                        Read More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFleet;
