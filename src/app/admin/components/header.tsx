
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 p-2 rounded-l border border-r-0"
        />
        <button className="bg-teal-600 p-2 rounded-r text-white">
        </button>
      </div>
      <div className="flex items-center space-x-4">
      </div>
    </header>
  );
};

export default Header;
