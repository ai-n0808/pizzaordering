import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import { menuItem } from "./data/menuItems";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add an item to the cart
  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // If the item is not in the cart, add it with a quantity of 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Update the quantity of an item in the cart
  const updateCart = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  // Remove an item from the cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          {/* Menu Page */}
          <Route path="/" element={<Menu addToCart={addToCart} />} />
          {/* Pizza Details Page */}
          <Route path="/pizza/:id" element={<Pizza />} />
          {/* Cart Page */}
          <Route
            path="/cart"
            element={<Cart cart={cart} updateCart={updateCart} />}
          />
          {/* Order Summary Page */}
          <Route path="/summary" element={<OrderSummary cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
