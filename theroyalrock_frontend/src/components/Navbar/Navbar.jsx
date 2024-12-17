import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/The-Royal-Rock-Logo.png"


function Navbar() {
    return (
        <nav className="container">
            <img src={logo} alt="logo" />
            <ul >
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">What We Do</a></li>
                <li><a href="/services">Gallary</a></li>
                <li>
                    <button className="btn">
                    <a href="/contact">Contact</a>
                    </button>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;