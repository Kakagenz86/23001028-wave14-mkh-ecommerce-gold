import React from 'react'
import './style.css'
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

function Testimonial(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
        // Fungsi untuk menggeser item ke kiri
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.data.length - 1 : prevIndex - 1));
    };
    
    // Fungsi untuk menggeser item ke kanan
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
    <div className='testimonial' id='Testimonial'>
            <p className='testi-p1'>Testimonial</p>
            <p className='testi-p2'>Berbagai review positif dari pelanggan kami</p>
            <div className="testi-wrap">
        {props.data.map((Testi, index) => (
            <div className="list-testi">
                <div className="testi-card">
                        <img className='testi-img' src={Testi.image} alt="" />
                <div className="testi-text">
                    <div>
                    {[...Array(5)].map((_, i) => (
                        <i className={`${Testi.icons} testi-star`} key={i}></i>
                        ))}
                    </div>
                    <div>
                    <p className='testi-desc' key={index}>{Testi.description}</p>
                    <p className='testi-div' key={index}>{Testi.name}</p>
                    </div>
                </div>
                </div>
            </div>
        ))}
            </div>
        <div class="testi-carousel">
                <i class="testi-icon" onClick={handlePrevClick}><Icon.ChevronLeft/></i>
                <i class="testi-icon" onClick={handleNextClick}><Icon.ChevronRight/></i>
        </div>
    </div>
);
}

export default Testimonial;