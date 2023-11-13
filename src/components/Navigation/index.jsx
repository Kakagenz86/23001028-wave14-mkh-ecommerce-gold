import React from "react";
import './style.css'
import logo from '../../assets/image/logo.png'

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm">
                <div class="container navbar-header">
                    <img className="logo" src={logo} alt="binar-logo"/>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="offcanvas offcanvas-end sidebar" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="navbar-nav ms-auto nav-link">
                            <a href="/#Services">Our Services</a>
                            <a href="/#WhyUs">Why Us</a>
                            <a href="/#Testimonial">Testimonial</a>
                            <a href="/#FAQ">FAQ</a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation