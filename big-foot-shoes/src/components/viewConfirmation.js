import React from 'react';
import { useState, useContext } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import { OrderContext } from './orderContext';
import {getTotal} from './viewOrder';
import Header from './partials/header';
import Footer from './partials/footer';
import "../styles/confirmation.css";

const ViewConfirmation = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext); 
    const {order, setOrder} = useContext(OrderContext);

    return(
        <div id='confirmation' className='cover-container overflow-auto d-flex h-100 mx-auto flex-column'>
        <Header/>
        <h1>Order Confirmation</h1>
        <p>{"Your confirmation number is: " + order} </p>
        {
            shoppingCart.cart.filter(shoe => {
                return shoe.qty > 0
            }).map(shoe => {
                return(
                <div key={shoe.ID}>
                <img className='item-photo' src={shoe.IMAGE_URL} alt={shoe.name}/><br/>
                <label>{`${shoe.NAME} $${shoe.UNIT_PRICE} x${shoe.qty}`}</label><br/>
                <br/><br/>
                </div>
                )
            })
            
        }
        <h3>Total</h3>
        <text>${getTotal(shoppingCart.cart)}</text>
        <Footer/>
    </div>);
    
};

export default ViewConfirmation;