import React from 'react'
import imgservice from '../../assets/image/img_service.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

let OurServices = (props) => {
    return ( 
        <div className='services' id='Services'>
            <div class="background-box">
                <img className='image-service' src={imgservice} alt=""/>
            </div>
            <div className='frame'>
                    <p className='text-services'>Best Car Rental for any kind of trip in (Lokasimu)!</p>
                    <p className='sewa'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <div className="frame-2">
                        {props.data.map((Our, index) => (
                            <div className="frame-3">
                                <i className={`icons ${Our.icons}`} key={index}></i>
                                <p className='p' key={index}>{Our.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default OurServices;