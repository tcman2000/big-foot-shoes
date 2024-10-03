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
        console.log(shoppingCart.card_holder_name);
        console.log(shoppingCart.credit_card_number);
        navigate('/purchase/shippingEntry');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Credit Card Number </label>
                <input
                    type='text'
                    placeholder='xxxx xxxx xxxx xxxx'
                    minLength={16}
                    maxLength={16}
                    defaultValue={shoppingCart.credit_card_number}
                    required
                    onChange={(e) => {shoppingCart.credit_card_number = e.target.value;}}
                /><br/>
                <label>Expiration Date </label>
                <input
                    type='text'
                    placeholder='xx/xx'
                    minLength={4}
                    maxLength={4}
                    defaultValue={shoppingCart.expir_date}
                    required
                    onChange={(e) => {shoppingCart.expir_date = e.target.value;}}
                /><br/>
                <label>CVV Code </label>
                <input
                    type='text'
                    maxLength={3}
                    minLength={3}
                    placeholder='xxx'
                    defaultValue={shoppingCart.cvv_code}
                    required
                    onChange={(e) => {shoppingCart.cvv_code = e.target.value;}}
                    
                /><br/>
                <label>Card Holder Name </label>
                <input
                    type='text'
                    defaultValue={shoppingCart.card_holder_name}
                    required
                    onChange={(e) => {shoppingCart.card_holder_name = e.target.value;}}
                /><br/>
                <button className='button'>Submit</button>
            </form>
        </div>
    );
};

export default PaymentEntry;