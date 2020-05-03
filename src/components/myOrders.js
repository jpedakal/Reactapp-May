import React from 'react';

const myOrders = () => {
    return (
        <div className="container">
            <h3><b>My Orders</b></h3><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Delivery Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lenovo</td>
                        <td>50000</td>
                        <td>May 01,2020</td>
                        <td>Delivered</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Vivo</td>
                        <td>5000</td>
                        <td>May 01,2020</td>
                        <td>Returned</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default myOrders
    ;