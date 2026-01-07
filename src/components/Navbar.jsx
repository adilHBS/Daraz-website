// import React from 'react';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';
// import Logo from '../assets/img/Logo.png';
// function navbar() {
//   return (<header className="bg-[#f85606]  text-black sticky top-0 z-60 shadow-lg ">
//     <div className="text-white text-sm mb-2 flex justify-end   gap-10" >
//         <a href=""> Home</a>
//         <a href="">about</a>
//         <a href="">about</a>
//         <a href="">about</a>
//         <a href="">about</a>
//       </div> 
//  <nav className="bg-[#f85606] p-8 text-black sticky top-0 z-60 shadow-lg">
      
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="text-4xl cursor-pointer font-bold"><img src={Logo} alt="Daraz Logo" className='w-40'/></div> 
//         {/* Search Bar - Full width on mobile, half on desktop */}
//         
//         <div className="flex gap-6 items-center">
//             <div className="hidden sm:block hover:underline cursor-pointer text-sm"></div>
//             <FaShoppingCart className="text-2xl cursor-pointer hover:scale-110 transition" />
//         </div>
//       </div>
//     </nav>
//   </header>
   
//   );
// }
// export default navbar;














import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/img/Logo.png';

function Navbar() {
  return (
    <header className="bg-[#f85606] sticky top-0 z-50 shadow-md">
      {/* 1. Top Bar (Save more on App, Sell on Daraz, etc.) */}
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-end gap-6 text-xs text-white">
        <a href="#" className="hover:underline uppercase font-medium">Save More on App</a>
        <a href="#" className="hover:underline uppercase font-medium">Sell on Daraz</a>
        <a href="#" className="hover:underline uppercase font-medium">Help & Support</a>
        <a href="#" className="hover:underline uppercase font-medium">Login</a>
        <a href="#" className="hover:underline uppercase font-medium">Sign Up</a>
        <a href="#" className="hover:underline font-medium">زبان تبدیل کریں</a>
      </div>

      {/* 2. Main Navbar Section */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="shrink-0">
          <img src={Logo} alt="Daraz Logo" className="w-36 h-auto cursor-pointer" />
        </div>

<div className="relative w-full md:w-2/3 lg:w-1/2">
           <input    
             type="text" 
             placeholder="Search in Daraz..." 
             className="w-full p-3.5 pl-5  text-black outline focus:ring-2 focus:ring-orange-300 transition bg-white"         
             />
             <button className="absolute right-0 top-0 bg-[#ffe1d2] h-full px-5 rounded-r-sm transition hover:bg-orange-100">
                 <FaSearch className="text-[#f85606]" />
             </button>
        </div>

        {/* Cart Icon */}
        <div className="shrink-0">
          <FaShoppingCart className="text-white text-[28px] cursor-pointer hover:scale-105 transition-transform" />
        </div>

      </nav>
    </header>
  );
}

export default Navbar;