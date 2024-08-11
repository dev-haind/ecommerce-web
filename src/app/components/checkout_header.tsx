import React from 'react';

const CheckoutHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Hà Khẩu Shop</h1>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:underline">Giỏ hàng</a>
          <span>&gt;</span>
          <a href="#" className="text-blue-600 hover:underline">Thông tin vận chuyển</a>
          <span>&gt;</span>
          <a href="#" className="text-gray-500">Phương thức thanh toán</a>
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
