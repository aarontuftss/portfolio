import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProjectsHolder.css'
import largeImg from '../../images/large-clone.png'
import test1 from '../../images/test1.png'
import test2 from '../../images/test2.png'
import ttt from '../../images/ttt.png'

function ProjectsHolder({ isLoaded }) {
    


    return (
        <div className='pHolder'>
            <div className='pjs'>
                <div className='Large'>
                    
                    <img src={largeImg} alt='projects' className='pImg'></img>
                    <h3>Medium Clone</h3>
                    <p>A Medium replica. Including user auth & crud functionality.</p>

                </div>
                <div className='SoundTube'>
                    <img src={test2} alt='projects' className='pImg'></img>
                    <h3>SoundTube Audio</h3>
                    <p>Audio streaming application. Features: crud - api usage - user auth </p>
                    
                </div>
                <div className='EmailVerify'>
                    <img src={test1} alt='projects' className='pImg'></img>
                    <h3>Email Verification</h3>
                    <p>A chrome extension for verifying contact information conveniently.</p>
                    
                </div>
                <div className='EmailVerify'>
                    <img src={ttt} alt='projects' className='pImg4'></img>
                    <h3>Tic-Tac-Toe Bot</h3>
                    <p>A clever tic-tac-toe bot that plays to win. Available on the Chrome Store.</p>
                    
                </div>
            </div>
            <h2>Project Gallery</h2>
        </div>
    );
}

export default ProjectsHolder;