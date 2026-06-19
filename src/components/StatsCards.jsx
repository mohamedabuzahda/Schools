const StatsCards = ({ totalStudents, averageScore, passingRate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-3xl p-6 shadow border border-gray-100">
        <div className="text-sm text-gray-500">إجمالي الطلاب</div>
        <div className="text-4xl font-semibold mt-3">{totalStudents}</div>
      </div>
      <div className="bg-white rounded-3xl p-6 shadow border border-gray-100">
        <div className="text-sm text-gray-500">متوسط الدرجات</div>
        <div className="text-4xl font-semibold mt-3">{averageScore} pts</div>
      </div>
      <div className="bg-white rounded-3xl p-6 shadow border border-gray-100">
        <div className="text-sm text-gray-500">معدل النجاح</div>
        <div className="text-4xl font-semibold mt-3">{passingRate}%</div>
      </div>
    </div>
  );
};

export default StatsCards;