import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/purchase.css";
import { ShoppingCartContext } from './shoppingCartContext';
import { renderImage } from './shoes';


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
        <div>
            <h1>Big Foot's Shoe Emporium</h1>
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
                <button className='button'>Confirm Order</button>
                <button type='button' className='button' onClick={handleReturn}>Return back</button>
            </form>
        </div>
    );
};

export default ViewOrder;
export {getTotal};