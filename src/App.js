import React from 'react';
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import { HashRouter as Router } from "react-router-dom";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSlider from './components/Hero';
import Gallery from './pages/Gallery';
import ContactInfo from './pages/Contact';
import Enquiry from './pages/Enquiry';
import Booking from './pages/Booking';
import OurFleet from './pages/Ourfleet';
import Packages from './pages/Packages';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Footer from './components/Footer';
import Punetomumbaicabs from './pages/Pune to Mumbai Cab';
import ScrollToTop from './components/ScrollToTop';
import Punetomumbaiairport from './pages/Pune to Mumbai Airport Cab';
import Punetomumbaiinternatinalairport from './pages/Pune to Mumbai International Airport Cab';
import Punetomumbaionewaycab from './pages/Pune to Mumbai One Way Cab ';
import Punetomumbaicabhire from './pages/Pune Mumbai Car Hire';
import Punetomumbaitaxifare from './pages/Pune to Mumbai Taxi Fare';
import Punetomumbaionlinecabbooking from './pages/Pune to Mumbai Online Cab Booking ';
import Pimprichichwadtomumbaicab from './pages/Pimpri Chinchwad to Mumbai Cab';
import Banertomumbaicabs from './pages/Baner to Mumbai Cabs';
import Hinjewaditomumbaicab from './pages/Hinjewadi to Mumbai Cab';
import Pimplesaudagartomumbaicab from './pages/Pimple Saudagar to Mumbai Cab';
import Wakadtomumbaicab from './pages/Wakad to Mumbai Cab';
import Hadapsartomumbaicab from './pages/Hadapsar to Mumbai Cab';
import Kalyaninagartomumbaitaxi from './pages/Kalyani Nagar to Mumbai Taxi';
import Koregaonparktomumbaicab from './pages/Koregaon Park to Mumbai Cab';
import Kothrudtomumbaicab from './pages/Kothrud to Mumbai Cab';
import Kharaditomumbaicab from './pages/Kharadi to Mumbai Cab ';
import Shivajinagartomumbaicab from './pages/Shivajinagar to Mumbai Cab';
import Punetomumbaiertigacab from './pages/Pune to Mumbai Ertiga Cab';
import Punetomumbaiinnovacabs from './pages/Pune to Mumbai Innova Crysta Cab';
import Kondhwatomumbaicab from './pages/Kondhwa to Mumbai Cab';
import Vimannagartomumbaicabs from './pages/Viman Nagar to Mumbai Cabs';
import Katrajtomumbaicabservice from './pages/Katraj to Mumbai Cab Servic';
import Punestationtomumaicab from './pages/Pune Station to Mumbai Cab';
import Boatclubaoadtomumbaicab from './pages/Boat Club Road to Mumbai Cab';
import Vishrantwaditomumbaicab from './pages/Vishrantwadi to Mumbai Cab';
import Alanditomumbaicabservice from './pages/Alandi to Mumbai Cab Service';
import Wagholitomumbaicabs from './pages/Wagholi to Mumbai Cab';
import Mumbaiairporttopunecab from './pages/Mumbai Airport to Pune Cab';
import Dadartopunecab from './pages/Dadar to Pune Cab';
import Mumbaitopuneonewaycab from './pages/Mumbai to Pune One Way Cab';
import Andheritopunecab from './pages/Andheri to Pune Cab';
import Bandratopunecab from './pages/Bandra to Pune Cab ';
import Santacruztopunecab from './pages/Santacruz to Pune Cab';
import Mumbaicentraltopune from './pages/Mumbai Central to Pune Cab';
import Borivalitopunecabs from './pages/Borivali to Pune Cab';
import Mumbaitopimprichichwadcab from './pages/Mumbai to Pimpri Chinchwad Cab';
import Navimumbaitopunecab from './pages/Navi Mumbai to Pune Cab';
import Mumbaiairporttopunecitycab from './pages/Mumbai Airport to Pune City Cab';
import Mumbaitopunedailycab from './pages/Mumbai to Pune Daily Cab';
import Mumbaitopuneonlinecab from './pages/Mumbai to Pune Online Cab';
import Mumbaipunecabbooking from './pages/Mumbai Pune Cab Booking ';
import Jogeshwaritopunecabservice from './pages/Jogeshwari to Pune Cab Service';
import Garegaontopunecab from './pages/Goregaon to Pune Cab';
import Kandivalitopunecab from './pages/Kandivali to Pune Cab';
import Vileparletopunecab from './pages/Vile Parle to Pune Cab Service ';
import Bhanduptopunecab from './pages/Bhandup to Pune Cab';
import Ghatkopartopunecabservice from './pages/Ghatkopar to Pune Cab Service';
import Kurlatopunetaxiservice from './pages/Kurla to Pune Taxi Service';
import Powaimumbaipunecab from './pages/Powai Mumbai Pune Cab Service';
import Chemburtopunecab from './pages/Chembur to Pune Cab';
import Terminalmumbaiairport from './pages/Terminal 1, 2, 3 Mumbai Airport to Pune Cab';
import Thanetopunecab from './pages/Thane to Pune Cab';
import Vikharolitopunecabservice from './pages/Vikhroli to Pune Cab Services';
import Mumbaitopuneinnovacrystacab from './pages/Mumbai to Pune Innova Crysta Cab';
import Mumbaiairporttopuneertigaonrent from './pages/Mumbai Airport to Pune Ertiga on Rent';
import Mumbaiairportcarrental from './pages/Mumbai Airport Car Rental';
import Panveltopunecab from './pages/Panvel to Pune Cab';
import Churchgatetopunecabservice from './pages/Churchgate to Pune Cab Service ';
import Bycullatopunecabservice from './pages/Byculla to Pune Cab Service';
import Vashitopunecab from './pages/Vashi to Pune Cab';
import Kharghartopunecab from './pages/Kharghar to Pune Cab';
import Mankhurdtopunecab from './pages/Mankhurd to Pune Cab';
import Onewaytaximumbaitopune from './pages/One Way Taxi Mumbai to Pune';
import Innovacrystaonrentinpune from './pages/Innova Crysta on Rent in Pune';
import Ertigacabbookinginpune from './pages/Ertiga Cab Booking in Pune';
import Kiacarenceonrentinpune from './pages/Kia Carens on Rent in Pune';
import Swiftdezireonrentinpune from './pages/Swift Dzire on Rent in Pune';
import Sedancabsbookinginpune from './pages/Sedan Cabs Booking in Pune';
import Forceurbaniaonrentinpune from './pages/Force Urbania on Rent in Pune';
import Fortuneronrentinpune from './pages/Fortuner on Rent in Pune';
import PuneMumbaiCab from './pages/PuneMumbaiCab';





function App() {
  return (
    <Router basename='/Vedant-Travels'>
    
      <Header/>
      <ScrollToTop/>

      <Routes>

        <Route path="/" element={<HeroSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/our-fleet" element={<OurFleet />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/Pune-to-Mumbai-Cab" element={<Punetomumbaicabs />} />
        <Route path="/Pune-to-Mumbai-Airport-Cab" element={<Punetomumbaiairport />} />
        <Route path="/Pune-to-Mumbai-International-Airport-Cab" element={<Punetomumbaiinternatinalairport />} />
        <Route path="/Pune-to-Mumbai-One-Way-Cab" element={<Punetomumbaionewaycab />} />
        <Route path="/Pune-Mumbai-Car-Hire" element={<Punetomumbaicabhire />} />
        <Route path="/Pune-to-Mumbai-Taxi-Fare" element={<Punetomumbaitaxifare />} />
        <Route path="/Pune-to-Mumbai-Online-Cab-Booking" element={<Punetomumbaionlinecabbooking />} />
        <Route path="/Pimpri-Chinchwad-to-Mumbai-Cab" element={<Pimprichichwadtomumbaicab />} />
        <Route path="/Baner-to-Mumbai-Cabs" element={<Banertomumbaicabs />} />
        <Route path="/Hinjewadi-to-Mumbai-Cab" element={<Hinjewaditomumbaicab />} />
        <Route path="/Pimple-Saudagar-to-Mumbai-Cab-Service" element={<Pimplesaudagartomumbaicab />} />
        <Route path="/Wakad-to-Mumbai-Cab" element={<Wakadtomumbaicab />} />
        <Route path="/Hadapsar-to-Mumbai-Cab" element={<Hadapsartomumbaicab />} />
        <Route path="/Kalyani-Nagar-to-Mumbai-Taxi" element={<Kalyaninagartomumbaitaxi />} />
        <Route path="/Koregaon-Park-to-Mumbai-Cab" element={<Koregaonparktomumbaicab />} />
        <Route path="/Kothrud-to-Mumbai-Cab" element={<Kothrudtomumbaicab />} />
        <Route path="/Kharadi-to-Mumbai-Cab" element={<Kharaditomumbaicab />} />
        <Route path="/Shivajinagar-to-Mumbai-Cab" element={<Shivajinagartomumbaicab />} />
        <Route path="/Pune-to-Mumbai-Ertiga-Cab" element={<Punetomumbaiertigacab />} />
        <Route path="/Pune-to-Mumbai-Innova-Crysta-Cab" element={<Punetomumbaiinnovacabs />} />
        <Route path="/Kondhwa-to-Mumbai-Cab" element={<Kondhwatomumbaicab />} />
        <Route path="/Viman-Nagar-to-Mumbai-Cabs" element={<Vimannagartomumbaicabs />} />
        <Route path="/Katraj-to-Mumbai-Cab-Service" element={<Katrajtomumbaicabservice />} />
        <Route path="/Pune-Station-to-Mumbai-Cabs-Service" element={<Punestationtomumaicab />} />
        <Route path="/Boat-Club-Road-to-Mumbai-Cab" element={<Boatclubaoadtomumbaicab />} />
        <Route path="/Vishrantwadi-to-Mumbai-Cab" element={<Vishrantwaditomumbaicab />} />
        <Route path="/Alandi-to-Mumbai-Cabs-Service" element={<Alanditomumbaicabservice />} />
        <Route path="/Wagholi-to-Mumbai-Cab" element={<Wagholitomumbaicabs />} />
        <Route path="/Mumbai-Airport-to-Pune-Cab" element={<Mumbaiairporttopunecab />} />
        <Route path="/Dadar-to-Pune-Cab" element={<Dadartopunecab />} />
        <Route path="/Mumbai-to-Pune-One-Way-Cab" element={<Mumbaitopuneonewaycab />} />
        <Route path="/Andheri-to-Pune-Cab" element={<Andheritopunecab />} />
        <Route path="/Bandra-to-Pune-Cab" element={<Bandratopunecab />} />
        <Route path="/Santacruz-to-Pune-Cab" element={<Santacruztopunecab />} />
        <Route path="/Mumbai-Central-to-Pune-Cab" element={<Mumbaicentraltopune />} />
        <Route path="/Borivali-to-Pune-Cab" element={<Borivalitopunecabs />} />
        <Route path="/Mumbai-to-Pimpri-Chinchwad-Cab" element={<Mumbaitopimprichichwadcab />} />
        <Route path="/Navi-Mumbai-to-Pune-Cab" element={<Navimumbaitopunecab />} />
        <Route path="/Mumbai-Airport-to-Pune-City-Cab" element={<Mumbaiairporttopunecitycab />} />
        <Route path="/Mumbai-to-Pune-Daily-Cab" element={<Mumbaitopunedailycab />} />
        <Route path="/Mumbai-Pune-Cab-Booking" element={<Mumbaipunecabbooking />} />
        <Route path="/Jogeshwari-to-Pune-Cab-Service" element={<Jogeshwaritopunecabservice />} />
        <Route path="/Goregaon-to-Pune-Cab" element={<Garegaontopunecab />} />
        <Route path="/Kandivali-to-Pune-Cab" element={<Kandivalitopunecab />} />
        <Route path="/Vile-Parle-to-Pune-Cab-Service" element={<Vileparletopunecab />} />
        <Route path="/Bhandup-to-Pune-Cab" element={<Bhanduptopunecab />} />
        <Route path="/Ghatkopar-to-Pune-Cab-Service" element={<Ghatkopartopunecabservice />} />
        <Route path="/Kurla-to-Pune-Taxi-Service" element={<Kurlatopunetaxiservice />} />
        <Route path="/Powai-Mumbai-Pune-Cab-Service" element={<Powaimumbaipunecab />} />
        <Route path="/Chembur-to-Pune-Cab" element={<Chemburtopunecab />} />
        <Route path="/Terminal-1-2-3-Mumbai-Airport-to-Pune-Cab" element={<Terminalmumbaiairport />} />
        <Route path="/Thane-to-Pune-Cab" element={<Thanetopunecab />} />
        <Route path="/Vikhroli-to-Pune-Cab-Services" element={<Vikharolitopunecabservice />} />
        <Route path="/Mumbai-to-Pune-Innova-Crysta-Cab" element={<Mumbaitopuneinnovacrystacab />} />
        <Route path="/Mumbai-Airport-to-Pune-Ertiga-on-Rent" element={<Mumbaiairporttopuneertigaonrent />} />
        <Route path="/Mumbai-Airport-Car-Rental" element={<Mumbaiairportcarrental />} />
        <Route path="/Panvel-to-Pune-Cab" element={<Panveltopunecab />} />
        <Route path="/Church-Gate-to-Pune-Cab-Service" element={<Churchgatetopunecabservice />} />
        <Route path="/Byculla-to-Pune-Cab-Service" element={<Bycullatopunecabservice />} />
        <Route path="/Vashi-to-Pune-Cab" element={<Vashitopunecab />} />
        <Route path="/Kharghar-to-Pune-Cab" element={<Kharghartopunecab />} />
        <Route path="/Mankhurd-to-Pune-Cab" element={<Mankhurdtopunecab />} />
        <Route path="/One-Way-Taxi-Mumbai-to-Pune" element={<Onewaytaximumbaitopune />} />
        <Route path="/Innova-Crysta-on-Rent-in-Pune" element={<Innovacrystaonrentinpune />} />
        <Route path="/Ertiga-Cab-Booking-in-Pune" element={<Ertigacabbookinginpune />} />
        <Route path="/Kia-Carens-On-Rent-in-Pune" element={<Kiacarenceonrentinpune />} />
        <Route path="/Swift-Dzire-On-Rent-in-Pune" element={<Swiftdezireonrentinpune />} />
        <Route path="/Sedan-Cabs-Booking-in-Pune" element={<Sedancabsbookinginpune />} />
        <Route path="/Force-Urbania-On-Rent-in-Pune" element={<Forceurbaniaonrentinpune />} />
        <Route path="/Fortuner-On-Rent-in-Pune" element={<Fortuneronrentinpune />} />
        <Route path="/pune-mumbai-cabs" element={<PuneMumbaiCab />} />
   


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
