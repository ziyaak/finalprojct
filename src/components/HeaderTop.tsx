"use client";
import React, { useState } from 'react';
import UsIcon from '@/public/flag-us-svgrepo-com (1).svg';

const HeaderTop: React.FC = () => {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-300 pl-6 py-2">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex space-x-5 text-xs">
          <a href="/" className="text-gray-700 hover:text-gray-900">Account</a>
          <a href="/" className="text-gray-700 hover:text-gray-900">Track Order</a>
          <a href="/" className="text-gray-700 hover:text-gray-900">Support</a>
        </div>

      
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <UsIcon className="w-5 h-5" />
          </div>

      
          <div className="relative">
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className="text-gray-700 text-xs flex items-center focus:outline-none"
            >
              United States
              <span className="ml-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isCountryOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 rounded-md w-32 shadow-lg z-10">
                <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">United States</li>
                <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">Bangladesh</li>
                <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">India</li>
              </ul>
            )}
          </div>

        
          <div className="relative">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="text-gray-700 text-xs flex items-center focus:outline-none"
            >
              USD
              <span className="ml-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isCurrencyOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 rounded-md w-32 shadow-lg z-10">
                <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">USD</li>
                <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">BDT</li>
              </ul>
            )}
          </div>

       
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="text-gray-700 text-xs flex items-center focus:outline-none"
            >
              Bangla
              <span className="ml-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isLanguageOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 rounded-md w-32 shadow-lg z-10">
                <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">Bangla</li>
                <li className="hover:bg-gray-100 cursor-pointer px-4 py-2">English</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
