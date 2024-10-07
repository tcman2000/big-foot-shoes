import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import adidas from '../assets/adidas_ultraboost_22.png';
import converse from '../assets/converse_chuck_taylor_allstar.png';
import martens from '../assets/dr_martens_1460_boots.png';
import nike from '../assets/nike_air_max_270.png';
import vans from '../assets/vans_old_skool.png';
import "../styles/purchase.css";
import { ShoppingCartContext } from './shoppingCartContext';
import { shoes, renderImage } from './shoes';
import Header from './partials/header';
import Footer from './partials/footer';

const Purchase = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry');
    }
    
    return (
        <div id = 'purchase'className='cover-container d-flex mx-auto flex-column'>
            <Header/>
            <h1>Big Foot's Shoe Emporium</h1>
            <form onSubmit={handleSubmit}>
                {
                    shoppingCart.cart.map((shoe, idx) =>{
                        return(
                            <div key={shoe.id}>
                            <label>{`${shoe.name} $${shoe.price}`}</label><br/>
                            <img className='item-photo' src={renderImage(shoe.name.toLowerCase())} alt={shoe.name}/><br/>
                            <input
                                type='number'
                                min="0"
                                defaultValue={shoe.qty}
                                onChange={(e) => {shoe.qty = e.target.value;}}
                            />
                            <br/><br/>
                            </div>
                        )
                    })
                }
                
                <button className='button'>Pay</button>
            </form>
            <Footer/>
        </div>
    );
};

export default Purchase;