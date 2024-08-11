import React from 'react';

const OrderSummary: React.FC = () => {
  return (
    <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Product" className="w-12 h-12 object-cover rounded mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Giày Loafer LV - Giày Loafer Louis Vuitton Nam</h3>
              <p className="text-sm">Size: 38</p>
            </div>
          </div>
          <span className="font-semibold">4,550,000₫</span>
        </div>
      </div>
      <div className="border-b pb-4 mb-4">
        <input type="text" placeholder="Mã giảm giá" className="border border-gray-300 rounded px-4 py-2 mb-2 w-full" />
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full">Sử dụng</button>
      </div>
      <div className="text-right space-y-2">
        <div className="flex justify-between">
          <span>Tạm tính</span>
          <span>4,550,000₫</span>
        </div>
        <div className="flex justify-between">
          <span>Phí ship</span>
          <span>—</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Tổng tiền</span>
          <span className="text-xl">4,550,000₫</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
