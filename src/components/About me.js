import React, {useEffect, useState} from 'react';
import {base_url, period_month} from "../utils/Constansts";
import HeroInfo from "./HeroInfo";

const AboutMe = () => {
    const [hero, setHero] = useState('');

    useEffect(() => {
        const hero1 = JSON.parse(localStorage.getItem('hero'));
        console.log(!!hero1)
        const date = localStorage.getItem('heroExpDate');
        if (hero1 && ((Date.now() - date) < period_month)) {
            setHero(hero1)
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const hero2 =
                        {
                            "imgUrl": `${base_url}/${data.image}`,
                            "name": data.name,
                            "birthYear": data.birth_year,
                            "eye_color": data.eye_color,
                            "gender": data.gender,
                            "hair_color": data.hair_color,
                            "height": data.height,
                            "mass": data.mass
                        };
                    setHero(hero2)
                    localStorage.setItem('hero', JSON.stringify(hero2))
                    localStorage.setItem('heroExpDate', Date.now());
                })
        }
        return () => console.log('About me unmounted')
    }, [])


    return (
        <HeroInfo hero={hero}/>
    );


};

export default AboutMe;