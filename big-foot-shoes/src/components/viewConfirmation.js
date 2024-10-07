import React from 'react';
import { useState, useContext } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import { renderImage } from './shoes';
import {getTotal} from './viewOrder';
import Header from './partials/header';
import Footer from './partials/footer';
import "../styles/confirmation.css";

const ViewConfirmation = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext); 

    return(
        <div id='confirmation' className='cover-container d-flex h-100 mx-auto flex-column'>
        <Header/>
        <h1>Order Confirmation</h1>
        <p>{"Your confirmation number is: " + Math.floor(Math.random() * 1000)} </p>
        {
            shoppingCart.cart.filter(shoe => {
                return shoe.qty > 0
            }).map(shoe => {
                return(
                <div key={shoe.id}>
                <img className='item-photo' src={renderImage(shoe.name.toLowerCase())} alt={shoe.name}/><br/>
                <label>{`${shoe.name} $${shoe.price} x${shoe.qty}`}</label><br/>
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