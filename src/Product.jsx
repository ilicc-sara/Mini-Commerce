import React from "react";

function Product(props) {
  const { name, description, price } = props;
  return (
    <article class="product-item">
      <div class="product-info">
        <h4>{name}</h4>
        <p> {description} </p>
        <span> {price} $</span>
      </div>
      <div class="product-amount">
        <div class="input-amount-cont">
          <label>Amount</label>
          <input class="input-amount" type="number" value="1" />
        </div>
        <button class="add-btn">ADD +</button>
      </div>
    </article>
  );
}

export default Product;
