import React from 'react';

const CheckoutForm: React.FC = () => {
  return (
    <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Thông tin thanh toán</h2>
      <p className="mb-4">
        Bạn đã có tài khoản? <a href="#" className="text-blue-600 hover:underline">Đăng nhập</a>
      </p>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Họ và tên" className="border border-gray-300 rounded px-4 py-2" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2" />
          <input type="text" placeholder="Địa chỉ" className="border border-gray-300 rounded px-4 py-2" />
          <input type="text" placeholder="Điện thoại" className="border border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>Tỉnh</option>
            <option>Chọn tỉnh thành</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>Quận/Huyện</option>
            <option>Chọn Quận/Huyện</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>Ward</option>
            <option>Choose ward</option>
          </select>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">PHƯƠNG THỨC THANH TOÁN</button>
      </form>
      <div className="mt-4">
        <a href="#" className="text-blue-600 hover:underline">Giỏ hàng</a>
      </div>
    </div>
  );
};

export default CheckoutForm;
