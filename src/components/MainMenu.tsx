import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-wrap">
        
        
        <div className="w-full lg:w-2/3 p-4">
          <div className="bg-pink-100 rounded-lg p-8 relative">
            <span className="absolute top-4 left-4 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">
              NEW RELEASED
            </span>
            <h2 className="text-5xl font-bold text-black mb-4">
              Apple Wireless
              <br />
              Samsung S10+
            </h2>
            <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
              Shop Now &gt;
            </button>
            <img 
              src="/images/samsung-s10.png" 
              alt="Samsung S10+" 
              className="absolute bottom-0 right-0 h-full object-cover"
            />
          </div>
        </div>

        
        <div className="w-full lg:w-1/3 p-4 space-y-8">
          
          
          <div className="bg-blue-100 rounded-lg p-6 relative">
            <span className="absolute top-4 left-4 bg-yellow-300 text-gray-700 text-xs px-2 py-1 rounded">
              GAMING
            </span>
            <h2 className="text-3xl font-bold text-black mb-2">
              Apple Smart Watch
            </h2>
            <button className="mt-2 text-blue-600 hover:text-blue-800">
              Shop Now &gt;
            </button>
            <img 
              src="/images/apple-watch.png" 
              alt="Apple Smart Watch" 
              className="absolute bottom-0 right-0 h-32 object-contain"
            />
          </div>

         
          <div className="bg-yellow-100 rounded-lg p-6 relative">
            <span className="absolute top-4 left-4 bg-yellow-300 text-gray-700 text-xs px-2 py-1 rounded">
              GAMING
            </span>
            <h2 className="text-3xl font-bold text-black mb-2">
              Xbox 5th Version
            </h2>
            <button className="mt-2 text-yellow-600 hover:text-yellow-800">
              Shop Now &gt;
            </button>
            <img 
              src="/images/xbox-5th-version.png" 
              alt="Xbox 5th Version" 
              className="absolute bottom-0 right-0 h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
