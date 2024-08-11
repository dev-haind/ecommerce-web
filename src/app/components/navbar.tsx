import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hà Khẩu Shop</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border-b-2 border-black font-bold">GIÀY NAM</button>
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-black">DÉP NAM</button>
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-black">VÍ NAM</button>
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-black">TÚI NAM</button>
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-black">PHỤ KIỆN</button>
          <button className="px-4 py-2 border-b-2 border-transparent hover:border-black">ÁO NAM</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
