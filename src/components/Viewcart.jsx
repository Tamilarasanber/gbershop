import { useEffect, useState, useContext } from "react";
import { cartContext } from "../App";
import Checkout from "./Checkout";

const Viewcart = () => {

  
const {cart} = useContext(cartContext)
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalPrice.toFixed(2));
  }, [cart]);
 
 

  return (
    <>
    <div className="flex">
<div className="w-1/2">
      <h1 className="font-semibold text-center text-4xl py-3">Cart Products</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="container lg:w-1/3 " >
            <div className="border-2 border-solid" key={product.id}>
               <div className="img-container w-[150px] h-[100px]">
              <img className="w-full h-full" src={product.image} alt={product.name} />
            </div>
            <div className="cartdetails mb-4">
              <p>Product Name: {product.name}</p>
              <p>Product Price: Rs.{product.price}</p>
            </div>
            </div>

           

          </div>
        ))
      )}
      <div>
        <h1 className="font-bold">Total: Rs.{total}</h1>
      </div>
      </div>
      <div className="w-1/2">
      <Checkout />
     </div>
    </div>
    
     
    </>
    
  );
};


export default Viewcart;