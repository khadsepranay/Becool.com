import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Pages/Cart/Cart";
import Home from "../Components/Pages/Home/Home";
import ProductList from "../Components/Pages/Mens/ProductList";
import ProductListW from "../Components/Pages/Womes/ProductListW";
import SingleProductPage from "../Components/Pages/Mens/SingelProductPage";
import { Login } from "../Components/login/Login";
import { Register } from "../Components/register/Register";
import { Checkout } from "../Components/Pages/chechout/Checkout";
import MobCovOpt from "../Components/Pages/Mobile/MobCovOpt";
import Covers from "../Components/Pages/Mobile/Covers";
function AllRoutes() {
  return (
    <Routes>
      {/* "Anju" */}
      <Route
        path="/"
        element={
          <ChakraProvider>
            <Home />
          </ChakraProvider>
        }
      ></Route>

      {/* vikas pawar */}

      <Route
        path="/product/mens"
        element={
          <ChakraProvider>
            <ProductList />
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/singleproduct/mens/:id"
        element={
          <ChakraProvider>
            <SingleProductPage />
          </ChakraProvider>
        }
      />
      <Route
        path="/product/womens"
        element={
          <ChakraProvider>
            <ProductListW />
          </ChakraProvider>
        }
      ></Route>
      <Route
        path="/singleproduct/womens/:id"
        element={
          <ChakraProvider>
            <SingleProductPage />
          </ChakraProvider>
        }
      />

      {/* vikas */}

      <Route path="product/mobiles" element={<MobCovOpt/>}></Route>
      <Route path="/mobiles/covers" element={<Covers/>}></Route>

      {/* pranay */}
      <Route path="/carts" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/carts/checkout" element={<Checkout/>}></Route>

    </Routes>
  );
}

export default AllRoutes;
