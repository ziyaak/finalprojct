"use client"
import React from 'react';
import UsIcon from '@/public/flag-us-svgrepo-com (1).svg'

const HeaderTop: React.FC = () => {
  return (
    <header className=" bg-white border-b border-gray-300 pl-6    ">
      <div className="container mx-auto flex justify-around">
        <div className="flex space-x-5 text-xs">
          <a href="/" className="text-gray-700 hover:text-gray-900">Account</a>
          <a href="/" className="text-gray-700 hover:text-gray-900">Track Order</a>
          <a href="/" className="text-gray-700 hover:text-gray-900">Support</a>
        </div>
        <div className=""></div> 
        <div className="flex items-center space-x-4">
          <a href="/" className=' rounded-t-full  aspect-square object-cover'>
           <UsIcon />
          </a>
          <select name="" id="" className='text-gray-700  text-xs'>
            <option value="">United State</option>
            <option value="">Bangladesh</option>
            <option value="">India</option>

          </select>
         
          
          <select name="" id="" className='text-gray-700  text-xs'>
            <option value="">USD</option>
            <option value="">BDT</option>
            

          </select>
          <select name="" id="" className='text-gray-700  text-xs'>
            <option value="">Bangala</option>
            <option value="">English</option>
            

          </select>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
