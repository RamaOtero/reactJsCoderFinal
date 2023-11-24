import React from 'react';
import "../../../App.css";
import CartWidget from '../cartWidget/CartWidget.js';
import { Link } from "react-router-dom";

let scrolldown = () => {

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });

}

const NavBar = () => {
    return (
        <div>
            <div className='navBar__Back'>
                <div className='navBar__Name'>
                    <span>  PROTOTYPE  </span>
                    <button onClick={scrolldown}>  Go Down  </button>
                </div>
            </div>
            <div className='navBar'>
            <div className='navBar__LogoList'>
            <Link to="/"> <span className='logo'> PROTOTYPE </span> </Link>
                <ul className='navBar__list'>
                    <Link to="/" className='navBar2__list--link'>Home</Link>
                    <Link to="/news" className='navBar2__list--link' >News</Link>
                    <Link to="/aboutUs" className='navBar2__list--link'>About Us</Link>
                    <Link to="/contact" className='navBar2__list--link'>Contact</Link>
                    <Link to="/category/hoodie23" className='navBar2__list--link'>Black Hoods</Link>
                    <Link to="/create-product" className='navBar2__list--link'>Create Product</Link>
                </ul>
            </div>
                <div className='navBar__Cart'>
                    <Link to="/cart" ><CartWidget /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar