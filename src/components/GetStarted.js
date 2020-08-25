import React from 'react'
import Button from '@material-ui/core/Button';
import {styled} from '@material-ui/styles'
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const Butt = styled(Button)({
height: "50px",
width: '200px',
fontSize: '19px',
background: "linear-gradient(360deg, rgba(37,81,226,1) 0%, rgba(2,25,34,1) 100%)",
borderRadius: '15px',
color: 'white',
position: 'absalute',
top: '230px',
left: '560px'

});



export default function GetStarted(){
  
    return (
    <div className="center">
      <div className="menu-box">
        <div className="menu-box__left">
          <a className="menu-box__logo" href="/">
            <img className="menu-box__logo-img" alt="TO" src="../../logo.png" />
          </a>
          <Navbar/> 
        </div>
        <div className="menu-box__right">
          <ul className="menu__list_reg">
          <li className="menu__item">
          <Link className="menu__link" to="/signin">
            Sign in
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/register">
            Sign up
          </Link>
        </li>
          </ul>
          
        </div>
      </div>

      
      <h1 className='orgYourDay'>Organize Your Day</h1>
      <Butt> <a href='/home'>Get Started</a></Butt>
    </div>
    
  )
  
}
