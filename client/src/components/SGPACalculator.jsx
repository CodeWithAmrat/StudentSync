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
    // Filter out empty courses
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              SGPA Calculator
            </h1>
            <p className="text-gray-600">
              Calculate your semester GPA based on course grades and credits
            </p>
          </div>

          {/* Grade Scale Reference */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
            <p className="font-semibold text-gray-900 mb-2">Grading Scale:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              {GRADES.map((item) => (
                <span key={item.grade} className="text-gray-700">
                  {item.grade} = {item.point}
                </span>
              ))}
            </div>
          </div>

          {/* Courses Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">
                    Course Name
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">
                    Credits
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900">
                    Grade
                  </th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    {/* Course Name */}
                    <td className="px-4 py-4">
                      <input
                        type="text"
                        value={course.name}
                        onChange={(e) =>
                          updateCourse(course.id, 'name', e.target.value)
                        }
                        placeholder="e.g., Data Structures"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </td>

                    {/* Credits */}
                    <td className="px-4 py-4">
                      <input
                        type="number"
                        value={course.credits}
                        onChange={(e) =>
                          updateCourse(course.id, 'credits', e.target.value)
                        }
                        placeholder="0"
                        min="0"
                        step="0.5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </td>

                    {/* Grade Dropdown */}
                    <td className="px-4 py-4">
                      <select
                        value={course.grade}
                        onChange={(e) =>
                          updateCourse(course.id, 'grade', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {GRADES.map((item) => (
                          <option key={item.grade} value={item.grade}>
                            {item.grade} ({item.point})
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Remove Button */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => removeCourse(course.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1 rounded transition font-medium"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Course Button */}
          <button
            onClick={addCourse}
            className="mb-8 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            + Add Course
          </button>

          {/* Calculate Button */}
          <button
            onClick={calculateSGPA}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 mb-8"
          >
            Calculate SGPA
          </button>

          {/* SGPA Result */}
          {sgpa !== null && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl p-8 text-center">
              <p className="text-gray-700 font-semibold mb-2">Your SGPA</p>
              <p className="text-6xl font-bold text-green-600">{sgpa}</p>
              <p className="text-gray-600 mt-2 text-sm">
                {sgpa >= 9 && 'Outstanding Performance! 🎉'}
                {sgpa >= 8 && sgpa < 9 && 'Excellent Work! ⭐'}
                {sgpa >= 7 && sgpa < 8 && 'Great Job! 👍'}
                {sgpa >= 6 && sgpa < 7 && 'Good Performance!'}
                {sgpa < 6 && 'Keep Improving!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
