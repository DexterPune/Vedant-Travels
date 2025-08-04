// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import './css/all-fontawesome.min.css';
// import './css/animate.min.css';
// import './css/bootstrap.min.css';
// import './css/nice-select.min.css';
// import './css/style.css';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/all-fontawesome.min.css';
import './css/animate.min.css';
import './css/bootstrap.min.css';
import './css/nice-select.min.css';
import './css/style.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Restore original route after 404.html redirect
const redirectPath = sessionStorage.getItem('redirect');
if (redirectPath) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirectPath);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
