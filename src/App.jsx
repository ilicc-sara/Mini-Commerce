import { useState } from "react";
import "./App.css";
import Product from "./Product.jsx";
import CartProduct from "./CartProduct.jsx";

const info = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [products, setProducts] = useState(info);
  const [cartProducts, setCartProducts] = useState(info);

  const [productsOverview, setProductsOverview] = useState(true);

  return (
    <>
      <nav>
        <h1>Mini Commerce</h1>

        <div class="cart-notification">
          <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
          <div class="cart-content-number">0</div>
        </div>
      </nav>
      <section class="section">
        {productsOverview && (
          <div class="products-cont">
            <label class="search-label">Search Product</label> <br></br>
            <input type="text" class="input-product" />
            <div class="products-list">
              {products.map((product, index) => (
                <Product
                  key={index}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
            <button
              class="go-to-cart-btn"
              onClick={() => setProductsOverview(false)}
            >
              Go to Your cart
            </button>
            <div class="total-price">
              <h4>Total Price:</h4>
              <span>$999.99</span>
            </div>
          </div>
        )}

        {!productsOverview && (
          <div class="cart-cont">
            <div class="cart-list">
              {cartProducts.map((cartProduct, index) => (
                <CartProduct
                  key={index}
                  name={cartProduct.name}
                  description={cartProduct.description}
                  price={cartProduct.price}
                />
              ))}
            </div>
            <button
              class="go-to-products-btn"
              onClick={() => setProductsOverview(true)}
            >
              Back to Products
            </button>
            <div class="total-price">
              <h4>Total Price:</h4>
              <span>$999.99</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
