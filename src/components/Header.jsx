import { Link } from 'react-router-dom';

const Header = ({ onNewEntry }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold text-2xl text-gray-500">Schools CRM</div>
          </div>
        </div>

        <button 
          onClick={onNewEntry}
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2.5 rounded-2xl font-medium flex items-center gap-2 transition"
        >
      إضافة طالب +
        </button>
      </div>
    </header>
  );
};

export default Header;