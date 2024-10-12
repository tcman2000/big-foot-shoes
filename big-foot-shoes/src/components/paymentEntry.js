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
    const formatExpr = (event) => {
        let input = document.getElementById("exprDate");
        if(input.value.length === 3){
            if(event.key !== "Backspace"){
                input.value = input.value.substring(0,2) + "/" + input.value.substring(2,input.value.length);
            }else{
                input.value = input.value.substring(0,2);
            }
            
        }
    };
    const formatCardNumber = (event) => {
        let input = document.getElementById("cardNumber");
        let length = input.value.length;
        if(event.key !== "Backspace"){
            if(length % 5 === 4 && length < 18){
                    input.value = input.value.substring(0,input.value.length) + " ";
            }
        }else{
            if(length !== 0 && length % 5 === 0){
                input.value = input.value.substring(0,input.value.length - 1);
            }
        }
    };
    return (
        <div id = 'payment' className='cover-container d-flex flex-column'>
            <Header/>
            <h2>Enter your payment information</h2>
            <div className='container border rounded w-25'>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div align='left' className="mb-3">
                        <label className='form-label'>Credit Card Number</label>
                        <input id = 'cardNumber' className = 'form-control'
                            type='text'
                            placeholder='xxxx xxxx xxxx xxxx'
                            onKeyUp={formatCardNumber}
                            minLength={19}
                            maxLength={19}
                            defaultValue={shoppingCart.credit_card_number}
                            required
                            onChange={(e) => {shoppingCart.credit_card_number = e.target.value;}}
                        />
                    </div>


                    <div align='left' className="mb-3">
                    <label className='form-label'>Expiration Date</label>
                    <input id ='exprDate'className = 'form-control w-50'
                            type='text'
                            placeholder='xx/xx'
                            onKeyUp={formatExpr}
                            minLength={5}
                            maxLength={5}
                            defaultValue={shoppingCart.expir_date}
                            required
                            onChange={(e) => {
                                
                                shoppingCart.expir_date = e.target.value;}}
                        />
                    </div>
                    <div align='left' className="mb-3">
                    <label className='form-label'>CVV Code</label>
                    <input className = 'form-control w-25'
                            type='text'
                            maxLength={3}
                            minLength={3}
                            placeholder='xxx'
                            defaultValue={shoppingCart.cvv_code}
                            required
                            onChange={(e) => {shoppingCart.cvv_code = e.target.value;}}
                            
                        />
                    </div>
                    

                    <div align='left' className="mb-3">
                        <label className='form-label'>Card Holder Name</label>
                        <input className = 'form-control'
                            type='text'
                            defaultValue={shoppingCart.card_holder_name}
                            required
                            onChange={(e) => {shoppingCart.card_holder_name = e.target.value;}}
                        /><br/>
                    </div>
                    <button className='btn btn-primary mb-3'>Submit</button>
                    <br/>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default PaymentEntry;