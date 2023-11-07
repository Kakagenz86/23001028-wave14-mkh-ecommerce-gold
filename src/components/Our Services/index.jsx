import React from 'react'
import HappyImg from '../../assets/image/Happygirl1.png'
import HappyImage from '../../assets/image/Happygirl2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

let OurServices = (props) => {
    return ( 
        <div className='services' id='Services'>
            <div class="background-box">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <img className='image-service1' src={HappyImg} alt=""/>
                <img className='image-service2' src={HappyImage} alt=""/>
            </div>
            <div className='frame'>
                    <p className='fw-bold text-services'>Best Car Rental for any kind of trip in (Lokasimu)!</p>
                    <p className='fw-bolder sewa'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll</p>
                <div className="frame-2">
                        {props.data.map((Our, index) => (
                            <div className="frame-3">
                                <div className="group"><i className={Our.icons} key={index}></i></div>
                                <p className='p' key={index}>{Our.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default OurServices;