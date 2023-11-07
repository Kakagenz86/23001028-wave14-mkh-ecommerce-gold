import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Banner = () => {
    return ( 
        <div>
            <div class="banner">
                <div class="header-banner">
                    <p class="text">Sewa Mobil di (Lokasimu) Sekarang</p>
                    <p class="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                        <a href="src/pages/DetailCarPage/index.jsx"><button class="btn-banner">Mulai Sewa Mobil</button></a>
                </div>
            </div>
        </div>
    );
}

export default Banner;