import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

const Home = () => {
    return (
        <nav className="navbar navbar-custom">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Welcome To Carrefour</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart">Cart</span></Link></li>
                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in">Login</span></Link></li>
                    <li><Link to="/register"><span className="glyphicon glyphicon-user">Register</span></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Home;