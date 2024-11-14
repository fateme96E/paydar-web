'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound = () => {
  const router = useRouter()
  const handleReturn = ()=>{
    router.back()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?light')" }}>
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-red-600">به زودی</h1>
        <p className="text-lg mb-8 text-gray-700">این صفحه در حال آماده‌سازی است. منتظر خبرهای خوب باشید!</p>
        <div className="mt-4">
          <button 
          onClick={handleReturn}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none shadow-md"
          >
          بازگشت
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
