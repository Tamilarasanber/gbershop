import { useState, useEffect } from "react";
import data from "../assets/Products.json";
import { Products } from "./Products";
import HeroBannerCarousel from "./HeroBannerCarousel";


export const Home = () => {

const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  // Number of products to show initially on mobile
  const increment = 4;

 
const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  // Determine which products to show
  const displayedProducts = isMobile ? products.slice(0, visibleCount) : products;


  useEffect(() => {
    // Simulate fetching data
    try {
      setProducts(data);
    } catch (err) {
      setError('Failed to load products');
    }
  }, []);

   useEffect(() => {
    // Check if mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

 // Handle toggle
  const handleToggle = () => {
    if (visibleCount >= products.length) {
      // Reset back to 4 when "View Less"
      setVisibleCount(increment);
    } else {
      // Load more
      setVisibleCount(prev => Math.min(prev + increment, products.length));
    }
  };


  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
       <HeroBannerCarousel />
      <div className='sm:container md:container lg:container container mx-auto px-0 lg:px-5 py-5'>
       
        <div className="flex flex-row flex-wrap gap-5 mx-auto justify-center">
          {displayedProducts.map((product) => (
            <Products key={product.id} productprops={product} />
          ))}

          
        </div>
        {isMobile && products.length > increment && (
        <button
          onClick={handleToggle}
          className="mt-4 text-blue-600 underline text-sm text-center"
        >
          {visibleCount >= products.length ? 'View Less' : 'View More'}
        </button>
      )}
      </div>
    </>
  );
};