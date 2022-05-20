import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './SplashPage.css'

function SplashPage({ isLoaded }) {
    


    return (
        <div className='sHolder'>
            {/* <div className='subHold'> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xcJtL7QggTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                <h1>Jonathon Tufts | Full Stack Developer</h1>
                <h5>Salt Lake City, Utah - App Academy</h5>
                <h4>Javascript - SQL - Postgresql - React.js - Express.js - Node.js - Python - Redux.js - Flask - HTML5 - CSS </h4>

            {/* </div> */}
        </div>
    );
}

export default SplashPage;