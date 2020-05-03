import React from 'react';

const Register = () => {

    constructor(){
        
    }

    return (
        <div className="container">
            <h3>Please Register your Details</h3>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Mobile:</label>
                <input type="number" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input type="password" className="form-control"></input>
            </div>
            <button type="button" className="btn btn-success">Register</button>
        </div>
    )
}

export default Register;