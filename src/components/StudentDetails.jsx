import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('students');
    const students = saved ? JSON.parse(saved) : [];
    const found = students.find(s => s.id === parseInt(id));
    setStudent(found);
  }, [id]);

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7f3]" dir="rtl">
        <div className="text-center">
          <div className="text-xl text-gray-500">الطالب غير موجود أو تم حذفه</div>
          <button 
            onClick={() => navigate('/')}
            className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700"
          >
            العودة للقائمة
          </button>
        </div>
      </div>
    );
  }

  const getGrade = (score) => {
    const value = Number(score);
    if (value >= 85) return { text: 'امتياز', color: 'bg-emerald-100 text-emerald-700' };
    if (value >= 70) return { text: 'جيد جدًا', color: 'bg-amber-100 text-amber-700' };
    if (value >= 60) return { text: 'ناجح', color: 'bg-sky-100 text-sky-700' };
    return { text: 'راسب', color: 'bg-rose-100 text-rose-700' };
  };

  const grade = getGrade(student.score);

  return (
    <div className="min-h-screen bg-[#f8f7f3] py-10" dir="rtl">
      <div className="max-w-2xl mx-auto px-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium"
        >
          ← العودة إلى سجلات الطلاب
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-10">
        
          <div className="text-center mb-10">
            
            <h1 className="text-4xl font-bold text-gray-900">تفاصيل الطالب</h1>
            <p className="text-gray-500 mt-2">سجل امتحانات الطالب</p>
          </div>

          
          <div className="space-y-8 text-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm text-gray-500 mb-1">الاسم الكامل</p>
                <p className="font-semibold text-xl text-gray-900">{student.name}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm text-gray-500 mb-1">الرقم الأكاديمي</p>
                <p className="font-semibold text-xl text-gray-900">{student.academicNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm text-gray-500 mb-1">السنة الدراسية</p>
                <p className="font-semibold text-xl text-gray-900">{student.academicYear}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm text-gray-500 mb-1">المادة الدراسية</p>
                <p className="font-semibold text-xl text-gray-900">{student.subject}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">الدرجة</p>
                <p className="text-5xl font-bold text-gray-900">{student.score} <span className="text-2xl font-normal text-gray-400">/ 100</span></p>
              </div>
              <div>
                <span className={`inline-block px-6 py-3 rounded-2xl text-lg font-semibold ${grade.color}`}>
                  {grade.text}
                </span>
              </div>
            </div>

           
          </div>

          <div className="mt-12 flex gap-4">
            <button 
              onClick={() => navigate('/')}
              className="flex-1 py-4 border border-gray-300 text-gray-700 font-medium rounded-2xl hover:bg-gray-50 transition"
            >
              العودة للقائمة
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;