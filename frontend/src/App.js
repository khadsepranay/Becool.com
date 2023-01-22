
import AllRoutes from "./All_Routes/AllRoutes";
import Footer from "./Components/Pages/Footer/Footer";
import Navbar from"../src/Components/Pages/Navbar/Navbar"
import { ChakraProvider } from "@chakra-ui/react";



import './App.css';
function App() {
  return (
    <div className="App">
      {/* // <ChakraProvider><Navbar/></ChakraProvider> */}
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
