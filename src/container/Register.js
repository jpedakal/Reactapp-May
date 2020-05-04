import React, { Component } from 'react';

class Register extends Component {

  handleSubmit=(e)=>{
      e.preventDefault();
      const name= this.getName.value;
      const email= this.getEmail.value;
      const mobile= this.getMobile.value;
      const password= this.getPwd.value;
      const confirmPassword= this.getCnfpwd.value;

      const data= {
          name, email, mobile, password, confirmPassword
      }
  }
    render() {
        return (
            <div className="container">
                <h3>Please Register your Details</h3>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" ref={(input)=>this.getName=input}></input>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" ref={(input)=>this.getEmail=input}></input>
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="number" className="form-control" ref={(input)=>this.getMobile=input}></input>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" ref={(input)=>this.getPwd=input}></input>
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" ref={(input)=>this.getCnfpwd=input}></input>
                </div>
                <button type="button" className="btn btn-success">Register</button>
            </div>
        )

    }
}


export default Register;