
import React from 'react';
import BusRatesTable from './BusRatesTable';
import { Helmet } from 'react-helmet';

const Packages = () => {
  return (
   <div>
 





<div
      className="site-breadcrumb"
      style={{ background: 'url(./img/breadcrumb/01.jpg)' }}
    >
      <div className="container">
        <h2 className="breadcrumb-title">Packages  </h2>
        <ul className="breadcrumb-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="active">Packages</li>
        </ul>
      </div>
    </div>
 
<BusRatesTable/>

<div className="rules-guidelines container">
  <h2>Rules and Guidelines:</h2>
  <ul className="rules-list">
  <li>  Driver Allowance will charge extra.</li>
  <li>  Cab running km is limited to 300 km per day.</li>
  <li>  Time starts from 6:00 AM to 10:00 PM, and the cab must be free at 10:00 PM. After 10:00 PM, extra charges apply. Night charges apply from 12:00 AM to 6:00 AM.</li>
  <li>  Time and km will be calculated from our office to office.</li>
  <li>  Interstate taxes, toll taxes, parking, and service tax are charged as actuals.</li>
  <li>  Extra charges will apply for extra km and hours. Government taxes will be charged as per government rules.</li>
  <li>  The charges quoted above are calculated based on the current fuel prices. Any hike in fuel prices will result in a variation in rates.</li>
</ul>
  
</div>

   </div>
  );
};

export default Packages;
