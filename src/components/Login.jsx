import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }


    const storedUser   = JSON.parse(localStorage.getItem('user'));
    if (storedUser   && storedUser .email === email && storedUser .password === password) {
      navigate('/home'); // Redirect to home page on successful login
    } else {
      setError('Invalid email or password');
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className='my-5 text-[32px] text-[#000;]' >Gbershop</h1>
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleLogin}>
       
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
        <div>
          <p className='mt-4'>Don't have an account yet? <span className='text-[rgb(187,151,109)] text-opacity-70'><Link to={"/signup"}> Register</Link></span></p>
          
        </div>
      </form>
    </div>
  );
};


export default Login;