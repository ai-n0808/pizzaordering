import React from "react";
import { menuItem } from "../data/menuItems";
import { Link } from "react-router-dom";

interface MenuProps {
  addToCart: (item: { id: number; name: string; price: number }) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  return (
    <div className="bg-orange-100">
      <h1 className="text-5xl font-bold text-center mb-4">Menu</h1>
      <div className="grid grid-rows-3 grid-cols-3 gap-4">
        {menuItem.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 mx-auto static w-90 h-100"
          >
            <Link to={`/pizza/${item.id}`}>
              <h2 className="text-center font-serif">{item.name}</h2>
              <img src={item.image} alt={item.name} />
            </Link>
            <button
              className="text-sm absolute"
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
