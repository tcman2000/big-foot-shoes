import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import Footer from './partials/footer';
const Home = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div>
            Home
            <Footer/>
        </div>
    );
};

export default Home;