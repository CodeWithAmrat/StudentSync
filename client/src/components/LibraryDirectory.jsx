import { useState } from 'react';
import { Link } from 'react-router-dom';
import { facultyData } from '../data/facultyData';

export default function LibraryDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = facultyData.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.cabin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="library-section" className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 mb-16">

      {/* Page label + title */}
      <div className="mb-6">
        <p style={{
          fontSize: '0.72rem', color: '#a78bfa',
          textTransform: 'uppercase', letterSpacing: '0.12em',
          fontWeight: 500, marginBottom: '0.5rem'
        }}>
          ✦ Campus Info
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
          Faculty & Library Directory
        </h2>
        <p style={{ color: '#6b5f87', fontSize: '0.9rem' }}>
          Find faculty cabins and contact details instantly.
        </p>
      </div>

      {/* Main card */}
      <div style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(139,92,246,0.15)',
        borderRadius: '20px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        position: 'relative',
      }}>

        {/* Top shimmer line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.45), rgba(45,212,191,0.3), transparent)',
        }} />

        {/* Search bar + suggest button row */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(139,92,246,0.1)',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>

          {/* Search */}
          <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
            <svg
              aria-hidden="true"
              style={{
                position: 'absolute', left: '0.9rem', top: '50%',
                transform: 'translateY(-50%)',
                width: '16px', height: '16px', pointerEvents: 'none',
              }}
              fill="none" stroke="rgba(167,139,250,0.55)"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or cabin (e.g. G-05 or Library)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.7rem 1rem 0.7rem 2.5rem',
                borderRadius: '12px',
                fontSize: '0.875rem',
                backdropFilter: 'blur(8px)',
              }}
            />
          </div>

          {/* Suggest button */}
          <Link
            to="/#feedback-section"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.65rem 1.1rem',
              borderRadius: '12px',
              background: 'rgba(45,212,191,0.1)',
              border: '1px solid rgba(45,212,191,0.25)',
              color: '#2dd4bf',
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s, border-color 0.2s',
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(45,212,191,0.18)';
              e.currentTarget.style.borderColor = 'rgba(45,212,191,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(45,212,191,0.1)';
              e.currentTarget.style.borderColor = 'rgba(45,212,191,0.25)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Suggest changes
          </Link>
        </div>

        {/* Result count */}
        <div style={{
          padding: '0.6rem 1.5rem',
          borderBottom: '1px solid rgba(139,92,246,0.08)',
          fontSize: '0.72rem',
          color: '#5a4f72',
        }}>
          Showing <span style={{ color: '#a78bfa', fontWeight: 600 }}>{filteredData.length}</span> of {facultyData.length} entries
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Cabin / Dept', 'Faculty Name', 'Contact No.', 'Status'].map((h) => (
                  <th key={h} style={{
                    padding: '0.85rem 1.25rem',
                    textAlign: 'left',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    color: '#6b5f87',
                    background: 'rgba(255,255,255,0.02)',
                    borderBottom: '1px solid rgba(139,92,246,0.12)',
                    whiteSpace: 'nowrap',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((faculty, index) => (
                  <tr
                    key={faculty.id}
                    style={{
                      background: index % 2 === 0
                        ? 'transparent'
                        : 'rgba(255,255,255,0.015)',
                      borderBottom: '1px solid rgba(139,92,246,0.07)',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.07)'}
                    onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)'}
                  >
                    {/* Cabin */}
                    <td style={{ padding: '0.9rem 1.25rem' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        borderRadius: '8px',
                        background: 'rgba(45,212,191,0.1)',
                        border: '1px solid rgba(45,212,191,0.2)',
                        color: '#2dd4bf',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        fontFamily: "'Syne', sans-serif",
                      }}>
                        {faculty.cabin}
                      </span>
                    </td>

                    {/* Name */}
                    <td style={{
                      padding: '0.9rem 1.25rem',
                      color: '#e2d9f3',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}>
                      {faculty.name}
                    </td>

                    {/* Contact */}
                    <td style={{
                      padding: '0.9rem 1.25rem',
                      color: '#9d8fbb',
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                      letterSpacing: '0.03em',
                    }}>
                      {faculty.mobile}
                    </td>

                    {/* Status badge */}
                    <td style={{ padding: '0.9rem 1.25rem' }}>
                      <StatusBadge status={faculty.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{
                    padding: '3rem',
                    textAlign: 'center',
                    color: '#5a4f72',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                  }}>
                    No faculty found matching "{searchTerm}"
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

function StatusBadge({ status }) {
  const isLibrary = status === 'Library';

  const cfg = isLibrary
    ? { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.28)', color: '#c4b5fd', dot: '#8b5cf6' }
    : { bg: 'rgba(45,212,191,0.1)', border: 'rgba(45,212,191,0.25)', color: '#5eead4', dot: '#2dd4bf' };

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 10px',
      borderRadius: '100px',
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      background: cfg.bg,
      border: `1px solid ${cfg.border}`,
      color: cfg.color,
      whiteSpace: 'nowrap',
    }}>
      <span style={{
        width: 5, height: 5,
        borderRadius: '50%',
        background: cfg.dot,
        display: 'inline-block',
        flexShrink: 0,
      }} />
      {status}
    </span>
  );
}