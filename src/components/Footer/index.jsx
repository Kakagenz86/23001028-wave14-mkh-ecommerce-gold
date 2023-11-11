import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/image/logo.png'

const Footer = () => {
    return ( 
        <div>
            <div class="footer">
                <div class="row footer-header">
                    <div class="col-md-6 col-sm-12 col-xl-3 footer-address">
                        <p class="footer-text-wrapper">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p class="footer-text-wrapper">binarcarrental@gmail.com</p>
                        <p class="footer-text-wrapper">081-233-334-808</p>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xl-3 footer-nav">
                        <a class="footer-text-wrapper-2" href="#Services" >Our services</a>
                        <a class="footer-text-wrapper-2" href="#WhyUs" >Why Us</a>
                        <a class="footer-text-wrapper-2" href="#Testimonial" >Testimonial</a>
                        <a class="footer-text-wrapper-2" href="#FAQ" >FAQ</a>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xl-3 footer-coonect">
                        <p class="text-wrapper">Connect with us</p>
                    <div class="list-item">
                        <a href="#"><i class="bi bi-facebook footer-icon"></i></a>
                        <a href="https://www.instagram.com/kakaa_genzz/"><i class="bi bi-instagram footer-icon"></i></a>
                        <a href="#"><i class="bi bi-twitter footer-icon"></i></a>
                        <a href="#"><i class="bi bi-envelope footer-icon"></i></a>
                        <a href="#"><i class="bi bi-twitch footer-icon"></i></a>
                    </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xl-3 copyright">
                        <p class="footer-text-wrapper">Copyright Binar 2022</p>
                        <img src={logo} className='footer-logo' alt="binar-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;