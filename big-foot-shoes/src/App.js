import logo from './logo.svg';
import './App.css';
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './components/shoppingCartContext';


function App() {

  const [shoppingCart, setShoppingCart] = useState({
    buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvv_code: '',
    card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: ''
  });

  return (
    <div className="App">
      <Router>
        <ShoppingCartContext.Provider value = {{shoppingCart, setShoppingCart}}>
        <div className='content'>
          <Routes>
            <Route path='/purchase' element={<Purchase/>}/>
            <Route path='/' element={<Navigate replace to='/purchase'/>}/>
            <Route path='/purchase/paymentEntry' element={<PaymentEntry/>}/>
            <Route path='/purchase/shippingEntry' element={<ShippingEntry/>}/>
            <Route path='/purchase/viewOrder' element={<ViewOrder/>}/>
            <Route path='/purchase/viewConfirmation' element={<ViewConfirmation/>}/>
          </Routes>
        </div>
        </ShoppingCartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
