import React from 'react';
import './slider.css'; // Make sure to adjust the path to your CSS file
// import img1 from './images/img-1.jpg'; // Import your images
// import img2 from './images/img-2.jpg';
// import img3 from './images/img-3.jpg';
// import img4 from './images/img-4.jpg';
// import img5 from './images/img-5.jpg';
// import img6 from './images/img-6.jpg';

const Slider = () => {
  return (
    <div className="wrapper">
      <i id="left" className="fa-solid fa-angle-left"></i>
      <ul className="carousel">
        <li className="card">
          <div className="img"></div>
          <h2>Blanche Pearson</h2>
          <span>Sales Manager</span>
        </li>
        <li className="card">
          <div className="img"></div>
          <h2>Joenas Brauers</h2>
          <span>Web Developer</span>
        </li>
        <li className="card">
          <div className="img"></div>
          <h2>Lariach French</h2>
          <span>Online Teacher</span>
        </li>
        <li className="card">
          <div className="img"></div>
          <h2>James Khosravi</h2>
          <span>Freelancer</span>
        </li>
        <li className="card">
          <div className="img"></div>
          <h2>Kristina Zasiadko</h2>
          <span>Bank Manager</span>
        </li>
        <li className="card">
          <div className="img"></div>
          <h2>Donald Horton</h2>
          <span>App Designer</span>
        </li>
      </ul>
      <i id="right" className="fa-solid fa-angle-right"></i>
    </div>
  );
};

export default Slider;
