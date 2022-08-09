import '../styles/Works.css'
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Works(){
    return(
        <div className='page-container'>
            <h1>PROJETS</h1>
            <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
            <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
            <div id="study-cases-container">
                <div className='study-case-card'>
                    <h5>PLATON</h5>
                    <Link to ="/works/platon-study-case"><button className='btn btn-dark'>VOIR</button></Link>
                </div>

                <div className='study-case-card'>
                    <h5>SOLANE</h5>
                    <Link to ="/works/solane-study-case"><button className='btn btn-dark'>VOIR</button></Link>
                </div>

                <div className='study-case-card'>
                    <h5>SEDAL</h5>
                    <Link to ="/works/sedal-study-case"><button className='btn btn-dark'>VOIR</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Works;