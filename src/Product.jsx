import { React, useState } from "react";

function Product(props) {
  const { name, description, price, id, setProducts, setCartProducts } = props;

  // function createCartItem() {
  //   const inputAmount = document.getElementById("input-amount").value;
  //   console.log(inputAmount);
  // }

  const [amount, setAmount] = useState(1);

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(amount);
  }

  return (
    <article className="product-item">
      <div className="product-info">
        <h4>{name}</h4>
        <p> {description} </p>
        <span> {price} $</span>
      </div>
      <form className="product-amount" onSubmit={handleSubmit}>
        <div className="input-amount-cont">
          <label>Amount</label>
          <input
            className="input-amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button className="add-btn">ADD +</button>
      </form>
    </article>
  );
}

export default Product;
