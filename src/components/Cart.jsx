import React from "react";

const Cart = () => {
  return (
    <div id="cart">
      <div className="cart_content">
        <div className="cart_head">
          <h2>
            Cart <small>(1)</small>
          </h2>
          <div title="Close" className="close_btn">
            <span>×</span>
          </div>
        </div>
        <div className="cart_body">
          <div className="cart_items">
            <figure className="cart_items_img">
              <img src="/images/prod2.png" alt="product-img" />
            </figure>
            <div className="cart_items_info">
              <h4>boAt BassHeads 228</h4>
              <h3 className="price">$ 649</h3>
            </div>
            <div className="cart_items_quantity">
              <span>−</span>
              <b>1</b>
              <span>+</span>
            </div>
            <div title="Remove Item" className="cart_items_delete">
              <span>×</span>
            </div>
          </div>
        </div>
        <div className="cart_foot">
          <h3>
            <small>Total:</small>
            <b>$ 649</b>
          </h3>
          <button type="button" className="checkout_btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
