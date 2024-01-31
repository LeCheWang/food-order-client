import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";




const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white p-8 mt-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Liên hệ</h2>
            <div className='flex flex-col gap-4'>
              <p>78 Duy Tân, Cầu Giấy, Hà Nội</p>
              <p>Email: food.order@gmail.com</p>
              <p>Điện thoại: +84 123 456 789</p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Liên kết nhanh</h2>
            <ul className='cursor-pointer flex flex-col gap-4'>
              <li onClick={() => navigate("/")}>Trang chủ</li>
              <li onClick={() => navigate("/cart")}>Giỏ hàng</li>
              <li onClick={() => navigate("/order")}>Đơn hàng</li>
              <li onClick={() => navigate("/profile")}>Cá Nhân</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Theo dõi chúng tôi</h2>
            <div className="flex space-x-4">
              <FaFacebook size={30} /> 
              <SiZalo size={30}/>
              <FaTwitterSquare size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer