import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/The-Royal-Rock-Logo.png"


function Navbar() {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, [sticky]);


    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
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