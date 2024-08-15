import React from 'react';
import './hero.css';
import profile from '../../assets/Atul ranjan.png';

function Hero() {
  return (
    <div id ="home" className='hero'>
      <img src={profile} alt="Atul Ranjan" />
      <h1><span>I'm Atul Ranjan</span>, Frontend Developer Based in India</h1>
      <p>I am a Developer from India with 10 years of experience.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
