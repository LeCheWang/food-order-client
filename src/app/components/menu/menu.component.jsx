import { useNavigate } from "react-router-dom";

function Menu(){
  const navigate = useNavigate();

  return (
    <ul className="flex text-center justify-around bg-[#4bec81] h-[50px] leading-[50px] text-white cursor-pointer">
      <li className="flex-1 transition-all border-r hover:text-[20px]" onClick={() => navigate("/")}>Trang Chủ</li>
      <li className="flex-1 transition-all border-r hover:text-[20px]" onClick={() => navigate("/cart")}>Giỏ hàng</li>
      <li className="flex-1 transition-all border-r hover:text-[20px]" onClick={() => navigate("/order")}>Đơn Hàng</li>
      <li className="flex-1 transition-all hover:text-[20px]" onClick={() => navigate("/contact")}>Liên Hệ</li>
    </ul>
  )
}

export default Menu;