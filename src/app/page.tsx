'use client'

import Head from 'next/head';
import Header from './home/components/header';
import ProductsPage from './home/products';
import FeaturesSection from './home/features_section';
import SidebarCart from './home/sidebar_cart';
import React, { useState } from 'react';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Demo Shop</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Header setIsCartOpen={setIsCartOpen} />
      {isCartOpen && <div className="fixed inset-0 flex">
          <div 
            className="flex-1 bg-black bg-opacity-50 z-40"
          ></div>
          <SidebarCart setIsCartOpen={setIsCartOpen} />
        </div>}
      <FeaturesSection />
      <ProductsPage />
    </div>
  );
};

