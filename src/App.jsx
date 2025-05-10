import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h2>Mini Commerce</h2>

        <div class="cart-notification">
          <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
          <div class="cart-content-number">0</div>
        </div>
      </nav>
      <section></section>
    </>
  );
}

export default App;
