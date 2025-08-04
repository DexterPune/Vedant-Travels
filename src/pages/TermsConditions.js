import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/TermsConditions.css';

const TermsConditions = () => {
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions - Vedant Travels</title>
        <meta name="description" content="Terms & Conditions for Vedant Travels. Please read our policies regarding bookings, cancellations, and services." />
      </Helmet>

      <div
        className="site-breadcrumb"
        style={{ background: 'url(./img/breadcrumb/01.jpg)' }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Terms & Conditions</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <section className="terms-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-7">
              <div className="terms-content">
                <p><b className="highlight">1. Booking Confirmation:</b> All bookings with Vedant Travels are subject to availability and will be confirmed once we receive full payment and issue a unique booking reference number.</p>

                <p><b className="highlight">2. Payment:</b> Full payment is required at the time of booking via our secure online payment system or any other authorized payment method specified.</p>

                <p><b className="highlight">3. Cancellation and Rescheduling:</b> If you wish to cancel or reschedule your booking, you must adhere to our cancellation policy, which may involve fees based on the time of request.</p>

                <p><b className="highlight">4. Passenger Responsibility:</b> All passengers must carry valid identification and booking confirmation. Vedant Travels reserves the right to deny services if documentation is missing.</p>

                <p><b className="highlight">5. Baggage Policy:</b> Passengers are permitted to carry a limited amount of baggage. Additional baggage may incur extra charges as per our guidelines.</p>

                <p><b className="highlight">6. Travel Insurance:</b> Although we strive to provide a safe and reliable service, we recommend obtaining travel insurance to protect against unforeseen circumstances during the journey.</p>

                <p><b className="highlight">7. Safety Regulations:</b> All passengers must comply with safety regulations and follow driver instructions for their own safety and the safety of others on board.</p>

                <p><b className="highlight">8. Changes to Itinerary:</b> Vedant Travels reserves the right to alter routes or schedules due to unforeseen circumstances such as weather, traffic, or other safety concerns.</p>

                <p><b className="highlight">9. Refusal of Service:</b> We reserve the right to refuse service to passengers engaging in inappropriate behavior, violating these terms, or compromising the safety of the trip.</p>

                <p><b className="highlight">10. Jurisdiction:</b> All terms and conditions are governed by the laws of India, and any disputes will be handled within the jurisdiction of our registered office in Mumbai.</p>

                <h3>General Policy</h3>
                <p><b className="highlight">Booking Process:</b> You can book your travel services directly via our website or through our dedicated customer support team for a smooth experience.</p>
                <p><b className="highlight">Customer Support:</b> Our team is available 24/7 to assist with any inquiries or concerns. Feel free to contact us through any of our channels.</p>

                <h3>Refund Policy</h3>
                <p><b className="highlight">Cancellation Fees:</b> Depending on the time of cancellation, a fee may apply. The fee structure will be communicated during the booking process.</p>
                <p><b className="highlight">Refund Process:</b> Any refund requests will be processed within 7-10 business days through the original payment method used during booking.</p>
                <p><b className="highlight">No-Show Policy:</b> If a passenger fails to show up for the scheduled travel without prior notice, they will not be eligible for a refund or rescheduling.</p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions or require further clarification regarding our terms and policies, feel free to get in touch with us:</p>
            <ul>
              <li><b>Phone:</b> <a href="tel:+918177869909">+91 8177869909</a></li>
              <li><b>Email:</b> <a href="mailto:booking@vedanttravels.in">booking@vedanttravels.in</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
