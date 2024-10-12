import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from '../shoppingCartContext';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/header.css';

const Header = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div className='container-fluid p-0 mb-auto' id='header'>
            <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
                <Link className='d-flex align-items-center px-3 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none' to="/home">
                    <span className='fs-4'>Big Foot Shoes</span>
                </Link>

                <ul class='nav nav-pills'>
                    <li class='nav-item'><Link className='nav-link' to="/home">Home</Link></li>
                    <li class='nav-item'><Link className='nav-link' to="/product">Product</Link></li>
                    <li class='nav-item'><Link className='nav-link' to="/about">About</Link></li>
                    <li class='nav-item'><Link className='nav-link' to="/contact">Contact Us</Link></li>
                </ul>
            </header>
        </div>
    );
};

export default Header;