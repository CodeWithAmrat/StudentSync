import { useState } from 'react';

const GRADES = [
  { grade: 'S', point: 10 },
  { grade: 'A', point: 9 },
  { grade: 'B', point: 8 },
  { grade: 'C', point: 7 },
  { grade: 'D', point: 6 },
  { grade: 'E', point: 5 },
  { grade: 'F', point: 0 },
];

export default function SGPACalculator() {
  const [courses, setCourses] = useState([
    { id: 1, name: '', credits: '', grade: 'S' },
  ]);
  const [sgpa, setSgpa] = useState(null);

  const getGradePoint = (grade) => {
    const gradeObj = GRADES.find((g) => g.grade === grade);
    return gradeObj ? gradeObj.point : 0;
  };

  const calculateSGPA = () => {
    const validCourses = courses.filter(
      (course) => course.name.trim() && course.credits && course.grade
    );

    if (validCourses.length === 0) {
      setSgpa(null);
      alert('Please enter at least one course with all details');
      return;
    }

    let totalGradePoints = 0;
    let totalCredits = 0;

    validCourses.forEach((course) => {
      const credits = parseFloat(course.credits);
      const gradePoint = getGradePoint(course.grade);
      totalGradePoints += gradePoint * credits;
      totalCredits += credits;
    });

    const calculatedSGPA = totalCredits > 0 ? totalGradePoints / totalCredits : 0;
    setSgpa(calculatedSGPA.toFixed(2));
  };

  const addCourse = () => {
    const newId = Math.max(...courses.map((c) => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: '', credits: '', grade: 'S' }]);
  };

  const removeCourse = (id) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id));
    } else {
      alert('You must have at least one course row');
    }
  };

  const updateCourse = (id, field, value) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mb-16 mt-8">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 sm:p-10">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            SGPA Calculator
          </h2>
          <p className="text-slate-600 font-medium">
            Calculate your semester GPA based on course grades and credits.
          </p>
        </div>

        {/* Grade Scale Reference */}
        <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-200 p-5 mb-8 rounded-2xl flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-700">
          <span className="font-bold text-slate-900 mr-2">Scale:</span>
          {GRADES.map((item) => (
            <span key={item.grade} className="bg-white px-3 py-1 rounded-md shadow-sm border border-slate-100">
              <span className="text-blue-600 font-bold">{item.grade}</span> = {item.point}
            </span>
          ))}
        </div>

        {/* Courses Table */}
        <div className="overflow-x-auto mb-8 rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100/50 text-slate-700 border-b border-slate-200">
                <th className="text-left px-5 py-4 font-semibold">Course Name</th>
                <th className="text-left px-5 py-4 font-semibold">Credits</th>
                <th className="text-left px-5 py-4 font-semibold">Grade</th>
                <th className="text-center px-5 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white/40">
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition duration-150">
                  <td className="px-5 py-4">
                    <input
                      type="text"
                      value={course.name}
                      onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                      placeholder="e.g., Data Structures"
                      className="w-full px-4 py-2.5 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </td>
                  <td className="px-5 py-4">
                    <input
                      type="number"
                      value={course.credits}
                      onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                      placeholder="0"
                      min="0"
                      step="0.5"
                      className="w-24 px-4 py-2.5 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </td>
                  <td className="px-5 py-4">
                    <select
                      value={course.grade}
                      onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
                    >
                      {GRADES.map((item) => (
                        <option key={item.grade} value={item.grade}>
                          {item.grade}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition duration-200"
                      title="Remove Course"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={addCourse}
            className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-sm"
          >
            + Add Another Course
          </button>
          <button
            onClick={calculateSGPA}
            className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
          >
            Calculate SGPA
          </button>
        </div>

        {/* SGPA Result */}
        {sgpa !== null && (
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100/50 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in-up">
            <p className="text-emerald-800 font-semibold mb-2 uppercase tracking-wider text-sm">Your Calculated SGPA</p>
            <p className="text-6xl font-extrabold text-emerald-600 tracking-tight">{sgpa}</p>
            <p className="text-emerald-700 mt-4 font-medium">
              {sgpa >= 9 && 'Outstanding Performance! 🎉'}
              {sgpa >= 8 && sgpa < 9 && 'Excellent Work! ⭐'}
              {sgpa >= 7 && sgpa < 8 && 'Great Job! 👍'}
              {sgpa >= 6 && sgpa < 7 && 'Good Performance!'}
              {sgpa < 6 && 'Keep pushing, you can do this! 💪'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}