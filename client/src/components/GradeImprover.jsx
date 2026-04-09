import { useState } from 'react';

export default function GradeImprover() {
  const [currentCGPA, setCurrentCGPA] = useState('');
  const [totalCreditsCompleted, setTotalCreditsCompleted] = useState('');
  const [upcomingCredits, setUpcomingCredits] = useState('');
  const [targetCGPA, setTargetCGPA] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateRequiredSGPA = () => {
    // Reset previous results
    setResult(null);
    setError('');

    // Validation
    if (
      !currentCGPA ||
      !totalCreditsCompleted ||
      !upcomingCredits ||
      !targetCGPA
    ) {
      setError('Please fill in all fields');
      return;
    }

    const currentCGPANum = parseFloat(currentCGPA);
    const totalCreditsNum = parseFloat(totalCreditsCompleted);
    const upcomingCreditsNum = parseFloat(upcomingCredits);
    const targetCGPANum = parseFloat(targetCGPA);

    // Input validation
    if (
      currentCGPANum < 0 ||
      currentCGPANum > 10 ||
      totalCreditsNum <= 0 ||
      upcomingCreditsNum <= 0 ||
      targetCGPANum < 0 ||
      targetCGPANum > 10
    ) {
      setError('Please enter valid values (CGPA: 0-10, Credits: > 0)');
      return;
    }

    if (targetCGPANum < currentCGPANum) {
      setResult({
        requiredSGPA: 0,
        isFeasible: true,
        message: `Your target CGPA (${targetCGPANum}) is already below your current CGPA (${currentCGPANum}). Any positive SGPA will maintain or improve your CGPA.`,
      });
      return;
    }

    // Formula: Target CGPA = (Current CGPA × Total Credits + Required SGPA × Upcoming Credits) / (Total Credits + Upcoming Credits)
    // Solving for Required SGPA:
    // Required SGPA = (Target CGPA × (Total Credits + Upcoming Credits) - Current CGPA × Total Credits) / Upcoming Credits

    const requiredSGPA =
      (targetCGPANum * (totalCreditsNum + upcomingCreditsNum) -
        currentCGPANum * totalCreditsNum) /
      upcomingCreditsNum;

    const roundedSGPA = Math.round(requiredSGPA * 100) / 100;

    // Check if SGPA is feasible
    if (roundedSGPA > 10) {
      setResult({
        requiredSGPA: roundedSGPA,
        isFeasible: false,
        message: `An SGPA of ${roundedSGPA} is required, but the maximum possible SGPA is 10.0. Your target CGPA is not achievable with the given credits.`,
      });
    } else if (roundedSGPA < 0) {
      setResult({
        requiredSGPA: 0,
        isFeasible: true,
        message: `Your target CGPA is easily achievable. You can score 0 SGPA and still achieve a CGPA of at least ${targetCGPANum}.`,
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              GPA Improver
            </h1>
            <p className="text-gray-600">
              Calculate the SGPA you need to achieve your target CGPA
            </p>
          </div>

          {/* Input Section */}
          <div className="space-y-6 mb-8">
            {/* Current CGPA */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current CGPA
              </label>
              <input
                type="number"
                value={currentCGPA}
                onChange={(e) => setCurrentCGPA(e.target.value)}
                placeholder="e.g., 7.5"
                min="0"
                max="10"
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Range: 0 - 10</p>
            </div>

            {/* Total Credits Completed */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Total Credits Completed
              </label>
              <input
                type="number"
                value={totalCreditsCompleted}
                onChange={(e) => setTotalCreditsCompleted(e.target.value)}
                placeholder="e.g., 60"
                min="0"
                step="0.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Total credits you have completed so far
              </p>
            </div>

            {/* Credits in Upcoming Semester */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Credits in Upcoming Semester
              </label>
              <input
                type="number"
                value={upcomingCredits}
                onChange={(e) => setUpcomingCredits(e.target.value)}
                placeholder="e.g., 20"
                min="0"
                step="0.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Credits you will take in the next semester
              </p>
            </div>

            {/* Target CGPA */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Target CGPA
              </label>
              <input
                type="number"
                value={targetCGPA}
                onChange={(e) => setTargetCGPA(e.target.value)}
                placeholder="e.g., 8.0"
                min="0"
                max="10"
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Your desired CGPA (Range: 0 - 10)
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={calculateRequiredSGPA}
              className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Calculate Required SGPA
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Reset
            </button>
          </div>

          {/* Result Section */}
          {result && (
            <div
              className={`rounded-xl p-8 ${
                result.isFeasible
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400'
                  : 'bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-400'
              }`}
            >
              <p className="text-gray-700 font-semibold mb-3">
                {result.isFeasible ? '✓ Calculation Result' : '⚠ Warning'}
              </p>

              {/* Required SGPA Display */}
              <div className="mb-6">
                <p className="text-gray-700 text-sm mb-2">Required SGPA:</p>
                <p
                  className={`text-5xl font-bold ${
                    result.isFeasible ? 'text-green-600' : 'text-orange-600'
                  }`}
                >
                  {result.requiredSGPA}
                </p>
              </div>

              {/* Message */}
              <p className="text-gray-700 leading-relaxed">
                {result.message}
              </p>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Formula Used:</span> Required
                  SGPA = (Target CGPA × (Total Credits + Upcoming Credits) - Current
                  CGPA × Total Credits) / Upcoming Credits
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
