import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentEntry = () => {
    const location = useLocation();
    
    console.log('paymentEntry: ', location);

    return (
        <div>
            <h1>
                Shoe 1 {location.state.order.buyQuantity[0]}
                <br/>
                Shoe 2 {location.state.order.buyQuantity[1]}
            </h1>
        </div>
    );
};

export default PaymentEntry;