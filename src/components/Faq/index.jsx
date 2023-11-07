import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = (props) => {
    return (
        <div className='FAQ' id='FAQ'>
            <div className="text">
                <p className='text-wrapper'>Frequently Asked Question</p>
                <p className='paragraf'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="list-faq">
                <div className="faq-wrapper">
                    {props.data.map((FaqSection, index) => (
                            <div className="mt-3 overlap-group">
                                <i className={FaqSection.icons} key={index}></i>
                                <p className='text-wrapper-2' key={index}>{FaqSection.text}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;