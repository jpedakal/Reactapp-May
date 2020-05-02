import React from 'react';

const paymentProcess = () => {
    return (
        <div>
            <div className="container">
                <h3><b>Verified by VISA</b> </h3>
                <hr />
                <ul>
                    <li>Mobile:| 7382215949</li>
                    <li>Merchant Name:| Flipkart</li>
                    <li>Date:| May 01,2020</li>
                    <li>Total Charge:| Rs 100.00</li>
                    <li>Card Number:| XXXX XXXX XXXX 9806</li>
                    <li>Personal Message:| 3D Secure Authentication</li>
                    <li>Name:| P JAYAKRISHNA</li>
                </ul>
                <div className="form-group">
                    <label>OTP</label>
                    <input type="text" size="6"></input>
                </div>
                <button type="button" className="btn btn-success btn-sm">Pay</button>
            </div>
        </div>
    )
}

export default paymentProcess;