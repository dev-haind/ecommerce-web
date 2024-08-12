'use client'

import Sidebar from './components/sidebar';
import Header from './components/header';
import React, { useState, useRef, useEffect } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const packages = [
    { image: 'https://product.hstatic.net/200000319051/product/z2739864501882_39bfd2eb6b7be12d9409ac7b8705a8ee_386bc82291f54d2293655be2e0d2ed49_large.jpg', name: 'Giày Loafer LV - Giày Loafer Louis Vuitton Nam', type: 'Giày', price: '4.500.000đ', duration: '3D 2N', phone: '(164)224-5824', email: 'ronnie.nelson@mail.com' },
    { image: 'https://product.hstatic.net/200000319051/product/z4072924695553_7259be8a3a09594e9d61541d24888b91_2c8377b65a11426c8a5e99e036711e64_large.jpg', name: 'Giày Da Nam Cao Cấp Louis Vuitton Da Trơn', type: 'Giày', price: '4.000.000đ', duration: '2D 3N', phone: '(910)346-2457', email: 'diana.estrada@mail.com' },
    // Add more packages as needed
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-100">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Sản phẩm</h3>
            <p className="text-gray-600">Toàn bộ sản phẩm cửa hàng</p>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Hình ảnh
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tên
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Loại
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border-b border-gray-200"><img src={pkg.image} className="w-full h-64 object-cover mb-4 rounded" /></td>
                    <td className="px-6 py-4 border-b border-gray-200">{pkg.name}</td>
                    <td className="px-6 py-4 border-b border-gray-200">{pkg.type}</td>
                    <td className="px-6 py-4 border-b border-gray-200">{pkg.price}</td>
                    <td className="px-6 py-4 border-b border-gray-200"></td>
                    <td className="px-6 py-4 border-b border-gray-200"></td>
                    <td className="px-6 py-4 border-b border-gray-200"></td>
                    <td className="px-6 py-4 border-b border-gray-200 text-right">
                    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Xem
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Sửa
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100" role="menuitem">
              Xoá
            </a>
          </div>
        </div>
      )}
    </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
