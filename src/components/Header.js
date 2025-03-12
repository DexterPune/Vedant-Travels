import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      {/* Top header */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact ">
                <ul className='ulll '>
                <li className=''>
                  <a href="tel:+918177869909">
  <i className="fas fa-phone-volume"></i> +91 8177869909
</a>
                  </li>
                  <li className=''>
                    <a href="mailto:booking@vedanttravels.in">
                      <i className="far fa-envelope"></i>
                      <span> booking@vedanttravels.in</span>
                    </a>
                  </li>
                 
                
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="">
              <img src="/images/logo.jpg" alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolor"></i> {/* Mobile Menu Icon */}
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav" className={isNavOpen ? "show" : ""}>
              <Nav className="mr-auto">
                <Nav.Link href="/" className='fw-bold nav-item'>Home</Nav.Link>

                <NavDropdown title="About " id="about-us-dropdown " className='fw-bold'>
                  <NavDropdown.Item href="about" className='fw-bold nav-item'>About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/term-condition" className='fw-bold nav-item'>Term & Condition </NavDropdown.Item>
                  <NavDropdown.Item href="/privacy-policy" className='fw-bold '>Privacy & Policy </NavDropdown.Item>
               
                </NavDropdown>

                <Nav.Link href="/our-fleet"  className='fw-bold nav-item'>Our Fleet</Nav.Link>
                <Nav.Link href="/packages" className='fw-bold nav-item'>Packages</Nav.Link>

                <NavDropdown title="Pune &#8652; Mumbai Cab" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/pune-mumbai-cabs" className='fw-bold nav-item'>Pune &#8652; Mumbai Cab</NavDropdown.Item>
                  <NavDropdown.Item href="/Pune-to-Mumbai-Cab" className='fw-bold'>Pune to Mumbai Cab</NavDropdown.Item>
                </NavDropdown>
             

                <NavDropdown title="Mumbai &#8652; Pune Cab" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/Mumbai-to-Pune-Daily-Cab" className='fw-bold '>Mumbai to Pune  Cab </NavDropdown.Item>
                  
                </NavDropdown>

                <Nav.Link href="/booking" className='fw-bold nav-item'>Booking</Nav.Link>
                <Nav.Link href="/gallery" className='fw-bold nav-item'>Gallery</Nav.Link>

                <NavDropdown title="Contact" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/contact" className='fw-bold nav-item'>Contact</NavDropdown.Item>
                  <NavDropdown.Item href="/Enquiry" className='fw-bold '>Enquiry</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Search Area */}
      {isSearchOpen && (
        <div className="search-area">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Type Keyword..." />
              <button type="submit" className="search-icon-btn">
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
