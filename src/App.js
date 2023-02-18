import React from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {base_url, defaultText, navItems} from "./utils/Constansts";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentPage:navItems[0],
            text:defaultText,
            planets:''
        }
    }
    changePage = (currentPage) =>{
        if(currentPage===navItems[0]){
            const num = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
            fetch(`${base_url}v1/films/${num}`)
                .then(response=>response.json())
                .then(data=>{
                    this.setState({currentPage,text:data.opening_crawl})
                })
        }
        if(currentPage===navItems[3]){
            fetch(`${base_url}/v1/planets`)
                .then(response=>response.json())
                .then(data=>{
                   this.setState({currentPage,planets:[...data.map(e=>e.name)]})
                })
                .catch(error => {
                    console.error(error);
                })
        }
        else {
            this.setState({currentPage})
        }


    }
    render() {
        return (
            <div className="container-fluid">
                <Header changePage={this.changePage} />
                <Main currentPage={this.state.currentPage} text={this.state.text} planets={this.state.planets}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
