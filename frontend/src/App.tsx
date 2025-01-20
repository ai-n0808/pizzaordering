import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCart = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Menu addToCart={addToCart} />} />
          <Route path="/pizza/:id" element={<Pizza addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCart={updateCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/summary" element={<OrderSummary cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
