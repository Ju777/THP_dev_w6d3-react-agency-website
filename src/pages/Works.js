import '../styles/Works.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Works(){
    return(
        <div id="">
            <h1>Current page : WORKS</h1>
            <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
            <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
            <div id="study-cases-container">
                <div className='study-case-card'>
                    <h5>PLATON</h5>
                    <button className='btn btn-warning'><Link to ="/works/platon-study-case">VOIR</Link></button>
                </div>

                <div className='study-case-card'>
                    <h5>SOLANE</h5>
                    <button className='btn btn-warning'><Link to ="/works/solane-study-case">VOIR</Link></button>
                </div>

                <div className='study-case-card'>
                    <h5>SEDAL</h5>
                    <button className='btn btn-warning'><Link to ="/works/sedal-study-case">VOIR</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Works;