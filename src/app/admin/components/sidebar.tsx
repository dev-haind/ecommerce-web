'use client'

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 bg-gray-100">
        <span className="text-xl font-semibold">DEMO Shop</span>
      </div>
      <nav className="mt-4">
        <a className="flex items-center p-4 text-teal-600 hover:bg-gray-100" href="#">
          <span className="ml-3">Sản phẩm</span>
        </a>
        <a className="flex items-center p-4 hover:bg-gray-100" href="#">
          <span className="ml-3">Cài đặt</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
