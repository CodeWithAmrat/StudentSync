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

const gradeColors = {
  S: { color: '#2dd4bf', bg: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.25)' },
  A: { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)' },
  B: { color: '#60a5fa', bg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.25)' },
  C: { color: '#34d399', bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.25)' },
  D: { color: '#fbbf24', bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.25)' },
  E: { color: '#fb923c', bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.25)' },
  F: { color: '#f87171', bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.25)' },
};

const sgpaLabel = (val) => {
  if (val >= 9) return { text: 'Outstanding! 🎉', color: '#2dd4bf' };
  if (val >= 8) return { text: 'Excellent! ⭐', color: '#a78bfa' };
  if (val >= 7) return { text: 'Great Job! 👍', color: '#60a5fa' };
  if (val >= 6) return { text: 'Good Performance!', color: '#fbbf24' };
  return { text: 'Keep pushing! 💪', color: '#f87171' };
};

export default function SGPACalculator() {
  const [courses, setCourses] = useState([{ id: 1, name: '', credits: '', grade: 'S' }]);
  const [sgpa, setSgpa] = useState(null);

  const getGradePoint = (grade) => GRADES.find((g) => g.grade === grade)?.point ?? 0;

  const calculateSGPA = () => {
    const valid = courses.filter((c) => c.name.trim() && c.credits && c.grade);
    if (valid.length === 0) { alert('Please enter at least one course with all details'); return; }
    let totalGP = 0, totalCr = 0;
    valid.forEach((c) => {
      const cr = parseFloat(c.credits);
      totalGP += getGradePoint(c.grade) * cr;
      totalCr += cr;
    });
    setSgpa(totalCr > 0 ? (totalGP / totalCr).toFixed(2) : 0);
  };

  const addCourse = () => {
    const newId = Math.max(...courses.map((c) => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: '', credits: '', grade: 'S' }]);
  };

  const removeCourse = (id) => {
    if (courses.length > 1) setCourses(courses.filter((c) => c.id !== id));
    else alert('You must have at least one course row');
  };

  const updateCourse = (id, field, value) =>
    setCourses(courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 mt-8">

      {/* Page header */}
      <div className="mb-6">
        <p style={{ fontSize: '0.72rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '0.5rem' }}>
          ✦ Academic Tools
        </p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#f8f4ff', marginBottom: '0.4rem' }}>
          SGPA Calculator
        </h2>
        <p style={{ color: '#6b5f87', fontSize: '0.9rem' }}>Calculate your semester GPA based on course grades and credits.</p>
      </div>

      {/* Main card */}
      <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '20px', backdropFilter: 'blur(14px)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), rgba(45,212,191,0.3), transparent)' }} />

        <div style={{ padding: '1.5rem 1.5rem 0' }}>
          {/* Grade scale */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(139,92,246,0.1)', borderRadius: '14px', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b5f87', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '0.25rem' }}>Scale:</span>
            {GRADES.map((item) => {
              const cfg = gradeColors[item.grade];
              return (
                <span key={item.grade} style={{ padding: '3px 10px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 700, background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color }}>
                  {item.grade} = {item.point}
                </span>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', padding: '0 1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.25rem' }}>
            <thead>
              <tr>
                {['Course Name', 'Credits', 'Grade', 'Action'].map((h) => (
                  <th key={h} style={{ padding: '0.75rem 1rem', textAlign: h === 'Action' ? 'center' : 'left', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#6b5f87', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(139,92,246,0.12)', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course.id} style={{ borderBottom: '1px solid rgba(139,92,246,0.07)', background: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.06)'}
                  onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)'}
                >
                  <td style={{ padding: '0.65rem 1rem' }}>
                    <input type="text" value={course.name} onChange={(e) => updateCourse(course.id, 'name', e.target.value)} placeholder="e.g., Data Structures"
                      style={{ width: '100%', padding: '0.55rem 0.85rem', borderRadius: '10px', fontSize: '0.875rem' }} />
                  </td>
                  <td style={{ padding: '0.65rem 1rem' }}>
                    <input type="number" value={course.credits} onChange={(e) => updateCourse(course.id, 'credits', e.target.value)} placeholder="0" min="0" step="0.5"
                      style={{ width: '90px', padding: '0.55rem 0.75rem', borderRadius: '10px', fontSize: '0.875rem' }} />
                  </td>
                  <td style={{ padding: '0.65rem 1rem' }}>
                    <select value={course.grade} onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                      style={{ width: '100%', padding: '0.55rem 0.85rem', borderRadius: '10px', fontSize: '0.875rem', color: gradeColors[course.grade]?.color || '#f8f4ff' }}>
                      {GRADES.map((item) => (
                        <option key={item.grade} value={item.grade}>{item.grade} — {item.point} pts</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ padding: '0.65rem 1rem', textAlign: 'center' }}>
                    <button onClick={() => removeCourse(course.id)}
                      style={{ padding: '0.4rem 0.6rem', borderRadius: '8px', background: 'transparent', border: '1px solid transparent', color: '#5a4f72', cursor: 'pointer', fontSize: '1rem', transition: 'background 0.15s, color 0.15s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.12)'; e.currentTarget.style.color = '#f87171'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.2)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#5a4f72'; e.currentTarget.style.borderColor = 'transparent'; }}
                      title="Remove Course">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', padding: '0 1.5rem 1.5rem', flexWrap: 'wrap' }}>
          <button onClick={addCourse}
            style={{ flex: 1, minWidth: '160px', padding: '0.85rem 1.25rem', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', color: '#9d8fbb', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.1)'; e.currentTarget.style.color = '#c4b5fd'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#9d8fbb'; }}>
            + Add Another Course
          </button>
          <button onClick={calculateSGPA}
            style={{ flex: 1, minWidth: '160px', padding: '0.85rem 1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, #7c3aed, #db2777)', color: 'white', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', boxShadow: '0 0 24px rgba(139,92,246,0.3)', transition: 'opacity 0.2s, transform 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            Calculate SGPA
          </button>
        </div>

        {/* Result */}
        {sgpa !== null && (() => {
          const lbl = sgpaLabel(parseFloat(sgpa));
          return (
            <div style={{ margin: '0 1.5rem 1.5rem', borderRadius: '16px', padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(45,212,191,0.07))', border: '1px solid rgba(139,92,246,0.22)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)' }} />
              <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.75rem' }}>✦ Your Calculated SGPA</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.75rem', background: 'linear-gradient(135deg, #c4b5fd, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {sgpa}
              </p>
              <p style={{ color: lbl.color, fontWeight: 600, fontSize: '1rem' }}>{lbl.text}</p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}