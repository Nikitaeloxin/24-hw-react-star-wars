import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {base_url, defaultText, navItems} from "./utils/Constansts";

const App =()=>{

    const [currentPage,setCurrentPage] = useState(navItems[0])


        return (
            <div className="container-fluid">
                <Header changePage={setCurrentPage} />
                <Main currentPage={currentPage}/>
                <Footer/>
            </div>
        );

}

export default App;
