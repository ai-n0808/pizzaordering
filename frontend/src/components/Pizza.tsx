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
    <div>
      <h1 className="text-center text-4xl font-dancing font-bold mb-10">
        {pizza.name}
      </h1>
      <img src={pizza.image} alt={pizza.name} className="w-100 h-50" />
      <p>{pizza.description}</p>
      <p>Price: ${pizza.price.toFixed(2)}</p>
      <button onClick={() => navigate("/")}>Back to Menu</button>
    </div>
  );
};

export default Pizza;
