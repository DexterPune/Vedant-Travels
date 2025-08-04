import React from 'react';

const chooseItems = [
  {
    id: 1,
    count: '01',
    icon: './img/icon/taxi-1.svg',
    title: 'Best Quality Cabs',
    description:
      'Vedant Travels offers the best quality cabs with exceptional comfort and cleanliness. Our fleet includes well-maintained vehicles, ensuring a smooth and comfortable journey every time.',
  },
  {
    id: 2,
    count: '02',
    icon: './img/icon/driver.svg',
    title: 'Experienced Drivers',
    description:
      'Our expert drivers are well-trained and familiar with all routes, ensuring a safe and efficient travel experience. With professional and courteous service, they make sure you enjoy a relaxed and enjoyable journey.',
  },
  {
    id: 3,
    count: '03',
    icon: './img/icon/taxi-location.svg',
    title: 'Wide Coverage Area',
    description:
      'Vedant Travels offers reliable and timely cab services for city travel, airport transfers, and outstation trips. Whether it’s for business or leisure, we cover all your transportation needs with convenience and affordability.',
  },
];

const ChooseArea = () => {
  return (
    <div className="choose-area py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="choose-content">
              <div className="site-heading wow fadeInDown mb-4" data-wow-delay=".25s">
                <span className="site-title-tagline text-white justify-content-start">
                  <i className="flaticon-drive"></i> Why Choose Us
                </span>
                <h2 className="site-title text-white mb-10">
                  We are dedicated <span>to providing</span> top-quality travel services
                </h2>
                <p className="text-white">
                  Vedant Travels ensures that you have a safe, comfortable, and affordable transportation option. Whether you're traveling for business, leisure, or any other purpose, we offer reliable and convenient services.
                </p>
              </div>
              <div className="choose-img wow fadeInUp" data-wow-delay=".25s">
                <img src="./images/innova.webp" alt="Why Choose Us" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="choose-content-wrapper wow fadeInRight" data-wow-delay=".25s">
              {chooseItems.map((item) => (
                <div
                  key={item.id}
                  className={`choose-item ${item.id === 2 ? 'ms-lg-5' : ''} ${item.id === 3 ? 'mb-lg-0' : ''}`}
                >
                  <span className="choose-count">{item.count}</span>
                  <div className="choose-item-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="choose-item-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseArea;
