import React from "react";
import { menuItem } from "../data/menuItems";
import { Link } from "react-router-dom";

interface MenuProps {
  addToCart: (item: { id: number; name: string; price: number }) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  return (
    <div>
      <h1>Menu</h1>
      {menuItem.map((item) => (
        <div key={item.id}>
          <Link to={`/pizza/${item.id}`}>
            <h2>{item.name}</h2>
          </Link>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
