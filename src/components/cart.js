import React from 'react';

const Cart = () => {
    return (
        <div className="container">
            <h3><b>Items in cart</b></h3><br/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delivery Fee</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">2</th>
                        <td>Lenovo</td>
                        <td>1</td>
                        <td>50000</td>
                        <td>50</td>
                        <td>50050</td>
                        <td><button className="btn btn-success">Edit</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lenovo</td>
                        <td>1</td>
                        <td>50000</td>
                        <td>50</td>
                        <td>50050</td>
                        <td><button className="btn btn-success">Edit</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Lenovo</td>
                        <td>1</td>
                        <td>50000</td>
                        <td>50</td>
                        <td>50050</td>
                        <td><button className="btn btn-success">Edit</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Cart;