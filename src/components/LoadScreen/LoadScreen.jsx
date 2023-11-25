import React from 'react';
import './LoadScreen.css';

import logo from '../../assets/logo.png';

const LoadScreen = () => {
  return (
    <div className='loadContainer'>
        <img className='spin' src={logo} alt=''></img>
    </div>
  )
}

export default LoadScreen