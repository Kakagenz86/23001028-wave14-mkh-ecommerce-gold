import React from "react";
import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="wrapper">
            <div className="left">
                <div className="logo"></div>
            </div>
            <ul className="right">
                <li><a className="link" href="#ourservices">Our Services</a></li>
                <li><a className="link" href="#whyus">Why Us</a></li>
                <li><a className="link" href="#testimonial">Testimonial</a></li>
                <li><a className="link" href="#faq">FAQ</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar