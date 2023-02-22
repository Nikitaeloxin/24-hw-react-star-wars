import React from 'react';
import heroInfoStyle from '../css/heroInfo.css'

const HeroInfo = ({hero}) => {
    console.log(hero)
    return (
            <div>
                <img src={hero.imgUrl} className="img-thumbnail" alt='sw hero'  />
                <h1>Name:{hero.name}</h1>
                <h2>BirthDate:{hero.birthYear}</h2>
                <h2>Eye color:{hero.eye_color}</h2>
                <h2>Gender:{hero.gender}</h2>
                <h2>Hair color:{hero.hair_color}</h2>
                <h2>Height:{hero.height}</h2>
                <h2>Mass:{hero.mass}</h2>
            </div>
    );
};

export default HeroInfo;