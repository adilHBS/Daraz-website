
import React, { useState, useEffect } from 'react';
import { FaStar, FaSearch, FaShoppingCart, FaEye, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Herosection from './components/Herosection.jsx';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Requirement: API Fetching using useEffect
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Search Logic (JavaScript)
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(p => p.title.toLowerCase().includes(term));
    setFilteredProducts(filtered);
  };

  // Category Filter Logic (JavaScript)
  const filterByCat = (cat) => {
    if (cat === 'all') setFilteredProducts(products);
    else setFilteredProducts(products.filter(p => p.category === cat));
  };

  return (

    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      < Herosection/>
      
      
     
    
      <div className="container mx-auto p-4">
        
        {/* CATEGORY BUTTONS - Tailwind classes for styling */}
        <div className="flex flex-wrap gap-2 my-6">
          {['all', "men's clothing", 'jewelery', 'electronics', "women's clothing"].map(cat => (
            <button 
              key={cat}
              onClick={() => filterByCat(cat)}
              className="bg-white px-5 py-2 rounded-sm shadow-sm hover:text-[#f85606] hover:shadow-md capitalize text-sm font-medium border border-transparent hover:border-orange-500 transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-xl text-gray-600 animate-pulse">Loading amazing products...</div>
        ) : (
          /* RESPONSIVE GRID: Mobile: 2 cols, Tablet: 3 cols, Desktop: 5 cols */
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filteredProducts.map((p) => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProduct(p)}
                className="bg-white p-3 rounded-sm shadow hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="h-40 flex items-center justify-center overflow-hidden mb-3">
                  <img src={p.image} className="max-h-full group-hover:scale-105 transition duration-300" alt="" />
                </div>
                <h2 className="text-sm h-10 overflow-hidden leading-tight text-gray-800 group-hover:text-[#f85606]">{p.title}</h2>
                <p className="text-[#f85606] text-lg font-bold mt-2">Rs. {(p.price * 280).toFixed(0)}</p>
                <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
                  <div className="flex text-yellow-400">
                    <FaStar /><FaStar /><FaStar />
                  </div>
                  <span>({p.rating.count})</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PRODUCT DETAIL MODAL - Tailwind classes for positioning and backdrop */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-100 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-md max-w-4xl w-full relative p-6 flex flex-col md:flex-row gap-8 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-black"
            >
              <FaTimes />
            </button>
            
            <div className="md:w-1/2 flex items-center justify-center">
              <img src={selectedProduct.image} className="max-h-80 object-contain" alt="" />
            </div>
            
            <div className="md:w-1/2">
              <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600 uppercase mb-4 inline-block">{selectedProduct.category}</span>
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded flex items-center gap-1 text-sm font-bold">
                  {selectedProduct.rating.rate} <FaStar />
                </span>
                <span className="text-gray-400 text-sm">{selectedProduct.rating.count} Ratings</span>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{selectedProduct.description}</p>
              <p className="text-[#f85606] text-4xl font-bold mb-6 italic">Rs. {(selectedProduct.price * 280).toFixed(0)}</p>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-[#26abd4] text-white py-3 font-bold hover:bg-[#1d8fb3] transition">Buy Now</button>
                <button className="flex-1 bg-[#f85606] text-white py-3 font-bold hover:bg-[#d44905] transition">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
      < Footer/>
    </div>
  );
}

export default App;
