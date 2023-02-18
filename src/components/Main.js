import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import Home from "./Home";
import {navItems} from "../utils/Constansts";
import AboutMe from "./About me";
import StarWars from "./StarWars";
import Contact from "./Contact";
const Main = ({currentPage}) => {
    switch (currentPage){
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>
        default:
            return <Home/>
    }

};

export default Main;