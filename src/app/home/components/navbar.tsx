import React from 'react';

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold">DEMO SHOP</h1>
      <div className="w-12 border-b-2 border-gray-300 my-2"></div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 border-2 border-black text-black font-bold">GIÀY NAM</button>
        <button className="px-4 py-2 border-2 border-gray-300 text-black">DÉP NAM</button>
        <button className="px-4 py-2 border-2 border-gray-300 text-black">VÍ NAM</button>
        <button className="px-4 py-2 border-2 border-gray-300 text-black">TÚI NAM</button>
        <button className="px-4 py-2 border-2 border-gray-300 text-black">PHỤ KIỆN</button>
        <button className="px-4 py-2 border-2 border-gray-300 text-black">ÁO NAM</button>
      </div>
    </div>
  );
};


export default NavBar;
