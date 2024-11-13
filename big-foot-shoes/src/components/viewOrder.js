import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/purchase.css";
import { ShoppingCartContext } from './shoppingCartContext';
import { WarningContext } from './warningContext';
import { OrderContext } from './orderContext';
import Header from './partials/header';
import Footer from './partials/footer';

function getTotal(cart){
    return cart.reduce((acc, val)=>{
        return acc + (val.qty * val.UNIT_PRICE)
    }, 0);
}
const ViewOrder = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext); 
    const {order, setOrder} = useContext(OrderContext);
    const {warning, setWarning} = useContext(WarningContext);

    const [total, setTotal] = useState(0); 
    


 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(shoppingCart))
        const req = await fetch('https://m252cwc0oj.execute-api.us-east-2.amazonaws.com/dev/order-processing/order',
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shoppingCart)
            }
        )
        const resp = await req.json();
        console.log(resp);
        if(resp.statusCode === 200){
            setOrder(resp.orderNumber);
            navigate('/purchase/viewConfirmation');
        } else if(resp.errors !== undefined ){
            console.log(resp.errors);
            shoppingCart.cart = resp.cart;
            setWarning(
            <>
            {
                resp.errors.reduce((acc, val) => {
                        
                        return [ acc, <br />, val ];
                    })
            }
            </>)
            navigate('/purchase')
        }
    }

    const handleReturn = (e) => {
        navigate('/')
    }

    
    return (
        <div id='purchase' className='cover-container overflow-auto d-flex w-100 h-100 mx-auto flex-column'>
            <Header/>
            <h2>Please confirm the contents of your order</h2>
            <form onSubmit={handleSubmit}>
                {
                    shoppingCart.cart.filter(shoe => {
                        return shoe.qty > 0
                    }).map(shoe => {
                        return(
                            <div key={shoe.ID}>
                            <label>{`${shoe.NAME} $${shoe.UNIT_PRICE}`}</label><br/>
                            <img className='item-photo' src={shoe.IMAGE_URL} alt={shoe.NAME}/><br/>
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
                <button className='btn btn-primary mx-3'>Confirm Order</button>
                <button type='button' className='btn btn-primary' onClick={handleReturn}>Return back</button>
            </form>
            <Footer/>
        </div>
    );
};

export default ViewOrder;
export {getTotal};