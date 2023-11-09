import React from 'react'
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Carousel from 'react-bootstrap/Carousel';

function Testimonial(props) {
    return (
        <div className='testimonial'>
            <p className='p1'>Testimonial</p>
            <p className='p2'>Berbagai review positif dari pelanggan kami</p>
        <Carousel data-bs-theme="dark">
        {props.data.map((Testi, index) => (
            <Carousel.Item key={index}>
            <div className="list-testi">
                <div className="testi">
                <img className='img' src={Testi.image} alt="" />
                <div className="text">
                    <div>
                    {[...Array(5)].map((_, i) => (
                        <i className={`${Testi.icons} icons`} key={i}></i>
                    ))}
                    </div>
                    <div>
                    <p className='text-wrapper' key={index}>{Testi.description}</p>
                    <p className='div' key={index}>{Testi.name}</p>
                    </div>
                </div>
                </div>
            </div>
            </Carousel.Item>
        ))}
        </Carousel>
        </div>
);
}

export default Testimonial;
