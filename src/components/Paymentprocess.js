import React from 'react';

const paymentProcess = () => {
    return (
        <div className="container">
            <div className="row">
                <div id="headers" className="col-md-6"><h3><b>Verified by VISA</b></h3></div>
                <img src="/images/icici.jpg"></img>
            </div>
            <hr />
            <p>Please Enter your OTP in the space provided below, to confirm your identity for this purchase
            This information will not be shared with the merchant
            </p>
            <div className="row">
                <div id="field" className="col-md-6">Mobile No:|</div>
                <div className="col-md-6" id="value">7382215949</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">Merchant Name:|</div>
                <div className="col-md-6" id="value">Reliance JIO</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">Date:|</div>
                <div className="col-md-6" id="value">May 02,2020</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">Total Charge:|</div>
                <div className="col-md-6" id="value">Rs 100.00</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">Card Number:|</div>
                <div className="col-md-6" id="value">XXXX XXXX XXXX 9987</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">Total Charge:|</div>
                <div className="col-md-6" id="value">Rs 100.00</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">Personal Message:|</div>
                <div className="col-md-6" id="value">3D Secure Authentication</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">Name:|</div>
                <div className="col-md-6" id="value">P Jayakrishna</div>
            </div>
            <div className="row">
                <div id="field" className="col-md-6">OTP:|</div>
                <div id="value"><input type="text" size="6"></input></div>
            </div><br />
            <div className="btn-toolbar">
                <button id="button1" className="btn btn-primary">Submit</button>
                <button id="button2" className="btn btn-primary">Cancel</button>
            </div>
        </div>
    )
}

export default paymentProcess;