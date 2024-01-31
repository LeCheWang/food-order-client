import React, { useEffect, useState } from 'react'
import OrderService from '../../services/order.service'
import { useNavigate } from 'react-router-dom';
import StorageService from '../../services/storage.service';
import { OrderStatus } from '../../constant/order.status';

const Order = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const loginAccount = StorageService.getObject("loginAccount");

  useEffect(()=> { 
    if (!loginAccount){
      navigate("/login");
    }
  }, [loginAccount, navigate]);

  useEffect(()=> {
    const getOrder = async() => {
      const od = await OrderService.getOrderByAccount(loginAccount._id);
      console.log(od);
      setOrder(od);
    } 

    getOrder();
  }, [loginAccount._id])

  return (
    <div className='w-[80%] mx-auto min-h-[500px]'>
      <ul>
        {order.map(od => {
          return <li key={od._id} className='border-2 p-4 mt-2'>
            <h1 className='text-red-600'>Mã Đơn Hàng: {od._id}</h1>
            <h1>Tên Người Nhận: {od.customer}</h1>
            <h1>Số Điện Thoại: {od.phone}</h1>
            <h1>Địa Chỉ: {od.address}</h1>
            <h1>Trạng Thái Đơn Hàng: <span className='text-[#f34c4c]'>{OrderStatus[od.status]}</span></h1>
            <h1>Hình Thức Thanh Toán: Thanh toán khi nhận hàng</h1>
            <h1>Tổng tiền: <span className='text-[#64fb4d]'>{od.total_money}</span></h1>
            <ul>
              <li className='flex items-center'>
                <h1 className='font-bold w-[10%]' >Image</h1>
                <h1 className='font-bold ml-4 w-[50%]'>Name</h1>
                <p className='font-bold w-[10%]'>Price</p>
                <div className='font-bold w-[10%]'>
                  <span>Quantity</span>
                </div>
                <p className='font-bold w-[10%]'>Money</p>
              </li>
              {od.cart_id.items.map(item => {
                return <li key={item._id} className='flex items-center'>
                  <img className='w-[10%]' src={item.food.img} alt="" />
                  <h1 className='font-bold ml-4 w-[50%]'>{item.food.name}</h1>
                  <p className='w-[10%]'>{item.food.price}</p>
                  <div className='w-[10%] flex items-center cursor-pointer'>
                    <span className='mx-4'>{item.quantity}</span>
                  </div>
                  <p>{item.food.price * item.quantity}</p>
                </li>
              })}
            </ul>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Order