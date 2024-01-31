import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StorageService from '../../services/storage.service';
import CartService from '../../services/cart.service';
import OrderService from '../../services/order.service';
import { FaPlus, FaMinus  } from "react-icons/fa";
import { Field, Form, Formik } from 'formik';

const Cart = () => {
  const [cart, setCart] = useState({});
  const [hiddenFormOrder, setHiddenFormOrder] = useState(false);
  const navigate = useNavigate();
  const loginAccount = StorageService.getObject("loginAccount");
  let totalPrice = 0;
  
  useEffect(()=> { 
    if (!loginAccount){
      navigate("/login");
    }
  }, [loginAccount, navigate]);

  useEffect(()=> {
    const getCart = async()=>{
      const cartData = await CartService.getCartOfAccount(loginAccount._id);
      setCart(cartData);
    }

    getCart();
  }, [loginAccount._id]);

  const handleChangeQuantity = async (item_id, quantity) => {
    if (quantity === 0){
      return;
    }
    await CartService.updateItemQuantity(loginAccount._id, item_id, quantity); 
  }

  const handleOrder = async (value) => {
    await OrderService.createOrder(value);
    alert("Order successful!");
    setCart({});
    setHiddenFormOrder(false);
  }
 

  return (
    <div className='w-[80%] min-h-[500px] mx-auto mt-2'>
      <ul className="flex flex-col gap-4">
        <li className='flex items-center'>
          <h1 className='font-bold w-[10%]' >Image</h1>
          <h1 className='font-bold ml-4 w-[50%]'>Name</h1>
          <p className='font-bold w-[10%]'>Price</p>
          <div className='font-bold w-[10%]'>
            <span>Quantity</span>
          </div>
          <p className='font-bold w-[10%]'>Money</p>
        </li>
        {cart && cart.items?.length && cart.items.map((item)=> {
          totalPrice += item.food.price * item.quantity;
          return <li key={item._id} className='flex items-center'>
            <img className='w-[10%]' src={item.food.img} alt="" />
            <h1 className='font-bold ml-4 w-[50%]'>{item.food.name}</h1>
            <p className='w-[10%]'>{item.food.price}</p>
            <div className='w-[10%] flex items-center cursor-pointer'>
              <FaMinus onClick={() => handleChangeQuantity(item._id, +item.quantity-1)}/>
              <span className='mx-4'>{item.quantity}</span>
              <FaPlus onClick={() => handleChangeQuantity(item._id, +item.quantity+1)}/>
            </div>
            <p>{item.food.price * item.quantity}</p>
          </li>
        })}
        <li className='flex items-center'>
          <h1 className='font-bold w-[10%]' >{}</h1>
          <h1 className='font-bold ml-4 w-[50%]'>{}</h1>
          <p className='font-bold w-[10%]'>{}</p>
          <div className='font-bold w-[10%]'>
            <span>Total</span>
          </div>
          <p className='font-bold w-[10%]'>{totalPrice}</p>
        </li>
      </ul>
      <div className='flex justify-center'>
        {
         cart.items?.length && <button onClick={() => setHiddenFormOrder(!hiddenFormOrder)} className='bg-[#4bec81] p-2 text-white rounded-md'>Checkout</button>
        }
      </div>
      {
        hiddenFormOrder && 
        <div className='w-[60%] mx-auto'>
          <h1 className='font-bold text-[24px] mt-2'>set row information</h1>
          <Formik
            initialValues={{
              customer: loginAccount.username,
              phone: loginAccount.phone,
              address: loginAccount.address,
              cart_id: cart._id,
              total_money: totalPrice
            }}
            onSubmit={handleOrder}
          >
            <Form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col'>
                <label htmlFor="customer">customer</label>
                <Field className="p-2 border" id="customer" name="customer" placeholder="customer"/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="phone">phone</label>
                <Field className="p-2 border" id="phone" name="phone" placeholder="phone"/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="address">Address</label>
                <Field className="p-2 border" id="address" name="address" placeholder="address"/>
              </div>
              <button type='submit' className='bg-[#4bec81] py-2 text-white'>Order</button>
            </Form>
          </Formik>
        </div>
      }
    </div>
  )
}

export default Cart;