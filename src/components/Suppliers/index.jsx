import React from "react";
import { SUPPLIERS_DETAILS } from "../../supply/supply-data";

import "./index.css";

function Suppliers() {
  return (
    <div className="supplier-details">
      {SUPPLIERS_DETAILS.map((detail) => (
        <div key={detail.label} className="details-container">
          <div className="d-text-container">
            <p className="detail-label">{detail.label}</p>
            <p className="detail-text">{detail.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Suppliers;
