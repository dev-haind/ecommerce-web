import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import ProductCard from '../components/product_card';

const products = [
  {
    image: 'https://via.placeholder.com/300',
    title: 'Giày Loafer LV - Giày Loafer Louis Vuitton Nam',
    price: '4,550,000',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Giày Da Nam Cao Cấp Louis Vuitton Da Trơn',
    price: '4,550,000',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'GIÀY LOAFER DIOR NAM - MAJOR LOAFER',
    price: '4,550,000',
  },
  {
    image: 'https://via.placeholder.com/300',
    title: 'Giày Loafer GC nam - Giày Loafer nam',
    price: '4,550,000',
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Products - Hà Khẩu Shop</title>
      </Head>
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} image={product.image} title={product.title} price={product.price} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
