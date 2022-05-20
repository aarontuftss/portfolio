import React, {useEffect, useState} from 'react';
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

// import { NavLink, Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
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
import largeImg from '../../images/large-clone.png'
import test1 from '../../images/test1.png'
import test2 from '../../images/test2.png'
import ttt from '../../images/ttt.png'

// import Navigation from '../Navigation'

function NewSplash(props) {
    const [ySpeed, setYspeed] = useState(0)
    const [xSpeed, setXspeed] = useState(0)
    // const [showContact, setShowContact] = useState(false)
    const {test} = props

    console.log(test)

    useEffect(() => {
        console.log('hi')
    }, [test]);

    function parallax(e){
        const imgs = document.querySelectorAll(['.item'])
        console.log(imgs)
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
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
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
                <h4 className='ttext'>Javascript - SQL - Postgresql - React.js - Express.js - Node.js - Python - Redux.js - Flask - SQLAlchemy - HTML5 - CSS </h4>
                <div className='slide-container' hidden={test}>
                    <div className='cBox' hidden={(!test)}>
                        <h1>Contact Me</h1>
                        <p>Email: aarontuftss@gmail.com</p>
                        <p>Phone: (702)-810-2333</p>

                    </div>
                    <Slide {...properties} hidden={test}>
                        <div className='each-slide'>
                            <div>
                                <a href='https://large-medium.herokuapp.com/' target='_blank'><img src={largeImg} alt='projects' className='pImg1'></img></a>
                                <a href='https://large-medium.herokuapp.com/' target='_blank' className='linkB' >Live Link</a>
                                <a href='https://github.com/ethanchen7/Large' target='_blank' className='linkB' >Github Repo</a>
                            </div>
                            <div>
                                <h3>Large - Medium Clone</h3>
                                {/* <p>A Medium replica including user auth, crud functionality, and more.</p> */}
                                <p><strong>Features: </strong>CRUD Articles, Comments, Following, Account <br/>Creation & User Authorization</p>
                                <p><strong>Stack: </strong>SQL - Postgresql - Node.js - Express.js - Pug - Javascript - HTML - CSS</p>
                            </div>

                        </div>
                        <div className='each-slide'>
                            <div>
                                <a href='https://audiobyte.herokuapp.com/home' target='_blank' ><img src={test2} alt='projects' className='pImg1'></img></a>
                                <a href='https://audiobyte.herokuapp.com/home' target='_blank' className='linkB' >Live Link</a>
                                <a href='https://github.com/jonathontufts/audiobyte' target='_blank' className='linkB' >Github Repo</a>
                            </div>
                            <div>
                                <h3>SoundTube Audio</h3>
                                {/* <p>Audio streaming application. Features: crud - api usage - user auth </p> */}
                                <p><strong>Features: </strong>CRUD Songs, Comments, Account Creation & User Authorization - DeezerAPI usage to listen to any song.</p>
                                <p><strong>Stack: </strong>React.js - SQL - Postgresql - Node.js - Express.js - Javascript - HTML - CSS</p>

                            </div>
                            
                        </div>
                        <div className='each-slide'>
                            <div>
                                <a href='https://chrome.google.com/webstore/detail/free-email-checker/pbghlnngciboeibjckhadpjhgpnhjcid?hl=en&authuser=0' target='_blank' ><img src={test1} alt='projects' className='pImg1'></img></a>
                                <a href='https://chrome.google.com/webstore/detail/free-email-checker/pbghlnngciboeibjckhadpjhgpnhjcid?hl=en&authuser=0' target='_blank' className='linkB' >Live Link</a>
                                <a href='https://github.com/jonathontufts/email-checker' target='_blank' className='linkB' >Github Repo</a>
                            </div>
                            <div>
                                <h3>Email Verification</h3>
                                <p><strong>Features: </strong>A chrome extension for verifying contact information conveniently.</p>
                                <p><strong>Stack: </strong>Python - DnsPython - Flask - Javascript - HTML - CSS</p>
                                {/* <p>A chrome extension for verifying contact information conveniently.</p> */}

                            </div>
                            
                        </div>
                        <div className='each-slide'>
                            <div>
                                <a href='https://chrome.google.com/webstore/detail/impossible-tic-tac-toe/apjkgbbgbhmffnepmobpimdnckoamaga?hl=en&authuser=0' target='_blank' ><img src={ttt} alt='projects' className='pImg4'></img></a>
                                <a href='https://chrome.google.com/webstore/detail/impossible-tic-tac-toe/apjkgbbgbhmffnepmobpimdnckoamaga?hl=en&authuser=0' target='_blank' className='linkB1' >Live Link</a>
                                {/* <a href='' target='_blank' className='linkB' >Github Repo</a> */}
                            </div>
                            <div>
                                <h3>Tic-Tac-Toe Bot</h3>
                                <p><strong>Features: </strong>A clever tic-tac-toe bot that plays to win. Available on the Chrome Store.</p>
                                <p><strong>Stack: </strong> Javascript - HTML - CSS</p>
                                {/* <p>A clever tic-tac-toe bot that plays to win. Available on the Chrome Store.</p> */}
                            </div>
                            
                        </div>
                    </Slide>
                </div>
                <h5 className='ttext'>Salt Lake City, Utah - App Academy</h5>
            </div>

                {/* <div className='cBox' hidden={(!test)}>
                    <h1>Contact Me</h1>
                    <p>Email: jonathontufts.pro@gmail.com</p>
                    <p>Phone: (702)-810-2333</p>
                    <p>Email: jonathontufts.pro@gmail.com</p>

                </div> */}
            

        </div>
    );
}

export default NewSplash;