import React from 'react';
import OptionItem from "./OptionItem";
import {base_url} from "../utils/Constansts";
import ContactForm from "./ContactForm";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            planets:[]
        }
    }
    componentDidMount(){
        fetch(`${base_url}/v1/planets`)
            .then(response=>response.json())
            .then(data=>{
                this.setState({planets:[...data.map(e=>e.name)]})

            })
            .catch(error => {
                console.error(error);
            })
    }
    render() {
        return (
           <ContactForm planets={this.state.planets}/>
        );
    }


};

export default Contact;