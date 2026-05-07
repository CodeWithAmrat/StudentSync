import { useState } from 'react';

export default function GradeImprover() {
  const [currentCGPA, setCurrentCGPA] = useState('');
  const [totalCreditsCompleted, setTotalCreditsCompleted] = useState('');
  const [upcomingCredits, setUpcomingCredits] = useState('');
  const [targetCGPA, setTargetCGPA] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateRequiredSGPA = () => {
    setResult(null);
    setError('');

    if (!currentCGPA || !totalCreditsCompleted || !upcomingCredits || !targetCGPA) {
      setError('Please fill in all fields');
      return;
    }

    const currentCGPANum = parseFloat(currentCGPA);
    const totalCreditsNum = parseFloat(totalCreditsCompleted);
    const upcomingCreditsNum = parseFloat(upcomingCredits);
    const targetCGPANum = parseFloat(targetCGPA);

    if (
      currentCGPANum < 0 || currentCGPANum > 10 ||
      totalCreditsNum <= 0 || upcomingCreditsNum <= 0 ||
      targetCGPANum < 0 || targetCGPANum > 10
    ) {
      setError('Please enter valid values (CGPA: 0-10, Credits: > 0)');
      return;
    }

    if (targetCGPANum < currentCGPANum) {
      setResult({
        requiredSGPA: 0,
        isFeasible: true,
        message: `Your target CGPA (${targetCGPANum}) is already below your current CGPA (${currentCGPANum}). Any passing SGPA will maintain your goal.`,
      });
      return;
    }

    const requiredSGPA =
      (targetCGPANum * (totalCreditsNum + upcomingCreditsNum) -
        currentCGPANum * totalCreditsNum) /
      upcomingCreditsNum;

    const roundedSGPA = Math.round(requiredSGPA * 100) / 100;

    if (roundedSGPA > 10) {
      setResult({
        requiredSGPA: roundedSGPA,
        isFeasible: false,
        message: `An SGPA of ${roundedSGPA} is required, but the maximum possible SGPA is 10.0. Your target is mathematically out of reach for this semester.`,
      });
    } else if (roundedSGPA < 0) {
      setResult({
        requiredSGPA: 0,
        isFeasible: true,
        message: `Your target CGPA is easily achievable! You need an SGPA greater than 0.`,
      });
    } else {
      setResult({
        requiredSGPA: roundedSGPA,
        isFeasible: true,
        message: `You need to score an SGPA of ${roundedSGPA} in the upcoming semester to achieve your target CGPA of ${targetCGPANum}.`,
      });
    }
  };

  const handleReset = () => {
    setCurrentCGPA('');
    setTotalCreditsCompleted('');
    setUpcomingCredits('');
    setTargetCGPA('');
    setResult(null);
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto px-6 mb-16">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 sm:p-10">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            GPA Target Planner
          </h2>
          <p className="text-slate-600 font-medium">
            Find out exactly what SGPA you need to hit your target CGPA.
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Current CGPA</label>
              <input
                type="number"
                value={currentCGPA}
                onChange={(e) => setCurrentCGPA(e.target.value)}
                placeholder="e.g., 7.5"
                min="0" max="10" step="0.01"
                className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Target CGPA</label>
              <input
                type="number"
                value={targetCGPA}
                onChange={(e) => setTargetCGPA(e.target.value)}
                placeholder="e.g., 8.0"
                min="0" max="10" step="0.01"
                className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Current Credits</label>
              <input
                type="number"
                value={totalCreditsCompleted}
                onChange={(e) => setTotalCreditsCompleted(e.target.value)}
                placeholder="e.g., 60"
                min="0" step="0.5"
                className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Upcoming Credits</label>
              <input
                type="number"
                value={upcomingCredits}
                onChange={(e) => setUpcomingCredits(e.target.value)}
                placeholder="e.g., 20"
                min="0" step="0.5"
                className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50/80 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 font-medium text-sm">
            {error}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={calculateRequiredSGPA}
            className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
          >
            Calculate Needed SGPA
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold rounded-xl transition shadow-sm"
          >
            Reset
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div
            className={`rounded-2xl p-8 text-center animate-fade-in-up border ${
              result.isFeasible
                ? 'bg-gradient-to-br from-indigo-50 to-blue-50 border-blue-200'
                : 'bg-gradient-to-br from-red-50 to-orange-50 border-orange-200'
            }`}
          >
            <p className={`font-bold mb-2 uppercase tracking-wider text-sm ${result.isFeasible ? 'text-blue-800' : 'text-orange-800'}`}>
              {result.isFeasible ? 'Target Required' : 'Not Feasible'}
            </p>
            <p className={`text-6xl font-extrabold tracking-tight mb-4 ${result.isFeasible ? 'text-blue-600' : 'text-orange-600'}`}>
              {result.requiredSGPA}
            </p>
            <p className="text-slate-700 font-medium leading-relaxed">
              {result.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}