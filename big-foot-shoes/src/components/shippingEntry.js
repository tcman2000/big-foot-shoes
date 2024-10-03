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
                    defaultValue={shoppingCart.full_name}
                    required
                    onChange={(e) => {shoppingCart.full_name = e.target.value;}}
                /><br/>
                <label>Phone Number </label>
                <input
                    type='text'
                    defaultValue={shoppingCart.phone_number}
                    required
                    onChange={(e) => {shoppingCart.phone_number = e.target.value;}}
                /><br/>
                <label>Address 1 </label>
                <input
                    type='text'
                    defaultValue={shoppingCart.address_1}
                    required
                    onChange={(e) => {shoppingCart.address_1 = e.target.value;}}
                /><br/>
                <label>Address 2 </label>
                <input
                    type='text'
                    defaultValue={shoppingCart.address_1}
                    required
                    onChange={(e) => {shoppingCart.address_2 = e.target.value;}}
                /><br/>
                <label>City </label>
                <input
                    type='text'
                    defaultValue={shoppingCart.city}
                    required
                    onChange={(e) => {shoppingCart.city = e.target.value;}}
                /><br/>
                <label>State </label>
                <input
                    type='text'
                    defaultValue={shoppingCart.state}
                    required
                    onChange={(e) => {shoppingCart.state = e.target.value;}}
                /><br/>
                <label>ZIP Code </label>
                <input
                    type='text'
                    defaultValue={shoppingCart.zip_code}
                    required
                    onChange={(e) => {shoppingCart.zip_code = e.target.value;}}
                /><br/>
                <button className='button'>Submit</button>
            </form>
        </div>
    );
};

export default ShippingEntry;