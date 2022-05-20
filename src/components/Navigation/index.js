// import React, {useState} from 'react';
// import { NavLink, useHistory, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import logo from './large.png'
// import './Navigation.css';
// import changeContact from '../NewSplash'

// function Navigation() {
    // const [showContact, setShowContact] = useState(false)
    // history = useHistory()
    // const sessionUser = useSelector(state => state.session.user);

    // let sessionLinks;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <ProfileButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (
    //         <>
    //             <NavLink to="/login">Log In</NavLink>
    //             <NavLink to="/signup">Sign Up</NavLink>
    //         </>
    //     );
    // }
    // function contactB(){
    //     <Redirect to='/contact'/>
    // }

//     return (
//         <ul className='navMain'>
//             <li>
//                 <NavLink exact to="/" className='logo'>Aaron Tufts</NavLink>
//                 <div className='socialBs'>
//                     <img className='sIcon' alt='social icon' src='https://img.icons8.com/ios-filled/344/github.png'></img>
//                     <img className='sIcon2' alt='social icon' src='https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png'></img>
//                 </div>
//                 {/* <NavLink className='contactB' to='/contact'>Contact</NavLink> */}
//                 <button className='contactB' onClick={()=> setShowContact(!showContact)}>Contact</button>
//             </li>
//         </ul>
//     );
// }

// export default Navigation;