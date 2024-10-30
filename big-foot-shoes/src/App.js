import logo from './logo.svg';
import './App.css';
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { createContext, useContext, useState, useEffect } from 'react';
import { ShoppingCartContext } from './components/shoppingCartContext';
import { OrderContext } from './components/orderContext';
import { WarningContext } from './components/warningContext';
import { getInventory, convertToArray } from './components/shoes';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Product from './components/product';

function App() {

  const [shoppingCart, setShoppingCart] = useState({
    buyQuantity: [0,0,0,0,0], cart: [], credit_card_number: '', expir_date: '', cvv_code: '',
    card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '', full_name: ''
  });

  const [order, setOrder] = useState(0);
  const [warning, setWarning] = useState("");

    useEffect(() => {
        (async function() {
            const inv = await getInventory();
            const products = convertToArray(inv);
            setShoppingCart({
              buyQuantity: [0,0,0,0,0], cart: products, credit_card_number: '', expir_date: '', cvv_code: '',
    card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '', full_name: ''
            })
        })();
    },[setShoppingCart]);

  return (
    <div className="App">
      <Router>
        <ShoppingCartContext.Provider value = {{shoppingCart, setShoppingCart}}>
        <OrderContext.Provider value = {{order, setOrder}}>
        <WarningContext.Provider value = {{warning, setWarning}}>
        <div className='content'>
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
        </WarningContext.Provider>
        </OrderContext.Provider>
        </ShoppingCartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
