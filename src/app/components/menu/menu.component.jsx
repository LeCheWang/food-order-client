import { useNavigate } from "react-router-dom";

function Menu(){
  const navigate = useNavigate();

  return (
    <ul className="flex justify-around">
      <li onClick={() => navigate("/")}>Home</li>
      <li onClick={() => navigate("/cart")}>Cart</li>
      <li onClick={() => navigate("/order")}>Order</li>
      <li onClick={() => navigate("/profile")}>Profile</li>
    </ul>
  )
}

export default Menu;