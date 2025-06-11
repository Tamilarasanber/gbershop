import { Link } from 'react-router-dom';



export const Header = ({cart}) => {
  const user = JSON.parse(localStorage.getItem('user'));


  return (
    <div className='w-full'>
      <div className='flex flex-row flex-wrap items-center justify-between bg-black h-10 text-white px-5'>
        <Link to={"/home"}> Gbershop</Link>
        <ul className='flex gap-3'>
          <li><Link to={"/home"}> Home</Link></li>
          <li><Link to={"/cart"}> <span className='rounded-xl bg-blue-500 p-1'>{cart.length}</span> View Cart</Link></li>
          {!user ? (
            <>
              <li><Link to={"/login"}> Login</Link></li>
              <li><Link to={"/signup"}> Signup</Link></li>
            </>
          ) : (
            <li><Link to={"/logout"}> Logout</Link></li>
          )}
        </ul>
      </div>
    </div>
  )
}