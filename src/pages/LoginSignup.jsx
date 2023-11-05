import React from "react";
import '../pages/CSS/LoginSignup.css'
const LoginSignup=()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
            
            <div className="loginsignup-field">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email ID" />
                <input type="password" placeholder="Enter Password" />
            </div>
            <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>  I agree to all the terms and conditions of use and policies</p>
            </div>
            <button>Sign up</button>
            <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
            
            

        </div>
        </div>
    )
}
export default LoginSignup