import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  updateCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-100">
      <h1 className="">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price.toFixed(2)}</p>
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
