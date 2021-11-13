import React from 'react';
import './Pay.css'
import pay from '../../../Images/payment-companies-logo.png'

const Pay = () => {
    return (
        <div className="payment-bg text-white">
            <h2 className="section-header fw-bold stylish-front pt-5 ">Payment System </h2>
            <h5> We provide Cash on delivery. <br /> Inside City $1  <br /> Outside City $2. </h5>
            <h5> We Support </h5>
            <img src={pay} alt="" style={{ width: 250, height: 60 }} />
            <h5> Another payment system coming soon. </h5>
        </div>
    );
};

export default Pay;