import React from 'react';

const HeroInfo = ({heroInfo}) => {
    return (
        <div>
            <div>
                <h1>Name:{heroInfo.name}</h1>
                <h1>BirthDate:{heroInfo.birthYear}</h1>
                <h1>Eye color:{heroInfo.eye_color}</h1>
                <h1>Gender:{heroInfo.gender}</h1>
                <h1>Hair color:{heroInfo.hair_color}</h1>
                <h1>Height:{heroInfo.height}</h1>
                <h1>Mass:{heroInfo.mass}</h1>
                <img src={heroInfo.imgUrl} alt='sw hero'  />
            </div>
        </div>
    );
};

export default HeroInfo;