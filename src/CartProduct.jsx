import React from "react";

function CartProduct(props) {
  const { name, description, price } = props;
  return (
    <article class="cart-item">
      <div class="cart-item-info">
        <h4> {name} </h4>
        <p> {description} </p>
        <span> {price}$</span>
      </div>
      <div class="cart-item-amount">
        <button>–</button>
        <span>1</span>
        <button>+</button>
      </div>
    </article>
  );
}

export default CartProduct;
