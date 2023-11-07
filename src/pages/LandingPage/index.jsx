import React from "react";
import { useState } from "react";
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import OurServices from "../../components/Our Services";
import WhyUsCard from "../../components/WhyUsCard";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import Testimonial from "../../components/Testimonial";


const LandingPage = () => {
    let WhyUs = [{
        icons: "bi bi-hand-thumbs-up bg-warning",
        title: "Mobil Lengkap",
        description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
    },
    {
        icons: "bi bi-tag bg-danger",
        title: "Harga Murah",
        description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
    },
    {
        icons: "bi bi-clock bg-primary",
        title: "Layanan 24 jam",
        description: "melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia diakhir minggu"
    },
    {
        icons: "bi bi-award bg-success",
        title: "Sopir profesional",
        description: "Sopir yang berprofesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
    }]

    
    let Our = [{
        icons: "bi bi-check2",
        description: "Sewa Mobil Dengan Supir di Bali 12 Jam"
    },
    {
        icons: "bi bi-check2",
        description: "Sewa Mobil Lepas Kunci di Bali 24 Jam"
    },
    {
        icons: "bi bi-check2",
        description: "Sewa Mobil Jangka Panjang Bulanan"
    },
    {
        icons: "bi bi-check2",
        description: "Gratis Antar - Jemput Mobil di Bandara"
    },
    {
        icons: "bi-check2",
        description: "Layanan Airport Transfer / Drop In Out"
    }]

    let Testi = [{
        header: 'Testimonial',
        paragraf: 'Berbagai review positif dari para pelanggan kami'
    },
    {
        icons: "bi bi-star-fill",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        name: 'John Dee 32, Bromo'
    },
    {
        icons: "bi bi-star-fill",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        name: 'John Dee 32, Bromo'
    },
    {
        icons: "bi bi-star-fill",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        name: 'John Dee 32, Bromo'
    }]

    let FaqSection = [{
        icons: 'bi bi-chevron-down',
        text: 'Apa saja syarat yang dibutuhkan?',
    },
    {
        icons: 'bi bi-chevron-down',
        text: 'Berapa hari minimal sewa mobil lepas kunci?',
    },
    {
        icons: 'bi bi-chevron-down',
        text: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
    },
    {
        icons: 'bi bi-chevron-down',
        text: 'Apakah Ada biaya antar-jemput?',
    },
    {
        icons: 'bi bi-chevron-down',
        text: 'Bagaimana jika terjadi kecelakaan',
    },
]

    return (
        <div>
            <Navbar/>

            <Hero/>

            <OurServices data={Our}/>
            
            <WhyUsCard data={WhyUs}/>

            {Testi.map((testi) => (
                <Testimonial data={testi}/>
            ))}

            <Banner/>

            <Faq data={FaqSection}/>
            
            <Footer/>
        </div>
    )
}

export default LandingPage