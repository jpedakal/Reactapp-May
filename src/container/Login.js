import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <h3>Please Login</h3>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" required></input>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" required></input>
            </div>
            <button type="button" className="btn btn-success">Login</button>
        </div>
    )
}

export default Login;