import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from 'react-helmet';
import Carousel from '../pages/Carousel';
import FeatureArea from '../pages/FeatureArea';
import AboutArea from '../pages/AboutArea';
import ServiceArea from '../pages/Service';
import TaxiArea from '../pages/TaxiArea';
import CounterArea from '../pages/CounterArea';
import ChooseArea from '../pages/ChooseArea';
import FAQArea from '../pages/FAQArea';
import TestimonialArea from '../pages/TestimonialArea';
import BlogArea from '../pages/BlogArea';
const HeroSlider = () => {
  const settings = {
    dots: true, // Enables the dots below the slider
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
  <>

    
  
<Carousel/>
  
   <AboutArea/>
    <ServiceArea/>
    <TaxiArea/>
    <CounterArea/>
    <FeatureArea/>
    <ChooseArea/>
    <FAQArea/>
    <TestimonialArea/>
    <BlogArea/>
  </>
  );
};

export default HeroSlider;
