import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/The-Royal-Rock-Logo.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, [sticky]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" loading="lazy" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">What We Do</Link></li>
        <li><Link to="/services">Gallery</Link></li>
        <li>
          <button className="btn">
            <Link to="/contact">Contact</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;