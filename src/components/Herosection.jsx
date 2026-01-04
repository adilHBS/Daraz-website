import React from 'react';
import Navbar from './Navbar.jsx';

function Herosection() {    

    return (
       <div className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">    
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Welcome to Daraz</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">Your one-stop shop for everything you need!</p>
                <button className="bg-[#f85606] text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-orange-600 transition">
                    Shop Now
                </button>
            </div>
       </div>
    )
}
export default Herosection;