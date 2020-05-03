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
            <Route to="/register" component={register}></Route>
            <Route to="/login" component={login}></Route>
            <Route to="/cart" component={cart}></Route>
            <Route to="/myOrders" component={myOrders}></Route>
            <Route to="/payment" component={payment}></Route>
            <Route to="/paymentProcess" component={paymentProcess}></Route>
            <Route to="/productData" component={productData}></Route>
        </BrowserRouter>
    )
}


export default Routing;