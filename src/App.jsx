import './App.css';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Viewcart from './components/Viewcart';
import { Header } from './components/Header';
import { Home } from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import PlaceOrder from './components/PlaceOrder';



export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  


  // Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
   
  }, []);


  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //  const storedCartItem = localStorage.setItem('viewcartItem', JSON.stringify({cart}));

  return (
    <cartContext.Provider value={{ cart, setCart }}>
    <Router>
      <Header cart={cart} />
      <Navbar />
     
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
         
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Viewcart />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
    </cartContext.Provider>
  );
}


export default App;