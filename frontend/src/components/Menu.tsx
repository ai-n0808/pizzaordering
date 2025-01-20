import React from "react";
import { menuItem } from "../data/menuItems";
import { Link } from "react-router-dom";

interface MenuProps {
  addToCart: (item: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  return (
    <div className="bg-orange-100 relative">
      <h1 className="text-5xl font-dancing text-center mb-4">Menu</h1>
      <Link
        to="/cart"
        className="absolute top-5 right-5 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition"
      >
        My cart 🛒
      </Link>
      <div className="grid grid-rows-3 grid-cols-3 gap-4">
        {menuItem.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 mx-auto relative w-90 h-100"
          >
            <Link to={`/pizza/${item.id}`}>
              <h2 className="text-center text-2xl font-dancing mb-2">
                {item.name}
              </h2>
              <img
                src={item.image}
                alt={item.name}
                className="hover:-translate-y-2 hover:shadow-lg shadow-black-900 mb-5"
              />
            </Link>
            <button
              className="text-sm font-dancing absolute right-5 bottom-2 hover:bg-orange-100"
              onClick={() => addToCart(item)}
            >
              Add...?
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
