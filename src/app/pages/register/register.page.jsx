import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { register } from '../../services/account.service';
import StorageService from '../../services/storage.service';
import { LOGO } from '../../constant/image';


const Register = () => {
  const navigate = useNavigate();

  const registerSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phone: Yup.string().required("Phone is required!"),
    address: Yup.string().required("Address is required!"),
  })

  const handleRegister = async (value) => {
    try {
      const account = await registerSchema.validate(value);
      try {
        const result = await register(account);
        StorageService.setObject("loginAccount", result);
        alert("Register successfull!");
        navigate("/");
      } catch (error) {
        alert(error.response.data.message)
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[476px] h-[664px] bg-white rounded-lg border border-black border-opacity-[0.08]">
        <div className="flex justify-center mt-[18px]">
          <img
            className="w-[129px] h-[78px] rounded-md"
            src={LOGO}
            alt=""
          />
        </div>
        <div className="ml-[72px] mr-[73px] mt-[7px]">
          <div>
            <span className="font-bold text-2xl leading-[28.13px] text-[#3A4664]">
              Register
            </span>
          </div>
          <div>
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              onSubmit={handleRegister}
            >
              <Form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col'>
                  <label htmlFor="username">Username</label>
                  <Field className="p-2 border" id="username" name="username" placeholder="Username"/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="password">Password</label>
                  <Field type="password" className="p-2 border" id="password" name="password" placeholder="Password"/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <Field type="password" className="p-2 border" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="phone">Phone</label>
                  <Field className="p-2 border" id="phone" name="phone" placeholder="Phone"/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="address">Address</label>
                  <Field className="p-2 border" id="address" name="address" placeholder="Address"/>
                </div>
                <button type='submit' className='bg-[#4bec81] py-2 text-white'>Register</button>
              </Form>
            </Formik>
          </div>
          <div>
            <span onClick={()=> navigate("/login")} className='underline text-blue-500 cursor-pointer'>login</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register