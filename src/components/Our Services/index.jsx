import React from 'react'
import HappyImg from '../../assets/image/Happygirl1.png'
import HappyImage from '../../assets/image/Happygirl2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const OurServices = () => {
    return ( 
        <div>
                <div class="services" id="Services">
        <div class="background-box">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <img class="image-service1" src={HappyImage}/>
            <img class="image-service2" src={HappyImg}/>
        </div>
        <div class="desc">
            <div class="frame">
                <p class="text-services">Best Car Rental for any kind of trip in (Lokasimu)!</p>
                <p class="sewa">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                dll.
                </p>
            <div class="frame-2">
            <div class="frame-3">
            <div class="group"><i class="bi bi-check-lg"></i></div>
                <p class="p">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div class="frame-3">
            <div class="group"><i class="bi bi-check-lg"></i></div>
                <p class="p">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div class="frame-3">
            <div class="group"><i class="bi bi-check-lg"></i></div>
                <p class="p">Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div class="frame-3">
            <div class="group"><i class="bi bi-check-lg"></i></div>
                <p class="p">Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div class="frame-3">
            <div class="group"><i class="bi bi-check-lg"></i></div>
                <p class="p">Layanan Airport Transfer / Drop In Out</p>
            </div>
            </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default OurServices;