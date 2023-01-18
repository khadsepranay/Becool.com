import logo from './logo.svg';
import './App.css';
import AllRoutes from "./All_Routes/AllRoutes"
import ProductList from './Components/Pages/Mens/ProductList';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
