import React from "react";
import { menuItem } from "../data/menuItems";
import { Link } from "react-router-dom";

interface MenuProps {
  addToCart: (item: { id: number; name: string; price: number }) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  return (
    <div className="bg-orange-100">
      <h1 className="text-5xl font-bold text-center">Menu</h1>
      <div className="space-y-4 grid grid-rows-3 grid-cols-3 gap-3">
        {menuItem.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto"
          >
            <Link to={`/pizza/${item.id}`}>
              <h2 className="text-center font-serif">{item.name}</h2>
              <img src={item.image} alt={item.name} />
            </Link>
            <button
              className="bg-white shadow-md rounded-lg p-1 text-sm"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
