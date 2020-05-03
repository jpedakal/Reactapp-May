import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
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
            <div>
                <nav className="navbar navbar-custom">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/brand">Welcome To Carrefour</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><span className="glyphicon glyphicon-shopping-cart"><Link to="/cart">Cart</Link></span></li>
                            <li><span className="glyphicon glyphicon-log-in"><Link to="/login">Login</Link></span></li>
                            <li><span className="glyphicon glyphicon-user"><Link to="/register">Register</Link></span></li>
                        </ul>
                    </div>
                </nav>
                <Route path="/register" component={register}></Route>
                <Route path="/login" component={login}></Route>
                <Route path="dashboard" component={dashboard}></Route>
                <Route path="/cart" component={cart}></Route>
                <Route path="/myOrders" component={myOrders}></Route>
                <Route path="/payment" component={payment}></Route>
                <Route path="/paymentProcess" component={paymentProcess}></Route>
                <Route path="/productData" component={productData}></Route>
            </div>
        </BrowserRouter>
    )
}


export default Routing;