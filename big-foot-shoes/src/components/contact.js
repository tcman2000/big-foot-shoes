import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import Header from './partials/header';
import Footer from './partials/footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/contact.css';
import contact_pic from '../assets/contact_us.png'
const Contact = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div className='d-flex text-center text-bg-dark h-100'>
            <div id='contact-us' className='cover-container d-flex w-100 h-100 mx-auto flex-column'>
            <Header/>
            <div className='flex-grow-1 w-50 m-auto overflow-auto'>
                <img src={contact_pic} height="300"></img>
                <h3>We are here to help!</h3>
                <p>We're deeply passionate about providing product expertise and exceptional customer service, and want to make your Micro Center online shopping experiences exceptional. Have questions? Need answers? Just contact us at the links before!</p>
                <h5>Contact Us</h5>
                <ul className='list-group-flush'>
                    <li className='list-group-item'>Phone Number: 1-800-big-foot</li>
                    <li className='list-group-item'>Email: big.foot@gmail.com</li>
                    <li className='list-group-item'>Address: 1111 Big Foot Drive, Big Foot City, OH, USA</li>
                </ul>
                <h5>Return Policy</h5>
                <p>We offer a 100% refund guaranteed return policy with no questions asked for 90 days. All you have to do is
                    provide your receipt information and ship the shoes back in their original packaging. We will provide the shipping label.
                </p>
            </div>
            <Footer/>
            </div>
        </div>
    );
};

export default Contact;