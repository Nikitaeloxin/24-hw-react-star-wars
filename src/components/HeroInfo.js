import React from 'react';
import heroInfo from '../css/heroInfo.css'

const HeroInfo = ({heroInfo}) => {
    return (
            <div>
                <img src={heroInfo.imgUrl} class="img-thumbnail" alt='sw hero'  />
                <h1>Name:{heroInfo.name}</h1>
                <h2>BirthDate:{heroInfo.birthYear}</h2>
                <h2>Eye color:{heroInfo.eye_color}</h2>
                <h2>Gender:{heroInfo.gender}</h2>
                <h2>Hair color:{heroInfo.hair_color}</h2>
                <h2>Height:{heroInfo.height}</h2>
                <h2>Mass:{heroInfo.mass}</h2>
            </div>
    );
};

export default HeroInfo;