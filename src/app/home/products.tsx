import React from 'react';
import Head from 'next/head';
import Navbar from './components/navbar';
import ProductCard from './components/product_card';

const products = [
  {
    image: 'https://product.hstatic.net/200000319051/product/z2739864501882_39bfd2eb6b7be12d9409ac7b8705a8ee_386bc82291f54d2293655be2e0d2ed49_large.jpg',
    title: 'Giày Loafer LV - Giày Loafer Louis Vuitton Nam',
    price: '4,550,000',
  },
  {
    image: 'https://product.hstatic.net/200000319051/product/z4072924695553_7259be8a3a09594e9d61541d24888b91_2c8377b65a11426c8a5e99e036711e64_large.jpg',
    title: 'Giày Da Nam Cao Cấp Louis Vuitton Da Trơn',
    price: '4,550,000',
  },
  {
    image: 'https://product.hstatic.net/200000319051/product/z4226410140030_c628ef979221b29d59ff2db156754487_fd2820a409844f4aba384a37b5dbb797_large.jpg',
    title: 'GIÀY LOAFER DIOR NAM - MAJOR LOAFER',
    price: '4,550,000',
  },
  {
    image: 'https://product.hstatic.net/200000319051/product/z3583488575806_de9769fee65f188c152b12c4c3ffc8b0_66ab03bc63e14cc4a1763dffd0c1efe1_large.jpg',
    title: 'Giày Loafer GC nam - Giày Loafer nam',
    price: '4,550,000',
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Products - DEMO Shop</title>
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
