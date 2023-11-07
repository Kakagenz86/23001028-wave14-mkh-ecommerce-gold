import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Image1 from '../../assets/image/img1.png'
import Image2 from '../../assets/image/img2.png'

const Testimonial = ({data}) => {
    return (
        <div className="testimonial" id='Testimonial'>
            <div className='p1'>{data.header}</div>
            <div className='p2'>{data.paragraf}</div>
                <div className="testi">
                    <img className='img' src={Image1} alt=""/>
                    <img className='img' src={Image2} alt=""/>
                    <div className="text">
                    <div>
                        <i className={`${data.icons} icons`}></i>
                        <i className={`${data.icons} icons`}></i>
                        <i className={`${data.icons} icons`}></i>
                        <i className={`${data.icons} icons`}></i>
                        <i className={`${data.icons} icons`}></i>
                    </div>
                        <p className='text-wrapper'>{data.description}</p>
                        <p className='div'>{data.name}</p>
                    </div>
                </div>
        </div>
    );
}

export default Testimonial;