import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import worksList from '../data/worksList';

function Work(){

    const workSlug = useParams().workSlug;
    const [ workToDisplay, setWorkToDisplay ] = useState(worksList.find(work => work.slug === workSlug));
    
    return(
        <div id="">
            <h1>Current page : WORK {workToDisplay.name}</h1>
            <h3>{workToDisplay.title}</h3>
            <p>{workToDisplay.description}</p>
        </div>
    )
}

export default Work;