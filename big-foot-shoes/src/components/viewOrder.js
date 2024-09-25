import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import adidas from '../assets/adidas_ultraboost_22.png';
import converse from '../assets/converse_chuck_taylor_allstar.png';
import martens from '../assets/dr_martens_1460_boots.png';
import nike from '../assets/nike_air_max_270.png';
import vans from '../assets/vans_old_skool.png';
import "../styles/purchase.css";
import { ShoppingCartContext } from './shoppingCartContext';



const ViewOrder = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);  
    const [total, setTotal] = useState(0); 
    const itemPrice = [1,5,25,500,50];

    function getTotal(){
        let total = 0.00;
        for(let i = 0; i < shoppingCart.buyQuantity.length; i++){
            total += parseInt(shoppingCart.buyQuantity[i] * itemPrice[i]);
        }
        return total;
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/viewConfirmation');
    }

    
    return (
        <div>
            <h1>Big Foot's Shoe Emporium</h1>
            <h2>Please confirm the contents of your order</h2>
            <form onSubmit={handleSubmit}>
                <label>Nike Air Max 270 $1 </label><br/>
                <img className='item-photo' src={nike} alt="Nike Air Max 270"/><br/>
                <input
                    type='number'
                    min="0"
                    required
                    defaultValue={shoppingCart.buyQuantity[0]}
                    onChange={(e) => {shoppingCart.buyQuantity[0] = e.target.value;}}
                />
                <br/><br/>
                <label>Adidas Ultraboost 22 $5 </label><br/>
                <img className='item-photo' src={adidas} alt="Adidas UltraBoost 22"/><br/>
                <input
                    type='number'
                    min="0"
                    required
                    defaultValue={shoppingCart.buyQuantity[1]}
                    onChange={(e) => {shoppingCart.buyQuantity[1] = e.target.value;
                        setTotal(getTotal());
                    }}
                />
                <br/><br/>
                <label>Converse Chuck Taylor All-Star $25 </label><br/>
                <img className='item-photo' src={converse} alt="Converse Chuck Taylor All-Star"/><br/>
                <input
                    type='number'
                    min="0"
                    required
                    defaultValue={shoppingCart.buyQuantity[2]}
                    onChange={(e) => {shoppingCart.buyQuantity[2] = e.target.value;
                        setTotal(getTotal());
                    }}
                />
                <br/><br/>
                <label>Dr. Martens 1460 Boots $500 </label><br/>
                <img className='item-photo' src={martens} alt="Dr. Martens 1460 Boots"/><br/>
                <input
                    type='number'
                    min="0"
                    required
                    defaultValue={shoppingCart.buyQuantity[3]}
                    onChange={(e) => {shoppingCart.buyQuantity[3] = e.target.value;
                        setTotal(getTotal());
                    }}
                />
                <br/><br/>
                <label>Vans Old Skool $50 </label><br/>
                <img className='item-photo' src={vans} alt="Vans Old Skool"/><br/>
                <input
                    type='number'
                    min="0"
                    required
                    defaultValue={shoppingCart.buyQuantity[4]}
                    onChange={(e) => {shoppingCart.buyQuantity[4] = e.target.value;
                        setTotal(getTotal());
                    }}
                />
                <br/><br/>
                <h3>Total</h3>

                <text>${getTotal()}</text>
                <br/><br/>
                <button className='button'>Confirm Order</button>
            </form>
        </div>
    );
};

export default ViewOrder;