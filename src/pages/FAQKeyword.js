import React, { useState } from 'react';

// Rename component from FAQArea to FAQKeyword
const FAQKeyword = ({ faqData }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="faq-area ">
      <div className="container">
        <div className="row">
          <div className="col-12">
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

export default FAQKeyword;
