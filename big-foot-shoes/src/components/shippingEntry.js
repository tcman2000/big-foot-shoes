import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import Header from './partials/header';
import Footer from './partials/footer';
import '../styles/shipping.css';


const ShippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder');
    }

    return (
        <div id ='shipping'className='cover-container overflow-auto d-flex h-100 mx-auto flex-column'>
            <Header/>
            <h2>Please enter your shipping information</h2>
            <br/>
            <div align='left' className='container border rounded w-25'>
                <br/>
                <form onSubmit={handleSubmit}>
                    <label className='form-label'>Full Name </label>
                    <input className = 'form-control'
                        type='text'
                        defaultValue={shoppingCart.full_name}
                        required
                        onChange={(e) => {shoppingCart.full_name = e.target.value;}}
                    /><br/>
                    <label>Phone Number </label>
                    <input className = 'form-control'
                        type='text'
                        defaultValue={shoppingCart.phone_number}
                        required
                        onChange={(e) => {shoppingCart.phone_number = e.target.value;}}
                    /><br/>
                    <label>Address 1 </label>
                    <input className = 'form-control'
                        type='text'
                        defaultValue={shoppingCart.address_1}
                        required
                        onChange={(e) => {shoppingCart.address_1 = e.target.value;}}
                    /><br/>
                    <label>Address 2 </label>
                    <input className = 'form-control'
                        type='text'
                        defaultValue={shoppingCart.address_1}
                        required
                        onChange={(e) => {shoppingCart.address_2 = e.target.value;}}
                    /><br/>
                    <label>City </label>
                    <input className = 'form-control'
                        type='text'
                        defaultValue={shoppingCart.city}
                        required
                        onChange={(e) => {shoppingCart.city = e.target.value;}}
                    /><br/>
                    <label>State </label>
                    <input className = 'form-control'
                        type='text'
                        defaultValue={shoppingCart.state}
                        required
                        onChange={(e) => {shoppingCart.state = e.target.value;}}
                    /><br/>
                    <label>ZIP Code </label>
                    <input className = 'form-control'
                        type='text'
                        defaultValue={shoppingCart.zip_code}
                        required
                        onChange={(e) => {shoppingCart.zip_code = e.target.value;}}
                    /><br/>
                    <div align='center'>
                        <button className='btn btn-primary mb-3'>Submit</button>
                    </div>
                </form>
            </div>  
            
            <Footer/>
        </div>
    );
};

export default ShippingEntry;