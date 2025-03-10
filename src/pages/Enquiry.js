import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const Enquiry = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "53d1269e-6d19-4143-8e3a-");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (


    <>


    

      <div
        className="site-breadcrumb"
        style={{ background: 'url(/img/breadcrumb/01.jpg)' }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Enquiry  </h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">Enquiry</li>
          </ul>
        </div>
      </div>




      <div className="enquiry-area py-2">
        <div className="container">
          <div className="enquiry-content">

          </div>

          <div className="enquiry-wrapper">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="enquiry-img">
                  <img src="/img/contact/01.jpg" alt="Enquiry" />
                </div>
              </div>

              <div className="col-lg-6 align-self-center">
                <div className="enquiry-form">
                  <div className="enquiry-form-header">
                    <h2>Get In Touch</h2>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout.
                    </p>
                  </div>

                  <form onSubmit={onSubmit}className="contact-form">
                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label htmlFor="name" className="contact-form-label">Your Full Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="contact-form-input"
                          placeholder="Your Full Name"
                          
                          required
                          pattern="[A-Za-z\s]+"
                          title="Name must contain only letters"
                        />
                      </div>
                      <div className="contact-form-group">
                        <label htmlFor="email" className="contact-form-label">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="contact-form-input"
                          placeholder="Your Email"
                         
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please enter a valid email address"
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label htmlFor="phone" className="contact-form-label">Your Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="contact-form-input"
                          placeholder="Your Phone"
                          
                          required
                          pattern="[0-9]{10}"
                          title="Phone number must be of 10 digits"
                        />
                      </div>
                      <div className="contact-form-group">
                        <label htmlFor="days" className="contact-form-label">Number of Days</label>
                        <input
                          type="number"
                          name="days"
                          id="days"
                          className="contact-form-input"
                          placeholder="Number of Days"
                          
                          required
                          min="1"
                          max="100"
                          step="1"
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      
                      <div className="contact-form-group">
                        <label htmlFor="pick_up_point" className="contact-form-label">Pick Up Point</label>
                        <input
                          type="text"
                          name="pick_up_point"
                          id="pick_up_point"
                          className="contact-form-input"
                          placeholder="Pick Up Point"
                          
                          required
                          pattern="[A-Za-z\s]+"
                          title="Pick Up Point must contain only letters"
                        />
                      </div>
                      <div className="contact-form-group">
                        <label htmlFor="drop_location" className="contact-form-label">Drop Location </label>
                        <input
                          type="text"
                          name="drop_location"
                          id="drop_location"
                          className="contact-form-input"
                          placeholder="Bus Name"
                          
                          required
                          pattern="[A-Za-z\s]+"
                          title="Bus can only have letters"
                        />
                      </div>
                    </div>

                    <div className="contact-form-group col-12">
                      <label htmlFor="bus" className="contact-form-label">Select Buses</label>
                      <select
                        name="bus"
                        id="bus"
                        className="contact-form-select"
                        
                        required
                      >
                        <option value="" className='textt' disabled>Select Cabs</option>
                        <option value="Swift Dzire (4 + 1 Seater)">Swift Dzire (4 + 1 Seater)</option>
                        <option value="Kia Carens(6 + 1 Seater)">Kia Carens(6 + 1 Seater)</option>
                        <option value="Ertiga (6 + 1 Seater)">Ertiga (6 + 1 Seater)</option>
                        <option value="Tavera (6 + 1 Seater)">Tavera (6 + 1 Seater)</option>
                        <option value="Innova (6 + 1 Seater)">Innova (6 + 1 Seater)</option>
                        <option value="13 Seater(13 Seater)">13 Seater(13 Seater)</option>
                        <option value="17 Seater(17 Seater)">17 Seater(17 Seater)</option>
                        <option value="Innova Crysta(6 + 1 Seater)">Innova Crysta(6 + 1 Seater)</option>
                        <option value="Other">Other</option>
                      </select>


                    </div>

                    <div className="contact-form-group col-12 py-2">
                      <label htmlFor="date" className="contact-form-label">Date of Journey</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="contact-form-input"
                        
                        
                      />
                    </div>

                    <div className="contact-form-group col-12">
                      <textarea
                        name="message"
                        id="message"
                        className="contact-form-textarea"
                        placeholder="Your Message"
                        
                      ></textarea>
                    </div>

                    <div className="">
                      <button type="submit" className="theme-btn ">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Enquiry;
