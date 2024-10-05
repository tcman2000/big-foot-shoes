import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import Footer from './partials/footer';
import Header from './partials/header';

const Home = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div>
            <Header/>
            <div id='home-page'></div>
            <Footer/>
        </div>
    );
};

export default Home;