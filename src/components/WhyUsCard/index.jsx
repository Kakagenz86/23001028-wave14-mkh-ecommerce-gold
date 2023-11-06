import React from "react";
import './style.css'

let WhyUsCard = (props) => {
    return (
        <div className="row WhyUs" id="WhyUs">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih binar car rental</p>
            <div className="content col-md-6 col-sm-12 col-xl-3 pt-3">
                <i className={`${props.icons} text-center fs-5 pe-1 ps-1 text-white rounded-circle`}></i><br />
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default WhyUsCard