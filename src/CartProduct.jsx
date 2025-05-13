import React from "react";

function CartProduct(props) {
  // prettier-ignore
  const { name, description, price, id, findItemAmount, increaseAmount, decreseAmount } = props;

  const itemAmount = findItemAmount(id);
  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <h4> {name} </h4>
        <p> {description} </p>
        <span> {price}$</span>
      </div>
      <div className="cart-item-amount">
        <button onClick={() => decreseAmount(id, itemAmount)}>–</button>
        <span> {itemAmount} </span>
        <button onClick={() => increaseAmount(id)}>+</button>
      </div>
    </article>
  );
}

export default CartProduct;
