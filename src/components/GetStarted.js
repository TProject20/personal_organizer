import React from 'react'
import Button from '@material-ui/core/Button';
import {styled} from '@material-ui/styles'
import { Link } from 'react-router-dom';

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
    <div>
          <hr className='hrLine'/>
         
          <h1 className='orgYourDay'>Organize Your Day</h1>
          <Butt> <a href='/signin'>Get Started</a></Butt>
    </div>
  )
  
}
