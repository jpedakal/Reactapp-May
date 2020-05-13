import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './Home';
import dashboard from './Dashboard';
import register from './../container/Register';
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
                            <Link to="/"><h3>Welcome To Carrefour</h3></Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart"> Cart</span></Link></li>
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"> Login</span></Link></li>
                            <li><Link to="/register"><span className="glyphicon glyphicon-user"> Register</span></Link></li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Home}></Route>
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