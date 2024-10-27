import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import adidas from '../assets/adidas_ultraboost_22.png';
import converse from '../assets/converse_chuck_taylor_allstar.png';
import martens from '../assets/dr_martens_1460_boots.png';
import nike from '../assets/nike_air_max_270.png';
import vans from '../assets/vans_old_skool.png';
import "../styles/purchase.css";
import {useEffect} from 'react'
import { ShoppingCartContext } from './shoppingCartContext';
import { WarningContext } from './warningContext';
import { shoes, renderImage, getInventory, convertToArray } from './shoes';
import Header from './partials/header';
import Footer from './partials/footer';

const Purchase = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
    const {warning, setWarning} = useContext(WarningContext);
    

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setWarning("")
        // e.preventDefault();
        navigate('/purchase/paymentEntry');
    }
    
    return (
        <div id = 'purchase'className='cover-container d-flex mx-auto flex-column'>
            <Header/>
            <h1>{warning}</h1>
            <h1>Big Foot's Shoe Emporium</h1>
            <form onSubmit={handleSubmit}>
                {
                    shoppingCart.cart.map((shoe, idx) =>{
                        return(
                            <div key={shoe.ident}>
                            <label>{`${shoe.name} $${shoe.price}`}</label><br/>
                            <img className='item-photo' src={renderImage(shoe.name.toLowerCase())} alt={shoe.name}/><br/>
                            <input
                                type='number'
                                min= {0}
                                defaultValue={shoe.qty}
                                onWheel={(e) => e.target.blur()}
                                onChange={(e) => {
                                    console.log(e.nativeEvent);
                                    shoe.qty = Number(e.target.value);
                                    e.target.value = shoe.qty
                                    console.log(`Qty changed to ${shoe.qty}`)
                                    if(shoe.qty > shoe.count){
                                        shoe.qty = shoe.count;
                                        e.target.value = shoe.count
                                        setWarning(<>{`Shoe "${shoe.name}" has exceeded available quantity.`}<br/>{`Your cart has been updated.`}</>);
                                    }else{
                                        
                                        setWarning("")
                                    }
                                }}
                            />
                            <br/><br/>
                            </div>
                        )
                    })
                }
                
                <button className='btn btn-primary'>Pay</button>
            </form>
            <Footer/>
        </div>
    );
};

export default Purchase;