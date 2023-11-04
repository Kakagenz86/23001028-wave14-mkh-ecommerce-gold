import React from "react";
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import OurServices from "../../components/Our Services";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <OurServices/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default LandingPage