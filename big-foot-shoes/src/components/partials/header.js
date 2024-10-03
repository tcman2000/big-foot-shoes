import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from '../shoppingCartContext';

const Header = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div id='header'>
            <h1>Big Foot Shoes</h1>
        </div>
    );
};

export default Header;