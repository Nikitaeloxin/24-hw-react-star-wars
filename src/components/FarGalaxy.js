import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/Constansts";
import styles from '../css/farGalaxy.module.css'

const FarGalaxy =()=> {


    const [textInfo,setTextInfo] = useState();

    useEffect(()=>{
        const opening_crawl = sessionStorage.getItem('opening_crawl')
        if(opening_crawl){
           setTextInfo(opening_crawl)
        } else {
            const num = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
            fetch(`${base_url}v1/films/${num}`)
                .then(response=>response.json())
                .then(data=>{
                    const opening_crawl1 = data.opening_crawl;
                    setTextInfo(opening_crawl1)
                    sessionStorage.setItem('opening_crawl',opening_crawl1);
                });

        }
    },[])

        return (
            <p className={styles.farGalaxy}>{textInfo}</p>
        );



};

export default FarGalaxy;