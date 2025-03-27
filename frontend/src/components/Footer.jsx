import React from "react";
import Lythira from '../assets/lythira.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Lythira</h3>
          <p>
            Lythira is an AI-powered healthcare assistant designed for disease management,
            health insights, and interactive medical learning.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:naviin2373@gmail.com">naviin2373@gmail.com</a><br></br>Phone Number: (+60)16-355-2145</p>
        </div>
        <div className = "footer-contact">
            <h3>Location</h3>
            <p>Kuala Lumpur, Malaysia</p>
        </div>
        <div className="footer-list">
            <h3>Directory</h3>
            <li>Home</li>
            <li>Privacy Policy</li>
            <li>Predict & Learn</li>
        </div>
        <div className="footer-list">
            <h3><br></br></h3>
            <li>Disease Detection</li>
            <li>AI Chatbot</li>
        </div>
        <div className="footer-title">
            Lythira
        </div>
        <div className= "footer-logo">
            <img src ={Lythira}  height={"80px"}></img>
        </div>


      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Lythira. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
