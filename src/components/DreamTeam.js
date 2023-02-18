import React from 'react';
import friend1 from "../img/friend1.jpg";
import friend2 from "../img/friend2.jpg";
import friend3 from "../img/friend3.jpg";
import friend4 from "../img/friend4.jpg";
import friend5 from "../img/friend5.jpg";
import friend6 from "../img/friend6.jpg";
import friend7 from "../img/friend7.jpg";
import friend8 from "../img/friend8.jpg";
import friend9 from "../img/friend9.jpg";
import {friends} from "../utils/Constansts";
import Friend from "./Friend";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border mx-1 mt-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((f,i)=><Friend key={i+1} friend={f} />)}
        </section>
    );
};

export default DreamTeam;