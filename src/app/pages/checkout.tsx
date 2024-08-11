import Head from 'next/head';
import Header from '../components/checkout_header';
import CheckoutForm from '../components/checkout_form';
import OrderSummary from '../components/order_summary';

const Checkout: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Checkout - Hà Khẩu Shop</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Header />
      <main className="container mx-auto px-6 py-12 flex flex-col lg:flex-row lg:space-x-6">
        <CheckoutForm />
        <OrderSummary />
      </main>
    </div>
  );
};

export default Checkout;
