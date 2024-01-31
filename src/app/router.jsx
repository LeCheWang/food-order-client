import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register/register.page";
import Cart from "./pages/cart/cart.page";
import Order from "./pages/order";
import ContactInfo from "./pages/contact/contact.page";

const router = createBrowserRouter([
  {
    path: "/", 
    element: (
      <MainLayout>
        <Home/>
      </MainLayout>
    )
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <Cart/>
      </MainLayout>
    )
  },
  {
    path: "/order",
    element: (
      <MainLayout>
        <Order/>
      </MainLayout>
    )
  },
  {
    path: "/contact",
    element: (
      <MainLayout>
        <ContactInfo/>
      </MainLayout>
    )
  },
  {
    path: "/login",
    element: (
      <Login/>
    )
  },
  {
    path: "/register",
    element: (
      <Register/>
    )
  }
]);

export default router;