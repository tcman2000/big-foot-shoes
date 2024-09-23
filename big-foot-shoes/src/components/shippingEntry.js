import React from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';

const ShippingEntry = () => {
    const location = useLocation();
    console.log(location);
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
    return (
        <div></div>
    );
};

export default ShippingEntry;