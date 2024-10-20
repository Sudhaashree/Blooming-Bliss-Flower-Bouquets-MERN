// src/components/About.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <main className="about-content">
        <h2>Welcome to Our Flower Shop!</h2>
        <p>
          At our flower shop, we believe that flowers are the perfect way to express your feelings. Whether its a bouquet for a loved one, a centerpiece for a special event, or a simple gesture to brighten someone's day, we have the perfect blooms for every occasion.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide high-quality flowers and exceptional service to our customers. We source our flowers from local growers and select only the freshest and most vibrant blooms.
        </p>
        <h3>Our Story</h3>
        <p>
          Founded in 2024, our flower shop has been serving the community with passion and dedication. Our team of skilled florists is committed to creating stunning floral arrangements that bring joy and beauty to your life.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or need assistance, feel free to contact us at <strong>info@flowershop.com</strong> or visit us at our physical store located at 123 Flower Lane, Floral City.
        </p>
        
        {/* Add a button to navigate back to Home */}
        <Link to="/">
          <button className="back-home-btn">Back to Home</button>
        </Link>
      </main>
    </div>
  );
};

export default About;
