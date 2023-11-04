import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return ( 
        <div>
            <div class="footer">
                <div class="row header">
                    <div class="col-md-6 col-sm-12 col-xl-3 address">
                        <p class="text-wrapper">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p class="text-wrapper">binarcarrental@gmail.com</p>
                        <p class="text-wrapper">081-233-334-808</p>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xl-3 navigation">
                        <a class="text-wrapper-2" href="#Services" >Our services</a>
                        <a class="text-wrapper-2" href="#WhyUs" >Why Us</a>
                        <a class="text-wrapper-2" href="#Testimonial" >Testimonial</a>
                        <a class="text-wrapper-2" href="#FAQ" >FAQ</a>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xl-3 sosmed">
                        <p class="text-wrapper">Connect with us</p>
                    <div class="list-item">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-envelope"></i>
                        <i class="bi bi-twitch"></i>
                    </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xl-3 copyright">
                        <p class="text-wrapper">Copyright Binar 2022</p>
                        <p class="logo"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;