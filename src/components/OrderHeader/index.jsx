import React from "react";
import "./index.css";

function OrderHeader() {
  return (
    <div className="order-header-container">
      <div className="order-header">
        <p className="orders">
          Orders &nbsp;{">"}&nbsp;
          <span className="order-underline"> Order 32457ABC</span>
        </p>
        <div className="order-below">
          <p className="order-no">Order 32457ABC</p>
          <div className="order-btns">
            <button className="back-btn">Back</button>
            <button className="approve-btn">Approve Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;
