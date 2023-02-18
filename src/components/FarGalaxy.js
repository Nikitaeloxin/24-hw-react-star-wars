import React from 'react';
import {base_url} from "../utils/Constansts";
// import {text} from "../utils/Constansts";

class FarGalaxy extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            textInfo:''
        }
    }

    componentDidMount(){
        const num = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
        fetch(`${base_url}v1/films/${num}`)
            .then(response=>response.json())
            .then(data=>{
                this.setState({textInfo:data.opening_crawl})
            })
    }
    render() {
        return (
            <p className="farGalaxy">{this.state.textInfo}</p>
        );
    }


};

export default FarGalaxy;