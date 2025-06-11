import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = ({  onConfirm }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Basic validation (can expand as needed)
    if (!name || !address || !phone) {
      alert("Please fill all fields.");
      return;
    }
    setOrderPlaced(true);
    onConfirm();
  };
  
  if (orderPlaced) {
    return (
      <div className="p-6 bg-green-100 rounded-md max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Order Placed Successfully!</h2>
        <p className="mb-4">Thank you for your purchase, {name}.</p>
        <button 
          onClick={()=> navigate('/home')} 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input 
          type="text" 
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Address</label>
        <textarea 
          className="w-full border border-gray-300 rounded px-3 py-2" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
          rows={3}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium">Phone</label>
        <input 
          type="tel" 
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="flex justify-between">
        <button 
          onClick={()=> navigate('/cart')} 
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancel
        </button>
        <button 
          onClick={handleConfirm} 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
