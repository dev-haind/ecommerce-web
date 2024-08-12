'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

interface SidebarCartProps {
    setIsCartOpen: (isOpen: boolean) => void;
}

const SidebarCart: React.FC<SidebarCartProps> = ({setIsCartOpen}) => {
  const router = useRouter();
  const handleClick = () => {
    setIsCartOpen(false)
    router.push("/checkout")
  }

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 z-50">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">Giỏ hàng</h2>
        <button className="text-xl font-bold" onClick={() => setIsCartOpen(false)}>&times;</button>
      </div>
      <div className="flex items-center border-b pb-4 mb-4">
        <img
          src="https://product.hstatic.net/200000319051/product/z4226410140030_c628ef979221b29d59ff2db156754487_fd2820a409844f4aba384a37b5dbb797_large.jpg"
          alt="Product"
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <p className="font-bold">Giày Loafer GC nam - Giày Loafer nam</p>
          <p className="text-gray-600">38</p>
          <p className="text-gray-600">GUCCI</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <button className="border px-2 py-1">-</button>
          <span className="mx-2">1</span>
          <button className="border px-2 py-1">+</button>
        </div>
        <p className="font-bold">4,550,000₫</p>
      </div>
      <div className="mb-4">
        <label htmlFor="note" className="block mb-2 font-bold">
          Chú thích cho chủ cửa hàng
        </label>
        <textarea
          id="note"
          className="w-full border p-2"
          rows={3}
        ></textarea>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold">Tổng tiền</p>
        <p className="font-bold">4,550,000₫</p>
      </div>
      <button className="w-full bg-gray-800 text-white py-2 font-bold" onClick={handleClick}>
        Thanh toán →
      </button>
    </div>
  );
};

export default SidebarCart;
