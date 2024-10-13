import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import { ShoppingCartContext } from './shoppingCartContext';
import Header from './partials/header';
import Footer from './partials/footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/about.css';
import tc_pic from '../assets/tc_pic.png';
import Brian_Profile from '../assets/Brian_Profile.jpg';
import abd_pfp from '../assets/abdullah-pfp.png'

const About = () => {

    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    const navigate = useNavigate();
    
    return (
        <div className='d-flex text-center text-bg-dark h-100'>
            <div id='about-us' className='cover-container overflow-auto d-flex w-100 h-100 mx-auto flex-column'>
                <Header/>
                    <div className='flex-grow-1 w-50 m-auto'>
                        <h1>About Us</h1>
                        <h3>Company Mission and Vision</h3>
                        <p>
                        At Big Foot Shoes, our mission is to provide stylish, comfortable, and durable footwear specifically designed for individuals with larger feet. We believe that everyone deserves shoes that not only fit well but also make them feel confident and comfortable. By offering a wide range of sizes, including hard-to-find large sizes, we aim to eliminate the frustration of limited options and ensure that every customer finds the perfect pair to suit their style and needs.
                        </p>
                        <h3>Company Strategy</h3>
                        <p>
                            To meet this mission statement, we have decided to focus on a few core strategies to ensure that our customers needs are met
                            and that our business remains profitable.
                        </p>
                        <ul className='list-group-flush'>
                                <li className='list-group-item'>Keep to a digital only platform to lower costs.</li>
                                <li className='list-group-item'>Offer state of the art foot scanning technology to ensure the best fit!</li>
                                <li className='list-group-item'>Negotiate with the cheapest producers to offer affordable products</li>
                        </ul>
                        <h3>Meet our Executives!</h3>
                        <div>
                            <h5>Titan Chen</h5>
                            <img src={tc_pic}></img>
                            <p>
                                Titan Chen is Co-Ceo of Big Foot Shoes. He is currently a grad student and maintains a full-time job as a software engineer.
                                He was inspired by the plights of big footed people to start this company.
                            </p>
                        </div>
                        <div>
                            <h5>Abdullah Abdelmagid</h5>
                            <img src={abd_pfp}></img>
                            <p>
                                Abdullah Abdelmagid is Co-founder of Big Foot Shoes. He is a fourth year Computer Science and Engineering major.
                                He wanted to bring more affordable and stylish shoes for a great price!
                            </p>
                        </div>
                        <div>
                            <h5>Brian Dong</h5>
                            <img src={Brian_Profile}></img>
                            <p>
                                Brian Dong is Co-Ceo of Big Foot Shoes. He is currently an undergraduate student as a computer science major.
                                He suffers from wide feet and felt compelled to bring more options to those like him.
                            </p>
                        </div>
                    </div>
                    
                <Footer/>
            </div>
        </div>
    );
};

export default About;