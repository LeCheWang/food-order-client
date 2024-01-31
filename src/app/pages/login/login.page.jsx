import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { login } from '../../services/account.service';
import StorageService from '../../services/storage.service';
import { LOGO } from '../../constant/image';


const Login = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!")
  })

  const handleLogin = async (value) => { 
    try {
      const account = await loginSchema.validate(value);
      try {
        const result = await login(account);
        StorageService.setObject("loginAccount", result);
        alert("Login successfull!");
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
      <div className="w-[476px] h-[564px] bg-white rounded-lg border border-black border-opacity-[0.08]">
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
              Login
            </span>
          </div>
          <div>
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              onSubmit={handleLogin}
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
                <button type='submit' className='bg-[#4bec81] py-2 text-white'>Login</button>
              </Form>
            </Formik>
          </div>
          <div>
            <span onClick={()=> navigate("/register")} className='underline text-blue-500 cursor-pointer'>register</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login