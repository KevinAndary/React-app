import React from "react";
import { Link } from "react-router-dom";
import './EmptyCart.css';

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center text-title text-capitalize">
          <h1>Your cart is currently empty</h1>
          <Link to="/" className="btn btn-primary mt-3 jump-animation">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
