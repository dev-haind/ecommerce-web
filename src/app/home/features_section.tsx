// components/FeaturesSection.tsx
import React from 'react';

const features = [
  {
    icon: 'https://theme.hstatic.net/200000319051/1000917510/14/policy_icon_1.png?v=61', // Replace this with the actual icon URL
    title: 'MIỄN PHÍ GIAO HÀNG',
    description: 'Nhận hàng trong vòng 3 ngày',
  },
  {
    icon: 'https://theme.hstatic.net/200000319051/1000917510/14/policy_icon_2.png?v=61', // Replace this with the actual icon URL
    title: 'CHẤT LƯỢNG ĐẢM BẢO',
    description: 'Top 10 thương hiệu uy tín 2016',
  },
  {
    icon: 'https://theme.hstatic.net/200000319051/1000917510/14/policy_icon_3.png?v=61', // Replace this with the actual icon URL
    title: 'ĐỔI TRẢ DỄ DÀNG',
    description: 'Trả lại hàng nếu không ưng ý',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="flex justify-center space-x-8 py-8">
      {features.map((feature, index) => (
        <div key={index} className="border-2 border-gray-300 p-6 flex flex-col items-center">
          <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
          <p className="text-center text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
