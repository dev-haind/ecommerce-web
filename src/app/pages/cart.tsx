import React from 'react';
import Head from 'next/head';
import Cart from '../components/cart';

const CartPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <Cart />
      </main>
    </div>
  );
};

export default CartPage;
