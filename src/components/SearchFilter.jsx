const SearchFilter = ({ searchTerm, setSearchTerm, filterYear, setFilterYear }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="البحث عن اسم الطالب، الرقم الأكاديمي أو المادة..."
          className="w-full bg-white border border-gray-200 rounded-3xl py-4 px-6 pl-12 focus:outline-none focus:border-indigo-500"
        />
      </div>
      
      <select 
        value={filterYear} 
        onChange={(e) => setFilterYear(e.target.value)}
        className="bg-white border border-gray-200 rounded-3xl py-4 px-6 focus:outline-none focus:border-indigo-500"
      >
        <option value="الكل">الكل</option>
        <option value="الأولى">الأولى</option>
        <option value="الثانية">الثانية</option>
        <option value="الثالثة">الثالثة</option>
        <option value="الرابعة">الرابعة</option>
      </select>
    </div>
  );
};

export default SearchFilter;