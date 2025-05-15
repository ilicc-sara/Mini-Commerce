import { useState } from "react";
import "./App.css";
import Product from "./Product.jsx";
import CartProduct from "./CartProduct.jsx";

const info = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    id: 1,
  },
  {
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    id: 2,
  },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    id: 3,
  },
  {
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    id: 4,
  },
];

function App() {
  const [products, setProducts] = useState(info);
  const [cartProducts, setCartProducts] = useState([]);
  const [productsOverview, setProductsOverview] = useState(true);
  const [input, setInput] = useState("");

  const cartIsEmpty = cartProducts.length === 0;

  const totalAmount = cartProducts.reduce((acc, cur) => {
    return acc + Number(cur.amount);
  }, 0);

  const totalPrice = cartProducts
    .reduce((acc, cur) => {
      return acc + cur.price * Number(cur.amount);
    }, 0)
    .toFixed(2);

  function findItemAmount(id) {
    return cartProducts.find((item) => item?.id === id)?.amount;
  }

  function getIsProductInCart(id) {
    return cartProducts.includes(
      cartProducts.find((cartProduct) => cartProduct.id === id)
    );
  }

  function handleInputChange(event) {
    setInput(event.target.value);

    const filteredInfo = products.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );

    // setProducts((prev) =>
    //   prev.filter((product) =>
    //     product.name.toLowerCase().includes(input.toLowerCase())
    //   )
    // );

    setProducts(filteredInfo);

    // useEffect(() => {
    //   setProducts(info);
    //   return () => {
    //     if (input !== "")
    //       setProducts((prev) =>
    //         prev.filter((product) =>
    //           product.name.toLowerCase().includes(input.toLowerCase())
    //         )
    //       );
    //   };
    // }, [input]);
  }

  function increaseAmount(id) {
    setCartProducts((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, amount: Number(item.amount) + 1 } : item
      )
    );
  }

  function decreseAmount(id, amount) {
    if (Number(amount) !== 1) {
      setCartProducts((previous) =>
        previous.map((item) =>
          item.id === id ? { ...item, amount: Number(item.amount) - 1 } : item
        )
      );
    }
  }

  function deleteCartItem(id) {
    setCartProducts((previous) =>
      previous.filter((cartProduct) => cartProduct.id !== id)
    );
  }

  return (
    <>
      <nav>
        <h1>Mini Commerce</h1>

        <div className="cart-notification">
          <ion-icon name="cart-outline" className="cart-icon"></ion-icon>
          <div className="cart-content-number"> {totalAmount} </div>
        </div>
      </nav>
      <section className="section">
        {productsOverview && (
          <div className="products-cont">
            <label className="search-label">Search Product</label> <br></br>
            <input
              type="text"
              className="input-product"
              value={input}
              onChange={handleInputChange}
            />
            <div className="products-list">
              {products.map((product, index) => (
                <Product
                  key={index}
                  {...product}
                  setCartProducts={setCartProducts}
                  getIsProductInCart={getIsProductInCart}
                />
              ))}
            </div>
            <button
              className="go-to-cart-btn"
              onClick={() => setProductsOverview(false)}
            >
              Go to Your cart
            </button>
            <div className="total-price">
              <h4>Total Price:</h4>
              <span>{totalPrice} $</span>
            </div>
          </div>
        )}

        {!productsOverview && (
          <div className="cart-cont">
            {!cartIsEmpty && (
              <div className="cart-list">
                {cartProducts.map((cartProduct, index) => (
                  <CartProduct
                    key={index}
                    {...cartProduct}
                    findItemAmount={findItemAmount}
                    increaseAmount={increaseAmount}
                    decreseAmount={decreseAmount}
                    deleteCartItem={deleteCartItem}
                  />
                ))}
              </div>
            )}
            {cartIsEmpty && <h1>Your cart is empty...</h1>}
            <button
              className="go-to-products-btn"
              onClick={() => setProductsOverview(true)}
            >
              Back to Products
            </button>
            <div className="total-price">
              <h4>Total Price:</h4>
              <span>{totalPrice} $</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
