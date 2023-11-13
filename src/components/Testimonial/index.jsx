import React from 'react';
import './style.css';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

function Testimonial(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.data.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === props.data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='testimonial' id='Testimonial'>
      <p className='testi-p1'>Testimonial</p>
      <p className='testi-p2'>Berbagai review positif dari pelanggan kami</p>
      <div className="testi-wrap" style={{ transform: `translateX(-${currentIndex * 15}%)` }}>
        {props.data.map((Testi, index) => (
          <div className="list-testi" key={index}>
            <div className="testi-card">
              <img className='testi-img' src={Testi.image} alt="" />
              <div className="testi-text">
                <div>
                  {[...Array(5)].map((_, i) => (
                    <i className={`${Testi.icons} testi-star`} key={i}></i>
                  ))}
                </div>
                <div>
                  <p className='testi-desc'>{Testi.description}</p>
                  <p className='testi-div'>{Testi.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testi-carousel">
        <i className="testi-icon" onClick={handlePrevClick}><Icon.ChevronLeft /></i>
        <i className="testi-icon" onClick={handleNextClick}><Icon.ChevronRight /></i>
      </div>
    </div>
  );
}

export default Testimonial;