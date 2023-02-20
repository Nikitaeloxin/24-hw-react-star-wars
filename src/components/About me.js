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
    componentWillUnmount() {
        console.log('About me unmounted')
    }

    componentDidMount(){
        const aboutMe=JSON.parse(localStorage.getItem('aboutMe'));
        const date = new Date();
        if (aboutMe && (
            date.getFullYear().toString() <= localStorage.getItem('aboutMeExpDate_year')
            && date.getMonth().toString() <= localStorage.getItem('aboutMeExpDate_month')
            && date.getDate().toString() <= localStorage.getItem('aboutMeExpDate_date')
        )){

            this.setState({
                heroInfo: {
                    imgUrl: `${base_url}/${aboutMe.image}`,
                    name: aboutMe.name,
                    birthYear: aboutMe.birth_year,
                    eye_color:aboutMe.eye_color,
                    gender:aboutMe.gender,
                    hair_color:aboutMe.hair_color,
                    height:aboutMe.height,
                    mass:aboutMe.mass
                }
            })
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        heroInfo: {
                            imgUrl: `${base_url}/${data.image}`,
                            name: data.name,
                            birthYear: data.birth_year,
                            eye_color:data.eye_color,
                            gender:data.gender,
                            hair_color:data.hair_color,
                            height:data.height,
                            mass:data.mass

                        }
                    })
                    localStorage.setItem('aboutMe',JSON.stringify(data))
                    date.setDate(new Date().getDate() + 30);
                    localStorage.setItem('aboutMeExpDate_year', date.getFullYear().toString());
                    localStorage.setItem('aboutMeExpDate_month', date.getMonth().toString());
                    localStorage.setItem('aboutMeExpDate_date', date.getDate().toString());
                })
        }

        }

    render() {
        return (
            <HeroInfo heroInfo={this.state.heroInfo}/>
        );
    }

};

export default AboutMe;