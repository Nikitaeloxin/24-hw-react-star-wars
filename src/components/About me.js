import React from 'react';
import {base_url} from "../utils/Constansts";
import HeroInfo from "./HeroInfo";

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            heroInfo:{

            }
        }
    }

    componentDidMount(){
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => this.setState({
                    heroInfo: {
                        name: data.name,
                        birthYear: data.birth_year,
                        eye_color:data.eye_color,
                        gender:data.gender,
                        hair_color:data.hair_color,
                        height:data.height,
                        mass:data.mass,
                        imgUrl: `${base_url}/${data.image}`
                    }
                }))
        }

    render() {
        return (
            <HeroInfo heroInfo={this.state.heroInfo}/>
        );
    }

};

export default AboutMe;