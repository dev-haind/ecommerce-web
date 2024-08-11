import Head from 'next/head';
import Header from '../components/header';
import Cart from '../components/cart';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hà Khẩu Shop</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Header />
      <Cart />
    </div>
  );
};

