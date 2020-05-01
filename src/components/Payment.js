import React from 'react';

const Payment = () => {
    return (
        <div>
            <div className="container">
                <h3>Select Payment Method</h3>
                <form className="form-inline">
                    <div className="form-group">
                        <label>Card Number: </label>
                        <input type="text" className="form-control" placeholder="Card Number"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment;