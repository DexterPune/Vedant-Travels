import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Booking = () => {
  const taxiPackages = [
    { id: 1, title: 'Honda City', baseCharge: '4+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/1.jpg' },
    { id: 2, title: 'Swift Dezire', baseCharge: '4+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/2.jpg' },
    { id: 3, title: 'Aura', baseCharge: '4+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/3.jpg' },
    { id: 4, title: 'Ertiga', baseCharge: '6+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/5.jpg' },
    { id: 5, title: 'Kia Carence', baseCharge: '6+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/9.jpg' },
    { id: 6, title: 'Innova Cab', baseCharge: '6+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/6.jpg' },
    { id: 7, title: 'Scorpio', baseCharge: '6+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/8.jpg' },
    { id: 8, title: 'Innova Crysta', baseCharge: '6+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/4.jpg' },
    { id: 9, title: 'Tavera', baseCharge: '6+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/7.jpg' },
    { id: 10, title: 'Tempo Traveller', baseCharge: '12+1', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/10.jpg' },
    { id: 11, title: 'Mini Bus', baseCharge: '32', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/11.jpg' },
    { id: 12, title: 'Luxury Bus', baseCharge: '35', distanceAllowance: '₹500', pricePerKm: '₹13', bookingFee: '₹150', extraPassengers: '₹250', imageUrl: './images/ourfleet/12.jpg' },
  ];

  const handleBooking = (vehicleName) => {
    const message = `I want to book ${vehicleName} for my journey.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918177869909?text=${encodedMessage}`, '_blank'); // Open WhatsApp with the message
  };

  return (
    <>
    

      <div className="site-breadcrumb" style={{ background: 'url(./img/breadcrumb/01.jpg)' }}>
        <div className="container">
          <h2 className="breadcrumb-title">Booking</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">Booking</li>
          </ul>
        </div>
      </div>

      <div className="booking py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Taxi Booking</span>
                <h2 className="site-title">Book Your Taxi Now</h2>
                <div className="heading-divider"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {taxiPackages.map((pkg) => (
              <div key={pkg.id} className="col-md-6 col-lg-4">
                <div className="rate-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="rate-header">
                    <div className="rate-img">
                      <img src={pkg.imageUrl} alt={pkg.title} />
                    </div>
                  </div>
                  <div className="rate-header-content">
                    <h4>{pkg.title}</h4>
                    <p className="rate-duration">One Time Payment</p>
                  </div>
                  <div className="rate-content">
                    <div className="rate-icon">
                      <img src="./img/icon/taxi-1.svg" alt="Taxi Icon" />
                    </div>
                    <div className="rate-feature">
                      <ul>
                        <li><i className="fas fa-check-double"></i> Seater: <span>{pkg.baseCharge}</span></li>
                        <li><i className="fas fa-check-double"></i> Driver Allowance: <span>{pkg.distanceAllowance}</span></li>
                        <li><i className="fas fa-check-double"></i> Per Km: <span>{pkg.pricePerKm}</span></li>
                        <li><i className="fas fa-check-double"></i> Extra Hr: <span>{pkg.bookingFee}</span></li>
                        <li><i className="fas fa-check-double"></i> Night Halt: <span>{pkg.extraPassengers}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="rate-footer text-center">
                    <button
                      className="theme-btn"
                      onClick={() => handleBooking(pkg.title)} // Send booking message for the selected vehicle
                    >
                      Book Now
                    </button>
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

export default Booking;