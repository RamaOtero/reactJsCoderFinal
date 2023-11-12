import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import whatsApp from '../../Assets/whatsapp.png'
const Footer = () => {



    return (
        <div className="footer">
            <span>PROTOTYPE</span>    
            <ul className="footerList">
                <Link to="https://www.linkedin.com/in/ramiro-joaquin-otero-frontend-js-css3-html5-graphic-designer/" target="_blank">Linkedin</Link>
                <Link to="https://github.com/RamaOtero" target="_blank">GitHub</Link>
                <Link to="https://www.behance.net/ramirootero1" target="_blank">Behance</Link>
                <Link to="https://wa.me/+5492214958365" target="_blank"><img className="whatsApp" src={whatsApp} alt="WhatsApp" /></Link>
                
            </ul>
        </div>
    )
}

export default Footer;