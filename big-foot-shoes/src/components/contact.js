import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div>

        </div>
    );
};

export default Contact;