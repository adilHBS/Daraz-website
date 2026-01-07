import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from '../assets/img/hero1.png';
import hero2 from '../assets/img/hero2.png';
import hero3 from '../assets/img/hero3.png';
import hero4 from '../assets/img/hero4.png';

function Herosection() {    

    return (
        <div className=' justify-center mx-auto w-full '>
       <div className=" py-20 mx-auto w-full text-center mb-10">
            <button className=" border border-blue-500 text-blue-500 font-bold py-4 px-8 w-2xl mx-auto ">
            LOAD MORE
            </button>
       </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-10 mx-auto w-full justify-center"> 
<div className="flex flex-col gap-2 text-sm text-gray-600 tracking-wide">
    <h2>Customer Care</h2>
    <a href="">Help Center</a>
    <a href="">How to Buy</a>
    <a href="">Corporate & Bulk Purchasing</a>
    <a href="">Returns & Refunds</a>
    <a href="">Daraz Shop</a>
    <a href="">Contact Us</a>
    <a href="">Purchase Protection</a>
    <a href="">Daraz Pick up Points</a>
    <a href=""></a>
</div>
<div className="flex flex-col gap-2 text-sm text-gray-600 tracking-wide justify-center">
    <h2>Daraz</h2>
    <a href="">About Us</a>
    <a href="">Digital Payments</a>
    <a href="">Daraz Donates</a>
    <a href="">Daraz Blog</a>
    <a href="">Terms & Conditions</a>
    <a href="">Privacy Policy</a>
    <a href="">NTN Number : 4012118-6</a>
    <a href="">STRN Number : 1700401211818</a>
    <a href="">Online Shopping App</a>
    <a href="">Online Grocery Shopping</a>
    <a href="">Daraz Exclusive</a>
    <a href="">Daraz University</a>
    <a href="">Join Daraz Affiliate Program</a>
</div>
<div className=" text-gray-600 flex flex-col-2 gap-2 text-sm tracking-wide">
    <div><img src={Hero} alt="" />
    </div>
    <p> <br /> 
    Download App</p>
    
</div>
<div className="flex flex-col gap-2 text-sm text-gray-600 tracking-wide">
    <div className="flex flex-col-1 gap-2 text-sm text-gray-600 tracking-wide">
    <div><img src={hero2} alt="" /></div>
    <div><img src={hero3} alt="" /></div>
    
</div>
    <div><img src={hero4} alt="" />
    
    
    
    </div>

</div>
       </div>
       </div>
    )
}
export default Herosection;