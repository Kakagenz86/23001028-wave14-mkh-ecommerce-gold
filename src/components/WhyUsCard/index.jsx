import React from "react";
import './style.css'

let WhyUsCard = (props) => {
    return (
        <div className="WhyUs" id="WhyUs">
                <h1 className="text">Why Us</h1>
                <p className="paragraf">Mengapa harus pilih Binar Car Rental?</p>
            <div className="content">
                {props.data.map((WhyUs) => (
                    <div className="wrapper">
                        <i className={WhyUs.icons}></i>
                        <h5 className="fw-bold mt-4">{WhyUs.title}</h5>
                        <p className="fw-medium lh-sm mt-4">{WhyUs.description}</p>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default WhyUsCard