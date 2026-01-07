  

    import { FaFacebook, FaInstagram, FaYoutube, FaPlayCircle } from "react-icons/fa"; // Icons ke liye

function Footer() {
    return (
        <div className="bg-white py-8 px-4 md:px-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
                
                {/* Left Side: Daraz International */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-[#1a4a6e] font-bold text-lg">Daraz International</h3>
                    <div className="flex flex-wrap items-center gap-6">
                        {/* Pakistan */}
                        <div className="flex items-center gap-2">
                            <img src="https://flagcdn.com/w40/pk.png" alt="PK" className="w-8 h-8 rounded-full object-cover border" />
                            <span className="text-gray-500 font-medium">Pakistan</span>
                        </div>
                        {/* Bangladesh */}
                        <div className="flex items-center gap-2">
                            <img src="https://flagcdn.com/w40/bd.png" alt="BD" className="w-8 h-8 rounded-full object-cover border" />
                            <span className="text-gray-500 font-medium">Bangladesh</span>
                        </div>
                        {/* Sri Lanka */}
                        <div className="flex items-center gap-2">
                            <img src="https://flagcdn.com/w40/lk.png" alt="SL" className="w-8 h-8 rounded-full object-cover border" />
                            <span className="text-gray-500 font-medium">Sri Lanka</span>
                        </div>
                        {/* Myanmar */}
                        <div className="flex items-center gap-2">
                            <img src="https://flagcdn.com/w40/mm.png" alt="MM" className="w-8 h-8 rounded-full object-cover border" />
                            <span className="text-gray-500 font-medium">Myanmar</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Follow Us */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-gray-700 font-medium text-lg lg:text-right">Follow Us</h3>
                    <div className="flex items-center gap-3">
                        {/* Social Icons - Aap image bhi use kar sakte hain ya icons bhi */}
                        <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
                            <FaFacebook />
                        </div>
                        <div className="w-9 h-9 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
                            <FaInstagram />
                        </div>
                        <div className="w-9 h-9 bg-[#FF0000] rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
                            <FaYoutube />
                        </div>
                        <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
                            <FaPlayCircle />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <p className="text-center text-gray-400 text-sm mt-6"> develop by Adil HBS</p>
            </div>
        </div>
  
    );
}

export default Footer;