import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../Components/Pages/Mens/ProductList";
import SingleProductPage from "../Components/Pages/Mens/SingelProductPage"
function AllRoutes() {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/mens"  element={

        <ChakraProvider>
          <ProductList/>
        </ChakraProvider>
    
    }></Route>
    <Route path="mens/p/:id"  element={
      <ChakraProvider>
        <SingleProductPage/>
      </ChakraProvider>
    }/>
      <Route path="/womens" ></Route>
      <Route path="mobile"></Route>
      <Route></Route>
    </Routes>
  );
}

export default AllRoutes;
