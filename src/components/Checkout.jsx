import { useContext, useEffect, useState } from "react";
import { cartContext } from "../App";
import PlaceOrder from "./PlaceOrder";
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const navigate = useNavigate();
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const deliveryCharge = 40;
  const gstRate = 0.12;
  const [gstAmount, setGstAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalPrice);
    const gst = totalPrice * gstRate;
    setGstAmount(gst);
    setGrandTotal(totalPrice + deliveryCharge + gst);
  }, [cart]);

  const handlePlaceOrderClick = () => {
    setShowPlaceOrder(true);
   
  };

//   const handleCancelPlaceOrder = () => {
//     setShowPlaceOrder(false);
//      navigate('/cart');
//   };

  const handleConfirmPlaceOrder = () => {
    // You can add further actions here, e.g., clear cart or show notification
    setShowPlaceOrder(false);
  };

  if (showPlaceOrder) {
    navigate('/placeorder');
    return ( 
    <PlaceOrder  onConfirm={handleConfirmPlaceOrder} />);
  }

  return (
    <>
      <h1 className="font-semibold text-center text-4xl py-3">Checkout Details</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="container lg:w-1/3 border-2 border-solid p-4 mx-auto">
          <p className="mb-2">Total Price: Rs.{total.toFixed(2)}</p>
          <p className="mb-2">Delivery Charge: Rs.{deliveryCharge.toFixed(2)}</p>
          <p className="mb-2">GST (12%): Rs.{gstAmount.toFixed(2)}</p>
          <hr className="my-2" />
          <p className="font-bold text-lg mb-4">Grand Total: Rs.{grandTotal.toFixed(2)}</p>
          <button
            onClick={handlePlaceOrderClick}
            className="bg-[#ff9f00] w-full rounded px-4 py-2 text-white font-semibold hover:bg-[#e88a00]"
          >
            Place Order
          </button>
        </div>
      )}
    </>
  );
};

export default Checkout;
