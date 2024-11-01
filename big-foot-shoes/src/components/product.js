import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import { getInventory, convertToArray } from './shoes';
import "../styles/product.css";
import Header from './partials/header';
import Footer from './partials/footer';
const Product = (props) => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
       

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('/purchase');
    }
    return (
        <div id='product'>
            <Header/>
        <h1>Big Foot's Shoe Emporium Products</h1>
        <hr/>
                {
                    shoppingCart.cart.map((shoe, idx) =>{
                        console.log(shoe);
                        return(
                            <div key={shoe.ID}>
                                <div className='item'>
                                    <img className='product-image border rounded' src={shoe.IMAGE_URL} alt={shoe.NAME}/><br/>
                                    <div className = 'product-description'>
                                        <h2>{`${shoe.NAME}`}</h2><br/>
                                        <h3>{`$${shoe.UNIT_PRICE}`}</h3><br/>
                                        <p>{shoe.DESCRIPTION}</p>
                                        <form onSubmit={handleSubmit}> 
                                            <br></br>
                                            <button className='button' class="btn btn-primary">Buy Now!</button>
                                        </form>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            <form onSubmit={handleSubmit}> 
                <button className="btn btn-primary btn-lg">Start Shopping!</button>
            </form>
            <Footer/>
        </div>
    );
};

export default Product;