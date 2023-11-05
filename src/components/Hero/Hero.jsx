import React from "react";

import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero=()=>{
    return(
        <div className="Hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS</h2>
                <div>
                    <div className="hero-hand-icon"></div>
                    <p>NEW</p>
                    <p>COLLECTIONS</p> 
                </div>
                
                
            
            <div className="hero-latest-btn">
                <div>Explore Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
            </div>

            <div className="hero-right">
                <img src={hero_img} alt="" />


            </div>

        </div>
    )
}
export default Hero