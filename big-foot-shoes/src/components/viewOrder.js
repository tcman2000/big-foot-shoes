import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/purchase.css";
import { ShoppingCartContext } from './shoppingCartContext';
import { renderImage } from './shoes';
import Header from './partials/header';
import Footer from './partials/footer';

function getTotal(cart){
    return cart.reduce((acc, val)=>{
        return acc + (val.qty * val.price)
    }, 0);
}
const ViewOrder = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);  
    const [total, setTotal] = useState(0); 


 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/viewConfirmation');
    }

    const handleReturn = (e) => {
        navigate('/')
    }

    
    return (
        <div id='purchase' className='cover-container d-flex w-100 h-100 mx-auto flex-column'>
            <Header/>
            <h2>Please confirm the contents of your order</h2>
            <form onSubmit={handleSubmit}>
                {
                    shoppingCart.cart.filter(shoe => {
                        return shoe.qty > 0
                    }).map(shoe => {
                        return(
                            <div key={shoe.id}>
                            <label>{`${shoe.name} $${shoe.price}`}</label><br/>
                            <img className='item-photo' src={renderImage(shoe.name.toLowerCase())} alt={shoe.name}/><br/>
                            <input
                                type='number'
                                required
                                value={shoe.qty}
                                min="0"
                                onChange={(e) => {
                                    shoe.qty = e.target.value;
                                    setTotal(getTotal(shoppingCart.cart));
                                }}
                            />
                            <br/><br/>
                            </div>
                        )
                    })
                }
                <br/><br/>
                <h3>Total</h3>

                <text>${getTotal(shoppingCart.cart)}</text>
                <br/><br/>
                <button className='btn btn-primary mx-3'>Confirm Order</button>
                <button type='button' className='btn btn-primary' onClick={handleReturn}>Return back</button>
            </form>
            <Footer/>
        </div>
    );
};

export default ViewOrder;
export {getTotal};