import '../styles/SharedLayout.css'
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function SharedLayout(){
    return(
        <div id="navbar-page-container">
            <nav id="navbar">
                <div><Link to ="/" >Home</Link></div>
                <div><Link to ="/about" >About</Link></div>
                <div><Link to ="/works" >Works</Link></div>
                <button>Dark/Light</button>
            </nav>
            <Outlet/>
        </div>
    )
}

export default SharedLayout;