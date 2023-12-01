import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Footer</p>
    </footer>
  );
}

export default Footer;