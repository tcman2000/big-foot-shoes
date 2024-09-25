import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';

const ShippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
    const handleSubmit = (e) => {
        navigate('/purchase/viewOrder');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Full Name </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.full_name = e.target.value;}}
                /><br/>
                <label>Phone Number </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.phone_number = e.target.value;}}
                /><br/>
                <label>Address </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.address = e.target.value;}}
                /><br/>
                <label>City </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.city = e.target.value;}}
                /><br/>
                <label>State </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.state = e.target.value;}}
                /><br/>
                <label>ZIP Code </label>
                <input
                    type='text'
                    required
                    onChange={(e) => {shoppingCart.zip_code = e.target.value;}}
                /><br/>
                <button className='button'>Submit</button>
            </form>
        </div>
    );
};

export default ShippingEntry;