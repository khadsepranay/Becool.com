import { ChakraProvider } from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import ProductList from "../Components/Pages/Mens/ProductList"

function All_Routes(){
    return(
        <Routes>
            <Route path="/"></Route>
            <Route path="/mens" element={

                <ChakraProvider>
                    <ProductList/>
                </ChakraProvider>
          }>
            
          </Route>
            <Route path="/womens"></Route>
            <Route path="mobile"></Route>
            <Route></Route>
        </Routes>
    )
}

export default All_Routes