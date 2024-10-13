import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import '../styles/home.css'
import Footer from './partials/footer';
import Header from './partials/header';
import am from '../assets/air_max_90.png';
import nike from '../assets/nike-bg.png'
import adidas from '../assets/adidas.png'
import converse from '../assets/converse.png'


const Home = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div>
            <Header/>
            <div className="section one">
                <div>
                    <h1>IT'S TIME TO SHOP <u>BIG</u></h1>
                    <h2>STEP UP YOUR STYLE WITH BIG FOOT SHOES.</h2>
                </div>
                <div className="side-image">
                    <svg className="triangle" viewBox="0 0 217 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.13512 20.3437C-2.48524 9.57563 6.71335 -1.15225 17.9077 0.782562L203.717 32.8974C215.188 34.88 220.127 48.605 212.55 57.4421L86.8327 204.06C79.2553 212.897 64.9374 210.11 61.2276 199.076L1.13512 20.3437Z" fill="#E225B3" fill-opacity="0.8"/>
                    </svg>
                    <div className="testing">
                        <img src={am} className="am" alt="air max 90 shoe"/>
                    </div>
                </div>
            </div>
            <div className="section two">
                <h1>ALL THE SHOES. ALL THE SIZES. THE LOWEST PRICES.</h1>
                <div className="brand-carousel">
                    <img src={nike} className="nike" alt="air max 90 shoe"/>
                    <img src={adidas} className="adidas" alt="air max 90 shoe"/>
                    <img src={converse} className="converse" alt="air max 90 shoe"/>
                </div>
            </div>
            <div className="section three">
                <h1>What are you waiting for? <a href="/purchase">Shop today</a></h1>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Home;