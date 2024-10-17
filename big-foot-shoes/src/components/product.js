import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import { shoes, renderImage, getInventory, convertToArray } from './shoes';
import "../styles/product.css";
import Header from './partials/header';
import Footer from './partials/footer';
const Product = (props) => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    // const inv = getInventory()
    //             .then(prod => convertToArray(prod));

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
                                    <div className = 'product-description'>
                                        <h2>{`${shoe.name}`}</h2><br/>
                                        <h3>{`$${shoe.price}`}</h3><br/>
                                        <p>{shoe.description}</p>
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