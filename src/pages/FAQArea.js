import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'How Do I Book A Cab With Vedant Travels?',
    answer:
      'Booking a cab with Vedant Travels is simple and convenient. You can easily book your ride through our website or mobile app by entering your travel details, selecting your preferred vehicle, and choosing a payment method. Once confirmed, we will assign a cab to you promptly.',
  },
  {
    id: 2,
    question: 'Do You Offer One-Way Trips Between Pune and Mumbai?',
    answer:
      'Yes, Vedant Travels provides both one-way and round-trip cab services between Pune and Mumbai. Whether you are traveling for business or leisure, you can opt for a one-way ride or book a return journey according to your preference.',
  },
  {
    id: 3,
    question: 'Is There A Minimum Fare For Short Trips?',
    answer:
      'Yes, Vedant Travels has a minimum fare for short-distance trips. For detailed information about pricing and minimum charges, please refer to our pricing policy or get in touch with our customer service team.',
  },
  {
    id: 4,
    question: 'Can I Choose The Type Of Car I Want?',
    answer:
      'Absolutely! Vedant Travels offers a variety of vehicles to cater to your needs. Whether you require a sedan, SUV, or luxury vehicle, you can easily choose your preferred car type during the booking process.',
  },
  {
    id: 5,
    question: 'Can I Track My Cab In Real-Time?',
    answer:
      'Yes, Vedant Travels offers real-time tracking for your convenience. Once your booking is confirmed, you can track the location of your cab live through the mobile app or website, keeping you updated on the estimated arrival time.',
  },
];


  

const FAQArea = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="faq-area py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline justify-content-start">Faq's</span>
                <h2 className="site-title my-3">
                  General <span>frequently</span> asked questions
                </h2>
              </div>
              <p className="about-text">
              At Vedant Travels, we focus on delivering a smooth and comfortable travel experience. Our services are crafted to provide you with safe, dependable, and convenient transportation, whether you're traveling locally or on outstation trips. With a fleet of well-maintained vehicles and experienced drivers, we guarantee that each journey is enjoyable, on time, and hassle-free.              </p>
              <div className="faq-img mt-3">
                <img src="/img/faq/01.jpg" alt="FAQ" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={faq.id}>
                  <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                      className={`accordion-button ${active === index ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={active === index ? 'true' : 'false'}
                      aria-controls={`collapse${faq.id}`}
                    >
                      <span>
                        <i className="far fa-question"></i>
                      </span>{' '}
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className={`accordion-collapse collapse ${active === index ? 'show' : ''}`}
                    aria-labelledby={`heading${faq.id}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">{faq.answer}</div>
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

export default FAQArea;
