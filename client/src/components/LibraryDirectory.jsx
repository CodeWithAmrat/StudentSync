import { useState } from 'react';
import { Link } from 'react-router-dom'; // Navigation ke liye import
import { facultyData } from '../data/facultyData';

export default function LibraryDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = facultyData.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.cabin.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div id="library-section" className="max-w-5xl mx-auto p-6 mt-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        
        {/* Header & Search Bar */}
        <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-600">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">📚 Faculty & Library Directory</h2>
              <p className="text-emerald-100">Find faculty cabins and contact details instantly.</p>
            </div>
            
            <Link 
              to="/#feedback-section" 
              className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg text-sm font-medium transform hover:-translate-y-0.5 border border-gray-700"
            >
              <span>📝 Suggest the changes</span>
            </Link>
          </div>
          
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search by Name or Cabin Number (e.g., G-05 or Library)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 border-none"
            />
            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700 border-b-2 border-gray-200">
                <th className="p-4 font-semibold">Cabin / Dept</th>
                <th className="p-4 font-semibold">Faculty Name</th>
                <th className="p-4 font-semibold">Contact No.</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((faculty, index) => (
                  <tr 
                    key={faculty.id} 
                    className={`border-b border-gray-100 hover:bg-teal-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                  >
                    <td className="p-4 font-medium text-teal-700">{faculty.cabin}</td>
                    <td className="p-4 text-gray-800 font-semibold">{faculty.name}</td>
                    <td className="p-4 text-gray-600">{faculty.mobile}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        faculty.status === 'Library' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {faculty.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    No faculty found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}