interface OrderSummaryProps {
  cart: { price: number; quantity: number }[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
