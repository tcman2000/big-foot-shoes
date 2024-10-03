import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';

const Contact = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div>

        </div>
    );
};

export default Contact;