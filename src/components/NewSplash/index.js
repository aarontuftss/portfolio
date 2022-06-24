import React, {useState} from 'react';
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import './NewSplash.css'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'
import five from './images/5.png'
import six from './images/6.png'
import seven from './images/7.png'
import eight from './images/8.png'
import nine from './images/9.png'
import ten from './images/10.png'
import eleven from './images/11.png'
import twelve from './images/12.png'



import bbv from '../../images/bbv.png'
import wine from '../../images/wine.png'
import email from '../../images/email.png'
import audio from '../../images/audio.png'


function NewSplash() {
    const [ySpeed, setYspeed] = useState(0)
    const [xSpeed, setXspeed] = useState(0)


    function parallax(e){
        const imgs = document.querySelectorAll(['.item'])
        imgs.forEach(item => {
            const speed = item.getAttribute('dataspeed')
            
            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100
            
            setXspeed(x)
            setYspeed(y)
        })
    }

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
        }
    };
    


    return (
        <div className='bg-wrap' onMouseMove={parallax}>
            <img src={one} dataspeed='-1' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * -0.5}px, ${ySpeed * 1}px)`}}></img>
            <img src={two} dataspeed='2' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * -1}px, ${ySpeed * 0.5}px)`}}></img>
            <img src={three} dataspeed='-5' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 0.9}px, ${ySpeed * -1.5}px)`}}></img>
            <img src={four} dataspeed='7' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 1}px, ${ySpeed * -1}px)`}}></img>
            <img src={five} dataspeed='-3' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 1}px, ${ySpeed * 0.7}px)`}}></img>
            <img src={six} dataspeed='5' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * -0.5}px, ${ySpeed * -1}px)`}}></img>
            <img src={seven} dataspeed='2' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 0.5}px, ${ySpeed * 1.5}px)`}}></img>
            <img src={eight} dataspeed='-7' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 2}px, ${ySpeed * 2}px)`}}></img>
            <img src={nine} dataspeed='3' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 1}px, ${ySpeed * -1}px)`}}></img>
            <img src={ten} dataspeed='-5' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * -1}px, ${ySpeed * 0.5}px)`}}></img>
            <img src={eleven} dataspeed='2' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 2}px, ${ySpeed * 1}px)`}}></img>
            <img src={twelve} dataspeed='5' className='item' alt='bg-img' style={{transform: `translate(${xSpeed * 1}px, ${ySpeed * -1}px)`}}></img>
            <div className='mainCenter' onMouseMove={parallax}>
                
                

                <h1 className='ttext'>Aaron Tufts | Full Stack Engineer</h1>

                <div className='mobileWrap'>
                    <div className='mobileheader'>Recent Projects</div>

                    <div className='projectCard'>
                        <img className='mobileImg' src={bbv} alt=''></img>
                        <div className='mobileText'>
                            <h1>- Big Bear Visits -</h1>
                            <h1>Express / React</h1>
                            <h1>Scalable Vacation Rental Software Themed In Big Bear Lake, CA</h1>
                        </div>
                    </div>

                    <div className='projectCard'>
                        <img className='mobileImg' src={audio} alt=''></img>
                        <div className='mobileText'>
                            <h1>- AudioByte -</h1>
                            <h1>Express / React</h1>
                            <h1>Music Streaming Application With An Optimized User Interface</h1>
                        </div>
                    </div>


                    <div className='projectCard'>
                        <img className='mobileImg' src={wine} alt=''></img>
                        <div className='mobileText'>
                            <h1>- Wineaux -</h1>
                            <h1>Flask / React</h1>
                            <h1>Dynamic Social Media Platform For Discovering And Reviewing New Wines</h1>
                        </div>
                    </div>


                    <div className='projectCard'>
                        <img className='mobileImg' src={ email} alt=''></img>
                        <div className='mobileText'>
                            <h1>- Email Verification -</h1>
                            <h1>Flask / JS & HTML</h1>
                            <h1>Scalable Vacation Rental Software</h1>
                        </div>
                    </div>



                </div>

                <h4 className='ttext'>Javascript - SQL - Postgresql - React.js - Express.js - Node.js - Python - Redux.js - Flask - SQLAlchemy - HTML5 - CSS </h4>
                
                <div className='slide-container'>
                    <Slide {...properties}>
                        <div className='each-slide'>
                            <div>
                                <a href='https://large-medium.herokuapp.com/' target='_blank'><img src={bbv} alt='projects' className='pImg1'></img></a>
                                <a href='https://large-medium.herokuapp.com/' target='_blank' className='linkB' >Live Link</a>
                                <a href='https://github.com/ethanchen7/Large' target='_blank' className='linkB' >Github Repo</a>
                            </div>
                            <div>
                                <h3>Big Bear Visits - Express / React</h3>
                                {/* <p>A Medium replica including user auth, crud functionality, and more.</p> */}
                                <p>Integrated Google Maps API with the Geocode API and custom search functionality to dynamically present available properties based on user parameters.</p>
                                <p>Designed dynamic data-visualizations with Javascript implemented algorithms based on all actions possible associated with the user’s profile.</p>
                            </div>

                        </div>
                        <div className='each-slide'>
                            <div>
                                <a href='https://audiobyte.herokuapp.com/home' target='_blank' ><img src={audio} alt='projects' className='pImg1'></img></a>
                                <a href='https://audiobyte.herokuapp.com/home' target='_blank' className='linkB' >Live Link</a>
                                <a href='https://github.com/jonathontufts/audiobyte' target='_blank' className='linkB' >Github Repo</a>
                            </div>
                            <div>
                                <h3>AudioByte - Express / React</h3>
                                {/* <p>Audio streaming application. Features: crud - api usage - user auth </p> */}
                                <p>Designed a universal search component that queries both the local database and Deezer’s REST API allowing the user to find both  locally uploaded music as well as any song on major streaming platforms.</p>
                                <p>Integrated React Player with Redux’s global store by dispatching actions only when sharing information across components and encapsulating music player data to give the user a seamless, uninterrupted experience.</p>

                            </div>
                            
                        </div>
                        <div className='each-slide'>
                            <div>
                                <a href='https://chrome.google.com/webstore/detail/free-email-checker/pbghlnngciboeibjckhadpjhgpnhjcid?hl=en&authuser=0' target='_blank' ><img src={wine} alt='projects' className='pImg1'></img></a>
                                <a href='https://chrome.google.com/webstore/detail/free-email-checker/pbghlnngciboeibjckhadpjhgpnhjcid?hl=en&authuser=0' target='_blank' className='linkB' >Live Link</a>
                                <a href='https://github.com/jonathontufts/email-checker' target='_blank' className='linkB' >Github Repo</a>
                            </div>
                            <div>
                                <h3>Wineaux - Flask / React</h3>
                                <p>Ensured application security  through frontend and backend authentication measures allowing users to only access and make changes to their own records.</p>
                                <p>Utilized Redux architecture’s unidirectional data flow with React for predictable state and reliable DOM rendering.</p>
                            </div>

                        </div>
                        <div className='each-slide'>
                            <div>
                                <a href='https://chrome.google.com/webstore/detail/free-email-checker/pbghlnngciboeibjckhadpjhgpnhjcid?hl=en&authuser=0' target='_blank' ><img src={email} alt='projects' className='pImg1'></img></a>
                                <a href='https://chrome.google.com/webstore/detail/free-email-checker/pbghlnngciboeibjckhadpjhgpnhjcid?hl=en&authuser=0' target='_blank' className='linkB' >Live Link</a>
                                <a href='https://github.com/jonathontufts/email-checker' target='_blank' className='linkB' >Github Repo</a>
                            </div>
                            <div>
                                <h3>Email Verification - Flask / Javascript & HTML</h3>
                                <p>Easily verify the deliveability of an email to any email address with this Google Chrome Extension - 30+ Active Users</p>
                                <p>Successfuly deployed a Flask API on Python Anywhere to run a verification process on perameters defined by the user's input on the front end.</p>

                            </div>
                            
                        </div>
                    </Slide>
                </div>
                <h5 className='ttext'>Salt Lake City, Utah - App Academy</h5>
            </div>

        </div>
    );
}

export default NewSplash;