import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './Home';
import dashboard from './Dashboard';
import register from './Register';
import login from './Login';
import cart from './cart';
import myOrders from './myOrders';
import payment from './Payment';
import paymentProcess from './Paymentprocess';
import productData from './productData';


const Routing = () => {
    return (
        <BrowserRouter>
        <Route to="/" component={Home}></Route>
        </BrowserRouter>
    )
}


export default Routing;