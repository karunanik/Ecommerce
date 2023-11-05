import React from "react";
import './Newsletter.css'
const Newsletter=()=>{
    return(
        <div className="newsletter">
            <h1>Get notified on your Email</h1>
            <p>Subscibe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email ID" />
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default Newsletter