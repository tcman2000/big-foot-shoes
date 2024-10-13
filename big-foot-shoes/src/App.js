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
import { shoes } from './components/shoes';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Product from './components/product';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [shoppingCart, setShoppingCart] = useState({
    buyQuantity: [0,0,0,0,0], cart: shoes, credit_card_number: '', expir_date: '', cvv_code: '',
    card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '', full_name: ''
  });

  return (
    <div className="App h-100">
      <Router>
        <ShoppingCartContext.Provider value = {{shoppingCart, setShoppingCart}}>
        <div className='content h-100'>
          <Routes>
            <Route path='/purchase' element={<Purchase/>}/>
            <Route path='/' element={<Navigate replace to='/home'/>}/>
            <Route path='/purchase/paymentEntry' element={<PaymentEntry/>}/>
            <Route path='/purchase/shippingEntry' element={<ShippingEntry/>}/>
            <Route path='/purchase/viewOrder' element={<ViewOrder/>}/>
            <Route path='/purchase/viewConfirmation' element={<ViewConfirmation/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product' element={<Product/>}/>
          </Routes>
        </div>
        </ShoppingCartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
