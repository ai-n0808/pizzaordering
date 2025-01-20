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
    <div>
      <h1 className="font-dancing text-4xl text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="grid grid-cols-3">
            <h2 className="text-3xl">{item.name}</h2>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <img
              src={item.image}
              alt={item.name}
              className="w-60 h-60 rounded-md mb-6"
            />
          </div>
        ))
      )}
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition"
        onClick={() => navigate("/")}
      >
        Back to Menu
      </button>
    </div>
  );
};

export default Cart;
