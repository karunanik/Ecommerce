import React from "react";
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'
const Offers=()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers!</h1>
                <br />
                <p>Only on Selected Products*</p>
                <button>Check Out</button>

            </div>
            <div className="offers-right">
                <img src={exclusive_img} alt="" />

            </div>

        </div>
    )
}
export default Offers