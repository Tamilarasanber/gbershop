import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Discover Our New Collection',
    subtitle: 'Trendy styles just for you',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80',
    cta: 'Shop Now',
    ctaLink: '#shop',
  },
  {
    title: 'Summer Sale is Here',
    subtitle: 'Up to 50% off on select items',
    imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1350&q=80',
    cta: 'Browse Deals',
    ctaLink: '#sale',
  },
  {
    title: 'New Arrivals Every Week',
    subtitle: 'Stay ahead with fresh styles',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1350&q=80',
    cta: 'See New',
    ctaLink: '#new',
  },
];

const HeroBannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="relative w-full h-[70vh] overflow-hidden font-sans">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-center bg-cover text-white flex flex-col justify-center items-center px-5 text-center transition-opacity duration-[1000ms] ease-in-out ${
              index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.imageUrl})`,
            }}
            aria-hidden={index !== currentIndex}
          >
            <div className="max-w-3xl bg-black bg-opacity-30 rounded-md px-8 py-6">
              <h1 className="text-5xl font-extrabold drop-shadow-lg mb-3">
                {slide.title}
              </h1>
              <p className="text-2xl font-normal drop-shadow-md mb-6">
                {slide.subtitle}
              </p>
              <a
                href={slide.ctaLink}
                className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-red-500 shadow-lg shadow-red-400/70 hover:bg-red-600 transition-colors"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl rounded-full p-2 cursor-pointer select-none z-30 hover:bg-opacity-60 transition"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          aria-label="Next Slide"
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl rounded-full p-2 cursor-pointer select-none z-30 hover:bg-opacity-60 transition"
        >
          &#10095;
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-4 h-4 rounded-full border-2 border-white transition-colors ${
                idx === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBannerCarousel;
