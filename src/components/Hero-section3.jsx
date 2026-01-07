
function HeroSection3() {
    return (
        <div className="bg-[#f4f4f4] py-10 px-4 md:px-10 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-[16px] font-bold text-gray-700 leading-tight">
                        How Daraz Transformed Online Shopping in Pakistan
                    </h2>
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                        Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. 
                        We have since grown to become Pakistan’s largest platform for online shopping with a 
                        network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. 
                        Our vision was to provide a safe, efficient online marketplace platform for vendors and 
                        customers across the country to come together.
                    </p>
                    <h2 className="text-[14px] font-bold text-gray-700 mt-2">
                        What Makes Us Different from Other Online Shopping Platforms?
                    </h2>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                        avail exclusive offers by downloading Daraz Wallet – a closed loop digital wallet that 
                        offers you a secure, easy way to make payments. We also have easypaisa & jazzcash payment 
                        method for our customers' ease.
                    </p>
                    <div>
                        <h3 className="text-[13px] font-bold text-gray-700">Shop from Verified Vendors</h3>
                        <p className="text-[12px] text-gray-500 leading-relaxed">
                            Daraz understands that online shopping in Pakistan comes with its fair share of risks. 
                            This is why with Daraz Marketplace and Daraz Mall customers have the security of 
                            choosing from verified vendors.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-[13px] font-bold text-gray-700">Shop Around the World with Daraz Global Collection</h3>
                        <p className="text-[12px] text-gray-500 leading-relaxed">
                            International sellers and local convenience come together with Daraz Global Collection. 
                            Get the chance to shop online from vendors around the world.
                        </p>
                    </div>
                </div>

                {/* Column 3: Categories */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-[15px] font-bold text-gray-700">Top Categories & Brands</h2>
                    
                    <section>
                        <h3 className="text-[11px] font-bold text-gray-600 uppercase">Mobile Phones in Pakistan</h3>
                        <p className="text-[11px] text-gray-500">Apple iPhones, Honor Mobiles, Huawei Mobiles, Tecno Mobiles, Redmi Mobiles, Xiaomi Mi Mobiles, Nokia Mobiles.</p>
                    </section>

                    <section>
                        <h3 className="text-[11px] font-bold text-gray-600 uppercase">Latest Laptops</h3>
                        <p className="text-[11px] text-gray-500">Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming Graphic Cards.</p>
                    </section>

                    <section>
                        <h3 className="text-[11px] font-bold text-gray-600 uppercase">LED TV</h3>
                        <p className="text-[11px] text-gray-500">Changhong Led Tv, LG Led Tv, Samsung Led Tv, Sony Led Tv.</p>
                    </section>
                </div>

                {/* Column 4: Fashion & More */}
                <div className="flex flex-col gap-4">
                    <section>
                        <h3 className="text-[11px] font-bold  text-gray-600 px-1 inline-block uppercase">Women's Fashion</h3>
                        <p className="text-[11px] text-gray-500 mt-1">Al-Karam Studio, Warda, Salitex, Bonanza Satrangi, Edenrobe, Firdous, Limelight, Sana Safinaz.</p>
                    </section>

                    <section>
                        <h3 className="text-[11px] font-bold text-gray-600 uppercase">Men's Fashion</h3>
                        <p className="text-[11px] text-gray-500">Men's Shirts, Men's T-Shirts.</p>
                    </section>

                    <section>
                        <h3 className="text-[11px] font-bold text-gray-600 uppercase">Online Grocery Store</h3>
                        <p className="text-[11px] text-gray-500">Oil & Ghee, Basmati Rice, Dried Fruits, Chocolates.</p>
                    </section>

                    <section>
                        <h3 className="text-[11px] font-bold text-gray-600 uppercase">Air Conditioners</h3>
                        <p className="text-[11px] text-gray-500">Kenwood Ac, Haier Ac, Gree Ac, Dawlance Ac, Orient Ac.</p>
                    </section>
                </div>

            </div>
        </div>
    );
}

export default HeroSection3;