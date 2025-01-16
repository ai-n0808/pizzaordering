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

const Cart: React.FC<CartProps> = ({ cart, updateCart }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price.toFixed(2)}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateCart(item.id, Number(e.target.value))}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
