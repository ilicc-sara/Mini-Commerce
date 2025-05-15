import { React, useEffect, useState } from "react";

function Product(props) {
  // prettier-ignore
  const { name, description, price, id, setCartProducts, getIsProductInCart } = props;

  const [amount, setAmount] = useState(1);

  const isProductInCart = getIsProductInCart(id);

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isProductInCart) {
      setCartProducts((previous) => [
        ...previous,
        {
          name: name,
          description: description,
          price: price,
          id: id,
          amount: amount,
        },
      ]);
    }

    if (isProductInCart) {
      setCartProducts((previous) =>
        previous.map((item) =>
          item.id === id
            ? { ...item, amount: Number(item.amount) + Number(amount) }
            : item
        )
      );
    }

    setAmount(1);
  }

  return (
    <article className="product-item">
      <div className="product-info">
        <h4>{name}</h4>
        <p> {description} </p>
        <span> {price.toFixed(2)} $</span>
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
