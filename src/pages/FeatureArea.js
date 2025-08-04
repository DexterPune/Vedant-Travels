import React from 'react';

const FeatureArea = () => {
  // Data array containing the feature details
  const features = [
    {
      title: "Safety Guarantee",
      description:
        "At Vedant Travels, we prioritize your safety. Our vehicles are regularly inspected, and our drivers are trained to ensure a secure and comfortable journey for all passengers.",
      icon: "./img/icon/taxi-safety.svg",
      alt: "Safety Guarantee",
    },
    {
      title: "Fast Pickup",
      description:
        "With Vedant Travels, we guarantee fast and efficient pick-ups. Whether you're booking a ride for an airport transfer or a city tour, we ensure prompt service.",
      icon: "./img/icon/pickup.svg",
      alt: "Fast Pickup",
    },
    {
      title: "Affordable Rate",
      description:
        "Vedant Travels offers affordable rates for all our transportation services. Get the best value for your money without compromising on quality or comfort.",
      icon: "./img/icon/money.svg",
      alt: "Affordable Rate",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated customer support team at Vedant Travels is available 24/7 to assist you with bookings, inquiries, and any issues you might face during your journey.",
      icon: "./img/icon/support.svg",
      alt: "24/7 Support",
    },
  ];
  

  return (
    <div className="feature-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Feature</span>
              <h2 className="site-title">Our Awesome Feature</h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.alt} />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
