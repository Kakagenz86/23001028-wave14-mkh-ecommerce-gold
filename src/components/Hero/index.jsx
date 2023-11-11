import React from "react";
import { useState } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carimg from '../../assets/image/car.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";

let Hero = ({showButton}) => {
    return (
        <div className="section">
            <div class="header-section">
                <div class="section-box">
                    <p class="sewa-rental-mobil">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p> 
                    <p class="section-text">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
                        siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        {showButton && (<button className="btn-nav">Mulai Sewa Mobil</button>)}
                </div>
                <div className="background">
                    <img class="image-car" src={Carimg} alt="car-image" />
                </div>
            </div>
        </div>
    );
};

export default Hero