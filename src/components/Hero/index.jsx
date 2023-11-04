import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carimg from '../../assets/image/car.png'

let Hero = () => {
    return (
        <div>
            <div class="section">
                <div class="header-section">
                    <div class="section-box">
                        <p class="sewa-rental-mobil">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p> 
                        <p class="section-text">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
                            siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <div class="button">
                                <a class="text-here">Mulai Sewa Mobil</a>
                            </div>
                    </div>
                    <img class="image-car" src={Carimg} />
                    <div class="background"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero