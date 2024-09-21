"use client";
import React, { useState } from 'react';
import BIcon from '@/public/burger-menu-svgrepo-com.svg'
import EIcon from '@/public/mobile-charge-svgrepo-com.svg'
import GIcon from '@/public/game-svgrepo-com.svg'

import Link from 'next/link';

const CatMenu: React.FC = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isHomepageOpen, setIsHomepageOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <header className="bg-[#f7b500] text-black py-3">
      <div className="container mx-auto flex justify-around items-center">
        
       
        <div className="relative">
          <button
            className="px-12 py-3 bg-white text-black rounded hover:bg-opacity-80 text-sm flex gap-2 "
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
          <BIcon />  All Categories 
          </button>
          {isCategoryOpen && (
            <ul className="absolute bg-white text-black shadow-md w-64 mt-2 z-50 border">
              <li className="hover:bg-gray-200 px-4 py-2 flex gap-1"> <EIcon/> Mobile & Laptops</li>
              <li className="hover:bg-gray-200 px-4 py-2 flex gap-1"> <GIcon/> Gaming Entertainment</li>
              <li className="hover:bg-gray-200 px-4 py-2">Image & Video</li>
              <li className="hover:bg-gray-200 px-4 py-2">Vehicles</li>
              <li className="hover:bg-gray-200 px-4 py-2">Furniture</li>
              <li className="hover:bg-gray-200 px-4 py-2">Sport</li>
              <li className="hover:bg-gray-200 px-4 py-2">Food & Drinks</li>
              <li className="hover:bg-gray-200 px-4 py-2">Fashion Accessories</li>
              <li className="hover:bg-gray-200 px-4 py-2">Makeup Corner</li>
              <li className="hover:bg-gray-200 px-4 py-2">Toilet & Sanitation</li>
              <li className="hover:bg-gray-200 px-4 py-2">Baby Items</li>
            </ul>
          )}
        </div>

       
        <nav className="flex space-x-6">
          <div className="relative">
            <button onClick={() => setIsHomepageOpen(!isHomepageOpen)} className="text-black hover:underline">
              Homepage
            </button>
            {isHomepageOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-32 z-50">
                <li className="hover:bg-gray-100 px-4 py-2">Homepage 1</li>
                <li className="hover:bg-gray-100 px-4 py-2">Homepage 2</li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button onClick={() => setIsShopOpen(!isShopOpen)} className="text-black hover:underline">
              Shop
            </button>
            {isShopOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-32 z-50">
                <li className="hover:bg-gray-100 px-4 py-2">Shop 1</li>
                <li className="hover:bg-gray-100 px-4 py-2">Shop 2</li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button onClick={() => setIsPagesOpen(!isPagesOpen)} className="text-black hover:underline">
              Pages
            </button>
            {isPagesOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-32 z-50">
                <li className="hover:bg-gray-100 px-4 py-2">Page 1</li>
                <li className="hover:bg-gray-100 px-4 py-2">Page 2</li>
              </ul>
            )}
          </div>
          <button className="text-black hover:underline">About</button>
          <button className="text-black hover:underline">Blog</button>
          <button className="text-black hover:underline">Contact</button>
        </nav>

        
        <div>
          <Link href="/become-a-seller" className="px-4 py-2 bg-black text-white rounded hover:bg-opacity-80 text-sm">
            Become a Seller &gt;
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CatMenu;
