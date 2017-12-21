import React, { Component } from 'react';
import '../assets/css/Home.css';
import logoImg from '../assets/images/techtrix_logo.png';

class Home extends Component {
  render() {
    return(
      <div className='Home'>
        <div className='logoWrap'>
          <img className='logo whiteGlow' src={logoImg} alt='Techtrix 2018 Logo' />
          <div className='logoBlurb'>
            <div className='eventName'>
              <span className='fireGlow'>TECH</span>
              <span className='whiteGlow'>TRIX</span>
            </div>
            <div className='tagline'>
              <span className='whiteGlow thin'>RISING</span>&nbsp;
              <span className='whiteGlow thin'>FROM</span>&nbsp;
              <span className='fireGlow thin'>THE</span>&nbsp;
              <span className='fireGlow thin'>ASHES</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
