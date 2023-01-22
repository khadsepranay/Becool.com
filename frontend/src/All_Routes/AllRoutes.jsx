import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Pages/Cart/Cart";
import Home from "../Components/Pages/Home/Home";
import ProductList from "../Components/Pages/Mens/ProductList";
import SingleProductPage from "../Components/Pages/Mens/SingelProductPage";
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
      <Route path="/product/womens"></Route>
      <Route
        path="/singleproduct/womens/:id"
        element={
          <ChakraProvider>
            <SingleProductPage />
          </ChakraProvider>
        }
      />



{/* vikas */}

      <Route path="/mobiles"></Route>
      <Route path="/mobiles/covers"></Route>

    


{/* pranay */}
      <Route path="/carts" element={<Cart />}></Route>
    </Routes>



  );
}

export default AllRoutes;
