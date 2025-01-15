import React from "react";
import { menuItem } from "../data/menuItems";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function Menu() {
  return (
    <div>
      {menuItem.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default Menu;
