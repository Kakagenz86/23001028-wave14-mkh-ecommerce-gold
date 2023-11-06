import React from "react";
import { useState } from "react";
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import OurServices from "../../components/Our Services";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import WhyUsCard from "../../components/WhyUsCard";

const LandingPage = () => {

    let [WhyUs, setWhyUs] = useState([
        {
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
        },
    ])
    return (
        <div>
            <Navbar/>
            <Hero/>
            <OurServices/>
            {WhyUs.map((data) => {
                return (
                <WhyUsCard icons={data.icons} title={data.title} description={data.description} />
            )
            })}
            <Banner/>
            <Footer/>
        </div>
    )
}

export default LandingPage