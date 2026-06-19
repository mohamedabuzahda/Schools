import { Link, useNavigate } from 'react-router-dom';

const StudentTable = ({ students, onDelete, gradeOf }) => {
  const navigate = useNavigate();
  const getGradeInfo = (score) => {
    const value = Number(score);
    if (value >= 85) return { text: 'امتياز', color: 'bg-blue-100 text-blue-700' };
    if (value >= 70) return { text: 'جيد جدًا', color: 'bg-emerald-100 text-emerald-700' };
    if (value >= 60) return { text: 'ناجح', color: 'bg-amber-100 text-amber-700' };
    return { text: 'راسب', color: 'bg-red-100 text-red-700' };
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
     
      <div className="px-8 py-5  bg-white">
        <h2 className="text-2xl font-semibold text-gray-400">سجلات الطلاب</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right min-w-[900px]">
          <thead>
            <tr className="bg-gray-50  text-sm">
              <th className="px-6 py-5 font-semibold text-gray-700 text-left">اسم الطالب</th>
              <th className="px-6 py-5 font-semibold text-gray-700">الرقم الأكاديمي</th>
              <th className="px-6 py-5 font-semibold text-gray-700">المادة</th>
              <th className="px-6 py-5 font-semibold text-gray-700">السنة الدراسية</th>
              <th className="px-6 py-5 font-semibold text-gray-700">الحالة</th>
              <th className="px-6 py-5 font-semibold text-gray-700">درجة الامتحان</th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student) => {
              const gradeInfo = getGradeInfo(student.score);
              const scorePercent = Math.min(Math.max(Number(student.score || 0), 0), 100);

              return (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="font-semibold text-gray-900">{student.name}</div>
                  </td>
                  <td className="px-6 py-5 text-gray-700 font-medium">{student.academicNumber}</td>
                  <td className="px-6 py-5 text-gray-700">{student.subject}</td>
                  <td className="px-6 py-5 text-gray-700">{student.academicYear}</td>
                  
                  <td className="px-6 py-5">
                    <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${gradeInfo.color}`}>
                      {gradeInfo.text}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 rounded-full transition-all"
                          style={{ width: `${scorePercent}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900 w-12">{student.score}</span>
                    </div>
                  </td>

                 

                 

                  <td className="px-6 py-5" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        to={`/student/${student.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                      >
                        <span>👁</span>
                       
                      </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(student.id);
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                      >
                        × 
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {students.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl">لم يتم العثور على طلاب</p>
          <p className="text-sm mt-2">أضف سجل طالب جديد للبدء</p>
        </div>
      )}
    </div>
  );
};

export default StudentTable;