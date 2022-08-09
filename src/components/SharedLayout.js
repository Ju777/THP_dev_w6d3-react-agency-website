import '../styles/SharedLayout.css'
import React, { useState, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';

function SharedLayout(){

    const [ currentTheme, setCurrentTheme ] = useState('light');
    const { updateTheme } = useContext(ThemeContext);

    function handleClick(e){
        console.log(e.target.value);
        updateTheme(e.target.value);
        currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
    }

    return(
        <div id="navbar-page-container">
            <nav id="navbar">
                <div><Link to ="/" >Home</Link></div>
                <div><Link to ="/about" >About</Link></div>
                <div><Link to ="/works" >Works</Link></div>
                <button
                    value = {currentTheme}
                    onClick = { (e) => handleClick(e) }
                >{currentTheme === "light" ? "LIGHT MODE" : "DARK MODE" }
                </button>
            </nav>
            <Outlet/>
        </div>
    )
}

export default SharedLayout;