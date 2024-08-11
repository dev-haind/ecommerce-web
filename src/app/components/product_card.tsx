import React from 'react';

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-red-600 font-bold">{price}₫</p>
    </div>
  );
};

export default ProductCard;
