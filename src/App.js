import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import {Cart} from './pages/cart/cart'
import  {Shop} from './pages/shop/Shop.jsx'
import ShowContext from "./context/ShowContext";


function App() {
  return (
    <div className="App">
        <ShowContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/Product-cart" element={<Shop/>} />
        
            <Route path="/cart"element={<Cart/>}  />
          </Routes> 
        </Router>
        </ShowContext>
    </div>
  );
}

export default App;