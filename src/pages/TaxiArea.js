import React, { useState } from 'react';

const TaxiArea = () => {
  const [filter, setFilter] = useState('*');

  const taxiItems = [
    {
      id: 1,
      model: 'Swift Desire',
      price: '$1.25/km',
      doors: 4,
      passengers: 4,
      luggage: 2,
      airCondition: 'Yes',
      gps: 'Yes',
      driverChoice: 'Yes',
      img: '/images/ourfleet/2.jpg',
      categories: ['cat1', 'cat2'],
    },
    {
      id: 3,
      model: 'Amaze',
      price: '$1.25/km',
      doors: 4,
      passengers: 4,
      luggage: 2,
      airCondition: 'Yes',
      gps: 'Yes',
      driverChoice: 'Yes',
      img: '/images/ourfleet/1.jpg',
      categories: ['cat1', 'cat4'],
    },
    {
      id: 6,
      model: 'Aura',
      price: '$1.25/km',
      doors: 4,
      passengers: 4,
      luggage: 2,
      airCondition: 'Yes',
      gps: 'Yes',
      driverChoice: 'Yes',
      img: '/images/ourfleet/3.jpg',
      categories: ['cat4'],
    },
    {
      id: 4,
      model: 'Kia Carens',
      price: '$1.25/km',
      doors: 4,
      passengers: 6,
      luggage: 4,
      airCondition: 'Yes',
      gps: 'Yes',
      driverChoice: 'Yes',
      img: '/images/ourfleet/9.jpg',
      categories: ['cat1', 'cat3'],
    },
    {
      id: 2,
      model: 'Innova Crysta',
      price: '$1.25/km',
      doors: 4,
      passengers: 6,
      luggage: 4,
      airCondition: 'Yes',
      gps: 'Yes',
      driverChoice: 'Yes',
      img: '/images/ourfleet/4.jpg',
      categories: ['cat3', 'cat4'],
    },
    {
      id: 5,
      model: 'Scorpio',
      price: '$1.25/km',
      doors: 5,
      passengers: 8,
      luggage: 5,
      airCondition: 'Yes',
      gps: 'Yes',
      driverChoice: 'Yes',
      img: '/images/ourfleet/8.jpg',
      categories: ['cat1', 'cat2', 'cat3'],
    },

  ];
  
  

  return (
    <div className="taxi-area py-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Our Cabs</span>
              <h2 className="site-title">Let's Check Available Cab</h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>

<div className="row filter-box">
  {taxiItems
    .filter((item) => filter === '*' || item.categories.includes(filter))
    .map((item) => (
      <div key={item.id} className={`col-md-6 col-lg-4 filter-item ${item.categories.join(' ')}`}>
        <div className="taxi-item">
          <div className="taxi-img">
            <img src={item.img} alt={item.model} />
          </div>
          <div className="taxi-content">
            <div className="taxi-head">
              <h4>{item.model}</h4>
              
            </div>
            <div className="taxi-feature">
              <ul>
                <li>
                  <i className="fas fa-car"></i> Taxi Doors: <span>{item.doors}</span>
                </li>
                <li>
                  <i className="fas fa-users"></i> Passengers: <span>{item.passengers}</span>
                </li>
                <li>
                  <i className="fas fa-suitcase"></i> Luggage Carry: <span>{item.luggage}</span>
                </li>
                <li>
                  <i className="fas fa-sun"></i> Air Condition: <span>{item.airCondition}</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> GPS Navigation: <span>{item.gps}</span>
                </li>
               
              </ul>
            </div>
            <a href="/booking" className="theme-btn">
              Book Taxi Now<i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    ))}
</div>

      </div>
    </div>
  );
};

export default TaxiArea;
