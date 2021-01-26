import React from 'react';
import './Footer.scss';

import FakeForm from '../FakeForm/FakeForm';
import SocialMedia from '../SocialMedia/SocialMedia';

const footer = () => (
  <footer className="footer">
    <div className="questions">
      <div className="questions-wrapper">
        <div className="questions-text">
          <h3 className="title">New Customers</h3>
          <p className="subtitle">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
        </div>
        <FakeForm/> 
      </div>
    </div>
    <SocialMedia />
    <div className="support-section">
      <div className="support-wrapper">
        <div className="buy-from-us">
          <h4>Buy from Us</h4>
          <p>Women</p>
          <p>Accessories</p>
        </div>
        <div className="online-shop">
          <h4>Online Shop</h4>
          <p>How to Buy</p>
          <p>Questions</p>
          <p>Sales</p>
          <p>Delivery cost</p>
          <p>Regulations</p>
        </div>
        <div className="about-us">
          <h4>About Us</h4>
          <p>Who We Are</p>
          <p>Work with Us</p>
          <p>Social Media</p>
          <p>Our Stores</p>
        </div>
        <div className="support">
          <h4>Support</h4>
          <p>Contact</p>
          <p>Find Store</p>
          <p>Customer Service</p>
          <p>Privacy & Cookies</p>
          <p>Security</p>
        </div>
      </div>
    </div>
    <p className="advertising">Made by Misha Akram,   Iqra Irfan,   Soniya Shafi,    Mujtuba</p>
  </footer>
);

export default footer;