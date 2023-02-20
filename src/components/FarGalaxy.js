import React from 'react';
import {base_url} from "../utils/Constansts";
import styles from '../css/farGalaxy.module.css'

class FarGalaxy extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            textInfo:''
        }
    }

    componentDidMount(){
        const opening_crawl = sessionStorage.getItem('opening_crawl')
        if(opening_crawl){
            this.setState({textInfo:opening_crawl})
        } else {
            const num = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
            fetch(`${base_url}v1/films/${num}`)
                .then(response=>response.json())
                .then(data=>{
                    this.setState({textInfo:data.opening_crawl});
                    sessionStorage.setItem('opening_crawl',data.opening_crawl);
                });

        }
    }
    render() {
        return (
            <p className={styles.farGalaxy}>{this.state.textInfo}</p>
        );
    }


};

export default FarGalaxy;