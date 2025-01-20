import { useParams, useNavigate } from "react-router-dom";
import { menuItem } from "../data/menuItems";

interface PizzaProps {
  addToCart: (item: { id: number; name: string; price: number }) => void;
}

const Pizza: React.FC<PizzaProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const pizza = menuItem.find((item) => item.id === parseInt(id || "", 10));

  if (!pizza) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-2xl text-red-600 font-bold">Pizza not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-md rounded-lg max-w-3xl w-full p-6">
        <h1 className="text-center text-4xl font-dancing font-bold mb-6 text-gray-800">
          {pizza.name}
        </h1>
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p className="text-lg text-gray-700 mb-4">{pizza.description}</p>
        <p className="text-xl font-semibold text-gray-900 mb-6">
          Price: ${pizza.price.toFixed(2)}
        </p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          onClick={() => addToCart(pizza)}
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Pizza;
