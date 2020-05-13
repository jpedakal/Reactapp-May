import React from 'react';
import LoginUser from '.././action/index';

const Login = () => {

    handleSubmit=(e)=>{
        e.preventDefault();

        const email= this.getEmail.value;
        const password= this.getPassword.value;

        const data= {email, password};
        LoginUser(data);
    }

    return (
        <div className="container">
            <h3>Please Login</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" ref={(input)=>this.getEmail=input} required></input>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" ref={(input)=> this.getPassword=input} required></input>
                </div>
                <button type="button" className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default Login;