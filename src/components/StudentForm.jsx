const StudentForm = ({ newStudent, setNewStudent, onSubmit, onCancel }) => {
  return (
    <div className="p-8 md:p-10" dir="rtl">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">إدخال بيانات الطالب</h2>
        <p className="text-gray-500 mt-2">أكمل جميع الحقول لتسجيل سجل امتحان طالب.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
          <input
            type="text"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            placeholder="e.g. أحمد محمد"
            required
          />
        </div>

     
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">الرقم الأكاديمي</label>
          <input
            type="text"
            value={newStudent.academicNumber}
            onChange={(e) => setNewStudent({ ...newStudent, academicNumber: e.target.value })}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            placeholder="e.g. 2023001"
            required
          />
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">المادة الدراسية</label>
            <select
              value={newStudent.subject}
              onChange={(e) => setNewStudent({ ...newStudent, subject: e.target.value })}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white transition-all"
              required
            >
              <option value="">اختر المادة</option>
              <option value="عربي">العربي</option>
              <option value="الانجليزي">الانجليزي</option>
              <option value="الرياضيات">الرياضيات</option>
              <option value="العلوم">العلوم</option>
              <option value="الدراسات الاجتماعية">الدراسات الاجتماعية</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">السنة الدراسية</label>
            <select
              value={newStudent.academicYear}
              onChange={(e) => setNewStudent({ ...newStudent, academicYear: e.target.value })}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white transition-all"
            >
              <option value="الأولى">الأولى</option>
              <option value="الثانية">الثانية</option>
              <option value="الثالثة">الثالثة</option>
              <option value="الرابعة">الرابعة</option>
            </select>
          </div>
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">درجة الامتحان</label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              value={newStudent.score}
              onChange={(e) => setNewStudent({ ...newStudent, score: e.target.value })}
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="0 - 100"
              required
            />
            
          </div>
          <p className="text-xs text-gray-500 mt-1.5">أدخل قيمة من 0 إلى 100</p>
        </div>

        
        <div className="flex gap-4 pt-8">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-4 text-gray-700 font-medium border border-gray-300 rounded-2xl hover:bg-gray-50 transition-all"
          >
            مسح النموذج
          </button>
          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-medium transition-all active:scale-[0.98]"
          >
           حفظ
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;