import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import { shoes, renderImage } from './shoes';
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
                        return(
                            <div key={shoe.id}>
                            <div className='item'>
                            <img className='product-image border rounded' src={renderImage(shoe.name.toLowerCase())} alt={shoe.name}/><br/>
                            <div>
                            <h2 className='product-description'>{`${shoe.name}`}</h2><br/>
                            <h3 className='product-description'>{`$${shoe.price}`}</h3><br/>
                            <p className='product-description'>{shoe.description}</p>
                            </div>
                            </div>
                            <hr></hr>
                            </div>
                        )
                    })
                }
            <form onSubmit={handleSubmit}> 
                <button className='button' class="btn btn-primary">Start Shopping!</button>
            </form>
            <Footer/>
        </div>
    );
};

export default Product;