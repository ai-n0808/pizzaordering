import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  cart: CartItem[];
  updateCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-100 min-h-screen p-6">
      <h1 className="font-dancing text-5xl text-center mb-8 text-gray-800">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md flex items-center gap-6 p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-md"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>

              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <button
          className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition"
          onClick={() => navigate("/")}
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Cart;
