import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
function navbar() {
  return (
    <nav className="bg-[#f85606] p-7 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-3xl font-bold tracking-tighter cursor-pointer">Daraz</div> 
        {/* Search Bar - Full width on mobile, half on desktop */}
        <div className="relative w-full md:w-2/3 lg:w-1/2">
          <input    
            type="text" 
            placeholder="Search in Daraz..." 
            className="w-full p-2.5 pl-4 rounded-sm text-black outline-none focus:ring-2 focus:ring-orange-300 bg-amber-50"         
            />
            <button className="absolute right-0 top-0 bg-[#ffe1d2] h-full px-5 rounded-r-sm transition hover:bg-orange-100">
                <FaSearch className="text-[#f85606]" />
            </button>
        </div>
        <div className="flex gap-6 items-center">
            <div className="hidden sm:block hover:underline cursor-pointer text-sm">Become a Seller</div>
            <FaShoppingCart className="text-2xl cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </nav>
  );
}
export default navbar;