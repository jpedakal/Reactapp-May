import React from 'react';

const productData = () => {
  return (
    <div className="container">
      <img className="col-md-4" src="/images/z1pro.jpg" alt=""></img>
      <div className="col-md-8">
        <h3><b>Product Details</b></h3>
        <hr />
        <div className="row">
          <div className="col-md-2">Name</div>
          <div id="pro-val"className="col-md-4">VIVO Z1 PRO</div>
        </div>
        <div className="row">
          <div className="col-md-2">Price</div>
          <div id="pro-val"className="col-md-4">89999</div>
        </div>
        <div className="row">
          <div className="col-md-2">Seller</div>
          <div id="pro-val"className="col-md-4">Flashstar Commerce</div>
        </div>
        <div className="row">
          <div className="col-md-2">Description</div>
          <div id="pro-val"className="col-md-9">If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.</div>
        </div>
      </div>
    </div>
  )
}

export default productData;