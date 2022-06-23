import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProjectsHolder from './components/ProjectsHolder';
import SplashPage from './components/SplashPage';
import ContactPage from './components/ContactPage';
import NewSplash from './components/NewSplash'
import './components/Navigation/Navigation.css'
function App() {
  const [showContact, setShowContact] = useState(false)
  const [cButtonText, setCButtonText] = useState('Contact')

  useEffect(() => {
    if (showContact){
      setCButtonText('Projects')
    }else{
      setCButtonText('Contact')
    }
    
  }, [showContact]);

  

  return (
    <>
      {/* <Navigation className='nav'/> */}
      <ul className='navMain'>
        <li>
          <NavLink exact to="/" className='logo'>Aaron Tufts</NavLink>
          <div className='socialBs'>
            <img className='sIcon' alt='social icon' src='https://img.icons8.com/ios-filled/344/github.png'></img>
            <img className='sIcon2' alt='social icon' src='https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png'></img>
          </div>
          <a href="mailto: aarontuftss@gmail.com" className="contactB">Send Email</a>
        </li>
      </ul>
        <div className='bodyHold'>
            <Switch>
              <Route exact path="/">
                <NewSplash test={showContact}/>
              </Route>
              <Route exact path="/contact">
                <ContactPage/>
              </Route>
            </Switch>
        </div>
    </>
  );
}

export default App;
