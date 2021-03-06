import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button'
import './HeroSection.css'

function HeroSection() {
    const theme = useSelector(state => state)
    return (
        <div className={`hero-container ${theme === 'light' ? 'light' : 'dark'}`}>
            {/* <video src="videos/video-1.mp4" autoPlay loop muted/> */}
            <h1>KAZAKHSTAN'S BEAUTIFUL PLACES</h1>
            <p>So, what are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/></Button>
            
            </div>
            

        </div>
    )
}

export default HeroSection