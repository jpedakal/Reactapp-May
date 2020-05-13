import React, { Component } from 'react';
import { connect } from 'react-redux';
import registerUser from '../action/index';

class Register extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        
        let data;
        const name = this.getName.value;
        const email = this.getEmail.value;
        const mobile = this.getMobile.value;
        const password = this.getPwd.value;
        const confirmPassword = this.getCnfpwd.value;
       
        if(password === confirmPassword){
           data= { name, email, mobile, password}
        }
        
       registerUser(data)
       
    }
    render() {
        return (
            <div className="container">
                <h3>Please Register your Details</h3>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"  className="form-control" ref={(input) => this.getName = input} required></input>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" ref={(input) => this.getEmail = input} required></input>
                    </div>
                    <div className="form-group">
                        <label>Mobile:</label>
                        <input type="number" className="form-control" ref={(input) => this.getMobile = input} required></input>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" ref={(input) => this.getPwd = input} required></input>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" className="form-control" ref={(input) => this.getCnfpwd = input} required></input>
                    </div>
                    <button type="submit" className="btn btn-success" >Register</button>
                </form>
            </div>
        )
    }
}


export default connect()(Register);