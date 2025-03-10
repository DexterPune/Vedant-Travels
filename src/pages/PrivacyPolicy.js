import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/privacy-policy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy - Vedant Travels</title>
        <meta name="description" content="Privacy Policy for Vedant Travels. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div
        className="site-breadcrumb"
        style={{ background: 'url(/img/breadcrumb/01.jpg)' }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Privacy Policy</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">Privacy Policy</li>
          </ul>
        </div>
      </div>

      <section id="about" className="jarallax text-light">
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className='text-white'>Privacy Policy</h1>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy">
        <div className="container px-0">
          <div className="row g-0">
            <div className="col-12 col-md-7">
              <h3 className="title">Privacy Policy</h3>

              <p>
                At Vedant Travels, we take your privacy seriously and are dedicated to protecting your personal information. This Privacy Policy explains the types of information we collect, how we use it, and the steps we take to safeguard it.
              </p>

              <div className="section">
                <p className="highlight darkcolor">Information We Collect:</p>
                <p className="highlight darkcolor">1. Personal Information:</p>
                <p>
                  We collect personal information such as name, phone number, email address, and payment details to provide you with seamless travel services.
                </p>

                <p className="highlight darkcolor">2. Usage Data:</p>
                <p>
                  We collect browsing information, including your IP address, device details, and interaction patterns, to improve your experience on our website and services.
                </p>

                <p className="highlight darkcolor">3. Location Data:</p>
                <p>
                  With your consent, we collect location data to offer accurate ride and service information for a better user experience.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">How We Use Your Information:</p>
                <p className="highlight darkcolor">1. Service Delivery:</p>
                <p>
                  We use your information to confirm bookings, provide ride tracking, and process payments for services.
                </p>

                <p className="highlight darkcolor">2. Improving User Experience:</p>
                <p>
                  We use your data to enhance our platform, resolve issues, and introduce new features for a better overall experience.
                </p>

                <p className="highlight darkcolor">3. Communication:</p>
                <p>
                  We communicate with you about booking confirmations, ride updates, and important service notifications via email and SMS.
                </p>

                <p className="highlight darkcolor">4. Marketing & Promotions:</p>
                <p>
                  With your consent, we may send you special offers, discounts, and updates on services to keep you informed.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Information Sharing:</p>
                <p className="highlight darkcolor">1. Trusted Partners:</p>
                <p>
                  We may share necessary information with trusted partners to process payments or provide customer support, in accordance with privacy guidelines.
                </p>

                <p className="highlight darkcolor">2. Legal Compliance:</p>
                <p>
                  We may disclose your information if required by law, or if necessary to protect our rights, property, and safety.
                </p>
              </div>

              <div className="section">
                <p className="highlight darkcolor">Data Security:</p>
                <p>
                  We employ security measures to protect your data, but cannot guarantee absolute security due to the potential risk of cyber threats.
                </p>

                <p className="highlight darkcolor">Your Rights:</p>
                <p>
                  You have the right to request access to, update, or delete your personal information. You may also opt-out of marketing communications at any time.
                </p>

                <p className="highlight darkcolor">Policy Updates:</p>
                <p>
                  We may update our Privacy Policy periodically. We encourage you to review this policy regularly for any changes.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns regarding our privacy policy, feel free to reach out to us:</p>
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

export default PrivacyPolicy;
