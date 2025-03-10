import React from 'react';
import { Helmet } from 'react-helmet';
const ContactInfo = () => {
  return (
<>

  



<div
      className="site-breadcrumb"
      style={{ background: 'url(/img/breadcrumb/01.jpg)' }}
    >
      <div className="container">
        <h2 className="breadcrumb-title">Contact  </h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Contact</li>
        </ul>
      </div>
    </div>

<div className="contact-content">
      <div className="row">
       

        {/* Call Us */}
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-icon">
              <i className="fal fa-phone-volume"></i>
            </div>
            <div className="contact-info-content">
              <h5>Call Us</h5>
              <p>
              <a href="tel:+918177869909">+91 8177869909</a>
              </p>
              
            </div>
          </div>
        </div>

        {/* Email Us */}
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-icon">
              <i className="fal fa-envelopes"></i>
            </div>
            <div className="contact-info-content">
              <h5>Email Us</h5>
              <p>
                <a href="booking@vedanttravels.in">booking@vedanttravels.in</a>
              </p>
              
            </div>
          </div>
        </div>


      


 {/* Office Address */}
 <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-icon">
              <i className="fal fa-map-location-dot"></i>
            </div>
            <div className="contact-info-content">
              <h5>Office Address </h5>
              <p>S/R No. 66/1. Dhore Patil Farm ,<br/>Near New Bharat Bakery ,
              <br/>New Sangvi Pimpri-Chinchwad,<br/> Pune Maharashtra India- 411027.</p>
            </div>
          </div>
        </div>



        </div>
        </div>

<div className="contact-map row">



<div className='col-12' >



<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d264.1947651201676!2d73.80941494290873!3d18.581811636502145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM0JzU0LjYiTiA3M8KwNDgnMzQuMiJF!5e1!3m2!1sen!2sin!4v1741180017614!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>



</div>

</>
  );
};

export default ContactInfo;
