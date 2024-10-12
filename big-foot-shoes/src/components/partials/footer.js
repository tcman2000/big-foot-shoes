import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from '../shoppingCartContext';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/footer.css';

const Footer = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div className='container-fluid px-0 mt-auto'>
            <footer className='py-3 mt-4'>
                <ul class='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li class='nav-item'><Link className='nav-link px-2 text-body-secondary' to="/home">Home</Link></li>
                    <li class='nav-item'><Link className='nav-link px-2 text-body-secondary' to="/product">Product</Link></li>
                    <li class='nav-item'><Link className='nav-link px-2 text-body-secondary' to="/about">About</Link></li>
                    <li class='nav-item'><Link className='nav-link px-2 text-body-secondary' to="/contact">Contact Us</Link></li>
                </ul>
                <p className='text-center text-body-secondary'>© Big Foot Shoes Inc</p>
            </footer>
        </div>
    );
};

export default Footer;