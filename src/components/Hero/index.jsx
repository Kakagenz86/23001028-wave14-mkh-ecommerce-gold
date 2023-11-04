import React from "react";
import { Button } from "./Button";
import "./style.css";

let Hero = () => {
    return (
        <div className="box">
            <div className="hero-section">
                <div className="overlap-group">
                    <div className="bg" />
                    <img className="img-car" alt="Img car" src="img-car.png" />
                    <p className="sewa-rental-mobil">Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                    <p className="text-wrapper">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu
                        siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <Button
                        className="button-instance"
                        divClassName="design-component-instance-node"
                        priority="primary"
                        state="normal"
                        text="Mulai Sewa Mobil"
                        type="text-only"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero