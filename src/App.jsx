import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import SearchFilter from './components/SearchFilter';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import StudentDetails from './components/StudentDetails';
import studentsData from './data/students.json';

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('الكل');
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '', academicNumber: '', academicYear: 'الأولى', subject: '', score: ''
  });

  const gradeOf = (score) => {
    const value = Number(score);
    if (value >= 85) return 'امتياز';
    if (value >= 70) return 'جيد جدًا';
    if (value >= 60) return 'ناجح';
    return 'راسب';
  };

  const computeAverage = () => {
    if (!students.length) return 0;
    return Math.round(students.reduce((sum, s) => sum + Number(s.score || 0), 0) / students.length);
  };

  const computePassingRate = () => {
    if (!students.length) return 0;
    const passCount = students.filter(s => Number(s.score || 0) >= 60).length;
    return Math.round((passCount / students.length) * 100);
  };

  const filteredStudents = students.filter((s) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = !term ||
      s.name.toLowerCase().includes(term) ||
      s.academicNumber.toLowerCase().includes(term) ||
      s.subject.toLowerCase().includes(term);
    const matchesYear = filterYear === 'الكل' || s.academicYear === filterYear;
    return matchesSearch && matchesYear;
  });

  useEffect(() => {
    const saved = localStorage.getItem('students');
    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      setStudents(studentsData);
      localStorage.setItem('students', JSON.stringify(studentsData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const scoreValue = Number(newStudent.score);
    if (!newStudent.name || !newStudent.academicNumber || !newStudent.subject || !newStudent.score) {
      alert('يرجى ملء جميع الحقول');
      return;
    }
    if (isNaN(scoreValue) || scoreValue < 0 || scoreValue > 100) {
      alert('الدرجة يجب أن تكون بين 0 و 100');
      return;
    }

    const student = {
      id: Date.now(),
      ...newStudent,
      score: scoreValue,
      date: new Date().toISOString().split('T')[0]
    };

    setStudents([...students, student]);
    setNewStudent({ name: '', academicNumber: '', academicYear: 'الأولى', subject: '', score: '' });
    setShowForm(false);
    alert('تم إضافة الطالب بنجاح!');
  };

  const deleteStudent = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطالب؟')) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  return (
    <Router>
      <div dir="rtl" className="min-h-screen bg-[#f8f7f3]">
        <Header onNewEntry={() => setShowForm(true)} />

        <div className="max-w-7xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-8">
                <div>
                  <div className="uppercase text-xs tracking-widest text-gray-500 mb-1">السجل الأكاديمي</div>
                  <h1 className="text-4xl font-semibold text-gray-400">سجلات الطلاب</h1>
                </div>

                <StatsCards 
                  totalStudents={students.length}
                  averageScore={computeAverage()}
                  passingRate={computePassingRate()}
                />

                <SearchFilter 
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filterYear={filterYear}
                  setFilterYear={setFilterYear}
                />

                <StudentTable 
                  students={filteredStudents} 
                  onDelete={deleteStudent} 
                  gradeOf={gradeOf}
                />

                {showForm && (
                  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl w-full max-w-lg">
                      <StudentForm 
                        newStudent={newStudent} 
                        setNewStudent={setNewStudent} 
                        onSubmit={handleSubmit}
                        onCancel={() => setShowForm(false)}
                      />
                    </div>
                  </div>
                )}
              </div>
            } />
            <Route path="/student/:id" element={<StudentDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;