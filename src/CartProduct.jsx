import React from "react";

function CartProduct(props) {
  const { name, description, price, id } = props;
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h4> {name} </h4>
        <p> {description} </p>
        <span> {price}$</span>
      </div>
      <div className="cart-item-amount">
        <button>–</button>
        <span>1</span>
        <button>+</button>
      </div>
    </article>
  );
}

export default CartProduct;
