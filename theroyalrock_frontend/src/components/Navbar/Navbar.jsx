import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/The-Royal-Rock-Logo.png"


function Navbar() {
    return (
        <nav className="container">
            <img src={logo} alt="logo" />
            <ul >
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us </a></li>
                <li><a href="/services">What We Do</a></li>
                <li><a href="/contact">Contact Us</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;