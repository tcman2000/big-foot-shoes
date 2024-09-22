import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adidas from '../assets/adidas_ultraboost_22.png';
import converse from '../assets/converse_chuck_taylor_allstar.png';
import martens from '../assets/dr_martens_1460_boots.png';
import nike from '../assets/nike_air_max_270.png';
import vans from '../assets/vans_old_skool.png';
import "../styles/purchase.css";

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log('order: ' + order.buyQuantity)
        navigate('/purchase/paymentEntry', {state: {order: order}});
    }


    return (
        <div>
            <h1>Big Foot's Shoe Emporium</h1>
            <form onSubmit={handleSubmit}>
                <label>Nike Air Max 270 $1 </label><br/>
                <img className='item-photo' src={nike} alt="Nike Air Max 270"/><br/>
                <input
                    type='number'
                    required
                    onChange={(e) => {order.buyQuantity[0] = e.target.value;}}
                />
                <br/><br/>
                <label>Adidas Ultraboost 22 $5 </label><br/>
                <img className='item-photo' src={adidas} alt="Adidas UltraBoost 22"/><br/>
                <input
                    type='number'
                    required
                    onChange={(e) => {order.buyQuantity[1] = e.target.value;}}
                />
                <br/><br/>
                <label>Converse Chuck Taylor All-Star $25 </label><br/>
                <img className='item-photo' src={converse} alt="Converse Chuck Taylor All-Star"/><br/>
                <input
                    type='number'
                    required
                    onChange={(e) => {order.buyQuantity[2] = e.target.value;}}
                />
                <br/><br/>
                <label>Dr. Martens 1460 Boots $500 </label><br/>
                <img className='item-photo' src={martens} alt="Dr. Martens 1460 Boots"/><br/>
                <input
                    type='number'
                    required
                    onChange={(e) => {order.buyQuantity[3] = e.target.value;}}
                />
                <br/><br/>
                <label>Vans Old Skool $50 </label><br/>
                <img className='item-photo' src={vans} alt="Vans Old Skool"/><br/>
                <input
                    type='number'
                    required
                    onChange={(e) => {order.buyQuantity[4] = e.target.value;}}
                />
                <br/><br/>
                <button className='button'>Pay</button>
            </form>
        </div>
    );
};

export default Purchase;