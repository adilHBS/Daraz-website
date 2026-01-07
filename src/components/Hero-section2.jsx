import img1 from '../assets/img/payment/img1.png';
import img2 from '../assets/img/payment/img2.png';
import img3 from '../assets/img/payment/img3.png';
import img4 from '../assets/img/payment/img4.png';
import img5 from '../assets/img/payment/img5.png';
import img6 from '../assets/img/payment/img6.png';
import img7 from '../assets/img/payment/img7.png';
import img8 from '../assets/img/payment/img8.png';
import img9 from '../assets/img/payment/img9.png';
import img10 from '../assets/img/payment/img10.png';

function Herosection2() {
    return (
        <div className='bg-white py-10 px-4 border-t border-gray-100'>
            <div className="max-w-6xl mx-auto flex flex-wrap justify-start gap-12 lg:gap-24">
                
                {/* Left Side: Payment Methods */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-blue-900 text-xl font-medium">Payment Methods</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 items-center">
                        <img src={img1} alt="COD" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img2} alt="Visa" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img3} alt="Mastercard" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img4} alt="EasyPaisa" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img5} alt="Daraz Wallet" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img6} alt="JazzCash" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img7} alt="UnionPay" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img8} alt="HBL" className='w-16 h-auto object-contain border rounded p-1' />
                        <img src={img9} alt="Installments" className='w-16 h-auto object-contain border rounded p-1' />
                    </div>
                </div>

                {/* Right Side: Verified By */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-blue-900 text-xl font-medium">Verified by</h3>
                    <div className="flex items-center">
                        <img src={img10} alt="PCI DSS" className='w-32 h-auto object-contain' />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Herosection2;