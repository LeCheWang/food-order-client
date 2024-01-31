import { useNavigate } from "react-router-dom";
import StorageService from "../../services/storage.service";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { LOGO } from '../../constant/image'

export const Header = () => {
  const [cl, setCl] = useState(false);
  const navigate = useNavigate();
  const loginAccount = StorageService.getObject("loginAccount");
  
  const handleCl = () => {
    setCl((cl) => !cl);
  }

  const handleLogout = () => {
    StorageService.setObject("loginAccount", null);
    navigate("/login")
  }

  return (
    <div className="flex justify-between items-center">
      <img src={LOGO} alt="" className="w-[100px]" />
      <h1 className="font-bold text-[24px] mx-2 font-mono">Hãy để chúng tôi mang hương vị đến trước cửa nhà bạn — chào mừng bạn đến với bữa ăn dễ dàng và thú vị!</h1>
      {
        loginAccount ?
        <div className="flex justify-end p-6 items-center">
          <div className="mr-2 ">
            <h1 className="text-[#4bec81]">{loginAccount.username}</h1>
            <h1 className="text-[#4bec81]">{loginAccount.phone}</h1>
          </div>
          <div className="relative">
            <MdAccountCircle onClick={handleCl} size={50} className="color-[#4bec81] cursor-pointer"/>
            { cl && <span onClick={handleLogout} className="absolute top-[100%] right-0 bg-[#afb0af] w-[80px] text-center cursor-pointer text-white">Đăng xuất</span>}
          </div>
        </div>
        :
        <div className='flex justify-end p-4'>
          <span onClick={()=> navigate("/login")} className='bg-[#4bec81] p-2 rounded-md cursor-pointer text-white'>Đăng Nhập</span>
          <span onClick={()=> navigate("/register")} className='bg-[#4bec81] p-2 rounded-md cursor-pointer text-white ml-2'>Đăng Ký</span>
        </div>
      }  
    </div>
  )
}
