import { useState } from "react";
import "./App.css";

function App() {
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
        <div class="products-cont ">
          <label class="search-label">Search Product</label> <br></br>
          <input type="text" class="input-product" />
          <div class="products-list">
            <article class="product-item">
              <div class="product-info">
                <h4>Sushi</h4>
                <p>Finest fish and veggies</p>
                <span>22.99$</span>
              </div>
              <div class="product-amount">
                <div class="input-amount-cont">
                  <label>Amount</label>
                  <input class="input-amount" type="number" value="1" />
                </div>
                <button class="add-btn">ADD +</button>
              </div>
            </article>
          </div>
          <button class="go-to-cart-btn">Go to Your cart</button>
          <div class="total-price">
            <h4>Total Price:</h4>
            <span>$999.99</span>
          </div>
        </div>

        <div class="cart-cont hidden">
          <div class="cart-list">
            <article class="cart-item">
              <div class="cart-item-info">
                <h4>Sushi</h4>
                <p>Finest fish and veggies</p>
                <span>22.99$</span>
              </div>
              <div class="cart-item-amount">
                <button>–</button>
                <span>1</span>
                <button>+</button>
              </div>
            </article>
          </div>
          <button class="go-to-products-btn">Back to Products</button>
          <div class="total-price">
            <h4>Total Price:</h4>
            <span>$999.99</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
