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
      <section class="section"></section>
    </>
  );
}

export default App;
