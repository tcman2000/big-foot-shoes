import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from './shoppingCartContext';
import { useContext } from 'react';

const PaymentEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
    
    const handleSubmit = (e) => {
        navigate('/purchase/shippingEntry');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Credit Card Number </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.credit_card_number = e.target.value;}}
                /><br/>
                <label>Expiration Date </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.expir_date = e.target.value;}}
                /><br/>
                <label>CVV Code </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.cvv_code = e.target.value;}}
                /><br/>
                <label>Card Holder Name </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.card_holder_name = e.target.value;}}
                /><br/>
                <button className='button'>Submit</button>
            </form>
        </div>
    );
};

export default PaymentEntry;