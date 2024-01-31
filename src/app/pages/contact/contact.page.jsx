// ContactInfo.jsx
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

const imagePaths = [
  "https://img.freepik.com/photos-premium/photo-gros-plan-plats-delicieux_829042-89.jpg",
  "https://img.freepik.com/photos-premium/photo-gros-plan-plats-delicieux_829042-81.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIWCKb3DS6TnuKbtp3sxMGmdGLio6VCd0U4hAI2PjmrvILUgMbokF_JUb53tlgtL2LVc&usqp=CAU",
  "https://img.freepik.com/free-photo/woman-eating-tomato-salad-with-mozzarella-mint-served-with-white-wine_141793-2465.jpg",
  "https://img.freepik.com/premium-photo/photo-food-restaurant_829042-34.jpg",
  "https://img.freepik.com/photos-premium/photo-plats-dans-restaurant_829042-33.jpg"
];

const ContactInfo = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="grid grid-cols-2 gap-4">
              {imagePaths.map((imagePath, index) => (
                <img
                  key={index}
                  src={imagePath}
                  alt={`Hình ảnh ${index + 1}`}
                  className="w-full h-auto rounded shadow-lg mb-4 overflow-hidden transition-all hover:scale-150"
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
          <Formik 
            initialValues={{}}
            onSubmit={()=> alert("Đã gửi thông tin!")}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Tên:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border p-2"
                />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border p-2"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Nội dung tin nhắn:
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border p-2"
                />
                <ErrorMessage name="message" component="div" className="text-red-500" />
              </div>

              <button type="submit" className="bg-[#4bec81] text-white p-2 rounded-md">
                Yêu cầu liên hệ
              </button>
            </Form>
          </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
