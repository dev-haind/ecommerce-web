'use client'

import { useState } from 'react';

interface HeaderProps {
  setIsCartOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({setIsCartOpen}) => {
  const [cartItems, setCartItems] = useState<number>(1);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone"></i>
            <span>Chăm sóc khách hàng: 0866 xxx xxx</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-shopping-cart"></i>
            <span>Mua hàng online: 033 99 xxxxx</span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">DEMO SHOP</h1>
          <p className="text-sm">CERTIFICATION OF LUXURY MEN&apos;S FASHION</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>Tất cả</option>
          </select>
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Tìm kiếm..."
            />
            <button className="absolute right-2 top-1">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-user"></i>
            <span>Tài khoản</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <i className="fas fa-shopping-cart"></i>
            <span>Giỏ hàng ({cartItems})</span>
          </div>
        </div>
      </div>
      <nav className="bg-black text-white">
        <div className="container mx-auto px-6 py-2 flex space-x-4 justify-around">
          <a href="#" className="hover:underline">TRANG CHỦ</a>
          <a href="#" className="hover:underline">PHỤ KIỆN NAM</a>
          <a href="#" className="hover:underline">GIÀY NAM</a>
          <a href="#" className="hover:underline">DÉP NAM</a>
          <a href="#" className="hover:underline">VÍ NAM</a>
          <a href="#" className="hover:underline">TÚI NAM</a>
          <a href="#" className="hover:underline">ÁO NAM</a>
          <a href="#" className="hover:underline">QUẦN NAM</a>
          <a href="#" className="hover:underline">GIỚI THIỆU</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
