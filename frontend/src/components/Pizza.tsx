import { useParams, useNavigate } from "react-router-dom";
import { menuItem } from "../data/menuItems";

const Pizza: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const pizza = menuItem.find((item) => item.id === parseInt(id || "", 10));

  if (!pizza) {
    return <p>Pizza not found!</p>;
  }

  return (
    <div className="bg-orange-100">
      <button onClick={() => navigate("/")}>Back to Menu</button>
      <h1>{pizza.name}</h1>
      <img src={pizza.image} alt={pizza.name} />
      <p>{pizza.description}</p>
      <p>Price: ${pizza.price.toFixed(2)}</p>
    </div>
  );
};

export default Pizza;
