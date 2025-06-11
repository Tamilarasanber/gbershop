import {useContext } from "react";
import { cartContext } from "../App";

export const Products = ({ productprops }) => {
  const {cart, setCart} = useContext(cartContext);

  const addCart = () => {
   if (!cart.some(item => item.id === productprops.id)) {
  setCart([...cart, productprops]);

  
}
  };


  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== productprops.id));
  };


  function productNametrim(str) {
    const maxLength = 15;
    const originalText = str.trim();
    if (originalText.length > maxLength) {
      return originalText.slice(0, maxLength) + '...';
    }
    return originalText;
  }



  return (
    <div style={{ width: "200px", height: "250px" }}>
      <div>
        <img className="w-full h-full" src={productprops.image} alt={productprops.name} />
      </div>
      <div className="details">
        <h1>{productNametrim(productprops.name)}</h1>
        <p>Rs.{productprops.price}</p>
        {cart.some(item => item.id === productprops.id) ? (
          <button onClick={removeCart} className="rounded bg-red-600 text-white p-2">Remove From Cart</button>
        ) : (
          <button onClick={addCart} className="rounded bg-[#ff9f00] text-white p-2">Add to Cart</button>
        )}
      </div>
    </div>
    
  );
};