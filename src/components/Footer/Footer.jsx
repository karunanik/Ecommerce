import React from "react";
import './Footer.css';
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer=()=>{
    return(
        <div className="footer">
            

        
        <ul className="footer-links">
        <p>Company</p>
        <p>Products</p>
        <p>Offices</p>
        <p>About us</p>
        <p>Contact</p>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2023 - All Rights Reserved.</p>
        </div>


        </div>
    )
}
export default Footer