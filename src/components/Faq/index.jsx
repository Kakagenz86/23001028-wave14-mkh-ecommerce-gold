import React from 'react'
import './style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = (props) => {
    return (
        <div className="faq" id='FAQ'>
            <div className='section-faq'>
                <div className="faq-text">
                    <p className='faq-text-wrapper'>Frequently Asked Question</p>
                    <p className='faq-p'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <div className="faq-wrapper">
                    {props.data.map((FaqSection, index) => (
                                    <div className="mt-3 faq-group">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic"  className='faq-wrapper-2' key={index}>
                                            {FaqSection.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='faq-item'>
                                                <Dropdown.Item href="#/action-1">Agra</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Agya</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Ayla</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;