import React from 'react';
import "../../../App.css";
import Logo from "../../../Assets/hoodie.png";
import CartWidget from '../cartWidget/CartWidget.js';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className='navBar__Back'>
                <div className='navBar__Name'>
                    <span>
                        PROTOTYPE
                    </span>
                </div>
            </div>
            <div className='navBar'>
            <div className='navBar__LogoList'>
            <Link to="/"> <img src={Logo} alt='Logo'/> </Link>
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
                    <Link to="/cart" className=''><CartWidget /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar