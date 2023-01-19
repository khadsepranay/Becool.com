import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import ProductList from "../Components/Pages/Mens/ProductList";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ChakraProvider><Home/></ChakraProvider>}></Route>
      <Route path="/mens"  element={

        <ChakraProvider>
          <ProductList/>
        </ChakraProvider>
    
    }></Route>
      <Route path="/womens" ></Route>
      <Route path="mobile"></Route>
      <Route></Route>
    </Routes>
  );
}

export default AllRoutes;