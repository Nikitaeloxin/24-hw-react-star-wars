import React from 'react';
import OptionItem from "./OptionItem";
import {base_url, expDays} from "../utils/Constansts";
import ContactForm from "./ContactForm";


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }

    componentWillUnmount() {
        console.log('Contact me unmounted')
    }

    componentDidMount() {
        const planetsArr = localStorage.getItem('planetsArr');
        const date = new Date();
        if (planetsArr && (
            date.getFullYear().toString() === localStorage.getItem('planetsExpDate_year')
            && date.getMonth().toString() <= localStorage.getItem('planetsExpDate_month')
            && date.getDate().toString() <= localStorage.getItem('planetsExpDate_date')
        )) {
            this.setState({planets: planetsArr.split(',')});
        } else {
            fetch(`${base_url}/v1/planets`)
                .then(response => response.json())
                .then(data => {
                    this.setState({planets: [...data.map(e => e.name)]})
                    localStorage.setItem('planetsArr', data.map(e => e.name))
                    date.setDate(new Date().getDate() + expDays);
                    localStorage.setItem('planetsExpDate_year', date.getFullYear().toString());
                    localStorage.setItem('planetsExpDate_month', date.getMonth().toString());
                    localStorage.setItem('planetsExpDate_date', date.getDate().toString());
                })
                .catch(error => {
                    console.error(error);

                })
        }

    }

    render() {
        return (
            <ContactForm planets={this.state.planets}/>
        );
    }


};

export default Contact;