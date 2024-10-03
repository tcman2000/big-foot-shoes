import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from '../shoppingCartContext';

const Footer = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div id='footer'>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <p>© Big Foot Shoes Inc</p>
        </div>
    );
};

export default Footer;