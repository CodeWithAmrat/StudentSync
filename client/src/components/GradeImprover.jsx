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
      setError('Please enter valid values (CGPA: 0–10, Credits: > 0)');
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
        message: `An SGPA of ${roundedSGPA} is required, but the maximum possible is 10.0. Your target is mathematically out of reach this semester.`,
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

  const fields = [
    { label: 'Current CGPA', value: currentCGPA, setter: setCurrentCGPA, placeholder: 'e.g., 7.5', step: '0.01', max: '10' },
    { label: 'Target CGPA',  value: targetCGPA,  setter: setTargetCGPA,  placeholder: 'e.g., 8.0', step: '0.01', max: '10' },
    { label: 'Current Credits (completed)', value: totalCreditsCompleted, setter: setTotalCreditsCompleted, placeholder: 'e.g., 60', step: '0.5' },
    { label: 'Upcoming Credits (this sem)', value: upcomingCredits, setter: setUpcomingCredits, placeholder: 'e.g., 20', step: '0.5' },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 mb-16 mt-8">

      {/* Page label + title */}
      <div className="mb-6">
        <p style={{
          fontSize: '0.72rem', color: '#a78bfa',
          textTransform: 'uppercase', letterSpacing: '0.12em',
          fontWeight: 500, marginBottom: '0.5rem',
        }}>
          ✦ Academic Planner
        </p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          color: '#f8f4ff',
          marginBottom: '0.4rem',
        }}>
          GPA Target Planner
        </h2>
        <p style={{ color: '#6b5f87', fontSize: '0.9rem' }}>
          Find out exactly what SGPA you need to hit your target CGPA.
        </p>
      </div>

      {/* Main card */}
      <div style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(139,92,246,0.15)',
        borderRadius: '20px',
        backdropFilter: 'blur(14px)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Top shimmer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), rgba(236,72,153,0.3), transparent)',
        }} />

        {/* Input grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {fields.map(({ label, value, setter, placeholder, step, max }) => (
            <div key={label}>
              <label style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#a78bfa',
                marginBottom: '0.5rem',
                letterSpacing: '0.03em',
              }}>
                {label}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setter(e.target.value)}
                placeholder={placeholder}
                min="0"
                max={max}
                step={step}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                }}
              />
            </div>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.25)',
            color: '#fca5a5',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            marginBottom: '1.25rem',
            fontSize: '0.85rem',
            fontWeight: 500,
          }}>
            <span style={{ fontSize: '1rem' }}>⚠️</span>
            {error}
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={calculateRequiredSGPA}
            style={{
              flex: 1,
              padding: '0.85rem 1.5rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #db2777)',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 24px rgba(139,92,246,0.3)',
              transition: 'opacity 0.2s, transform 0.15s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Calculate Needed SGPA
          </button>
          <button
            onClick={handleReset}
            style={{
              padding: '0.85rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.04)',
              color: '#9d8fbb',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: '1px solid rgba(139,92,246,0.2)',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.1)'; e.currentTarget.style.color = '#c4b5fd'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#9d8fbb'; }}
          >
            Reset
          </button>
        </div>

        {/* Result */}
        {result && (
          <div style={{
            marginTop: '1.75rem',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            border: result.isFeasible
              ? '1px solid rgba(139,92,246,0.25)'
              : '1px solid rgba(239,68,68,0.25)',
            background: result.isFeasible
              ? 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(45,212,191,0.07))'
              : 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.08))',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: result.isFeasible
                ? 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)'
                : 'linear-gradient(90deg, transparent, rgba(239,68,68,0.4), transparent)',
            }} />

            <p style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: result.isFeasible ? '#a78bfa' : '#f87171',
              marginBottom: '0.75rem',
            }}>
              {result.isFeasible ? '✦ Required SGPA' : '✦ Not Feasible'}
            </p>

            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '4.5rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '1rem',
              background: result.isFeasible
                ? 'linear-gradient(135deg, #c4b5fd, #2dd4bf)'
                : 'linear-gradient(135deg, #f87171, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {result.requiredSGPA}
            </p>

            <p style={{
              color: '#9d8fbb',
              fontSize: '0.875rem',
              lineHeight: 1.65,
              maxWidth: '380px',
              margin: '0 auto',
            }}>
              {result.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}