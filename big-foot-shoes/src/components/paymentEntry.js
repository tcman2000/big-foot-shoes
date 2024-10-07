import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from './shoppingCartContext';
import { useContext } from 'react';
import Header from './partials/header';
import Footer from './partials/footer';
import '../styles/payment.css';


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
        <div id = 'payment' className='cover-container d-flex flex-column'>
            <Header/>
            <h2>Enter your payment information</h2>
            <div className='container border rounded w-25'>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div align='left' class="mb-3">
                        <label className='form-label'>Credit Card Number</label>
                        <input className = 'form-control'
                            type='text'
                            placeholder='xxxx xxxx xxxx xxxx'
                            minLength={16}
                            maxLength={16}
                            defaultValue={shoppingCart.credit_card_number}
                            required
                            onChange={(e) => {shoppingCart.credit_card_number = e.target.value;}}
                        />
                    </div>
                    <div align='left' class="mb-3">
                    <label className='form-label'>Expiration Date</label>
                    <input className = 'form-control'
                            type='text'
                            placeholder='xx/xx'
                            minLength={4}
                            maxLength={4}
                            defaultValue={shoppingCart.expir_date}
                            required
                            onChange={(e) => {shoppingCart.expir_date = e.target.value;}}
                        />
                    </div>
                    <div align='left' class="mb-3">
                    <label className='form-label'>CVV Code</label>
                    <input className = 'form-control'
                            type='text'
                            maxLength={3}
                            minLength={3}
                            placeholder='xxx'
                            defaultValue={shoppingCart.cvv_code}
                            required
                            onChange={(e) => {shoppingCart.cvv_code = e.target.value;}}
                            
                        />
                    </div>
                    <div align='left' class="mb-3">
                        <label className='form-label'>Card Holder Name</label>
                        <input className = 'form-control'
                            type='text'
                            defaultValue={shoppingCart.card_holder_name}
                            required
                            onChange={(e) => {shoppingCart.card_holder_name = e.target.value;}}
                        /><br/>
                    </div>
                    <button className='button'>Submit</button>
                    <br/>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default PaymentEntry;