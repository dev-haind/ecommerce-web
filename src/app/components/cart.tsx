import React from 'react';
import { useRouter } from 'next/router';

const Cart: React.FC = () => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-12 flex justify-end">
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Giỏ hàng</h2>
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/50" alt="Product" className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Giày Loafer LV - Giày Loafer Louis Vuitton Nam</h3>
              <p>38</p>
              <p>LOUIS VUITTON</p>
              <div className="flex items-center">
                <button className="px-2 py-1 border">-</button>
                <span className="px-4">1</span>
                <button className="px-2 py-1 border">+</button>
                <span className="ml-4">4,550,000₫</span>
              </div>
            </div>
          </div>
          <textarea className="w-full p-2 border mb-4" placeholder="Chú thích cho chủ cửa hàng"></textarea>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Tổng tiền</span>
            <span className="font-bold">4,550,000₫</span>
          </div>
          <button 
            className="w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900" 
            onClick={handleCheckout}
          >
            Thanh toán →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
