import React from 'react';
import hero from "../img/main.jpg";

const Hero = () => {
    return (
            <section className="float-start w-25 me-3">
                <img className="w-100" src={hero} alt="hero"/>
            </section>
    );
};

export default Hero;