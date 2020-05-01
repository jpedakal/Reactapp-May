import React from 'react';

const Payment = () => {
    return (
        <div>
            <div className="container">
                <h3> Payment Details</h3>
                <hr />
                <div className="form-group">
                    <label>Card Number:</label>
                    <input type="number"></input>
                </div>
                <div className="form-group">
                    <label>EXp Date:</label>
                    <input type="text" size="6"></input>
                </div>
                <div className="form-group">
                    <label>CVV:</label>
                    <input type="text" size="3"></input>
                </div>
                <div>
                    <label>CardHolder Name:</label>
                    <input type="text"></input>
                </div>
                <button type="button" className="btn btn-success btn-block">Pay</button>
            </div>
        </div>
    )
}

export default Payment;