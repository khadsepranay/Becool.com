import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Pages/Cart/Cart";
import ProductList from "../Components/Pages/Mens/ProductList";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/mens"  element={

        <ChakraProvider>
          <ProductList/>
        </ChakraProvider>
    
    }></Route>
      <Route path="/womens" ></Route>
      <Route path="/mobiles"></Route>
      <Route path="/carts" element={<Cart/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
