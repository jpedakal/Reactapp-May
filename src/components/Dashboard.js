import React from 'react';

const Dashboard = () => {
    return (
        <nav className="navbar navbar-custom">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/brand">Welcome To Carrefour</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
                    <li><a href="/register"><span className="glyphicon glyphicon-user"></span> username</a></li>
                    <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Profile</a></li>
                    <li><a href="/logout">Logout</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Dashboard;