import { useState } from 'react';

const pyqData = [
  { id: 1, subject: "Engineering Chemistry", code: "CHY1001", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/19nUJNqDNPaUa29CJeFbg4k9lcTcpTUYN/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1JtmIJ-eVOPOm4-IX0AToN1yueDyjb4RA/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/1VCVn-oNGT0XzFyWJVjZx3lJMziltAkU1/view?usp=sharing" },
      { name: "Paper 4", type: "Mid Term", link: "https://drive.google.com/file/d/1tJ6oXEolikBYLyFdm1TW4uvJiUT-wK0J/view?usp=sharing" }
  ]},
  { id: 2, subject: "Environmental Sustainability", code: "CHY1006", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1g1wjWmlka0z_C2ALx1w2DEfvf_wTE84U/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1fG-4rOaV0XIm6eN-6EEA9ZW1mBEBtGbw/view?usp=sharing" }
  ]},
  { id: 3, subject: "Fundamentals of AI and ML", code: "CSA2001", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1uJXLCp795NOM4Y5dIpuYRVhuwu_B07gD/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1f3bN-dV1zVhfkZD56dL2jUig9woa4pIS/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1gwUL3aJy0hhSHUCQnaPcj-soKy_R2pKk/view?usp=sharing" }
  ]},
  { id: 4, subject: "Introduction to Problem Solving and Programming", code: "CSE1021", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/128kwuH1g82OTG1ByJ2VrWjJVFdOVY2NG/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1Z8Ht-xi4tve2i-fS3b6jLkk6JT4T82RI/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/1oAhpIpT0YtxrOMqvZAOq06N9u8QNYvS_/view?usp=sharing" }
  ]},
  { id: 5, subject: "Data Structures and Algorithms", code: "CSE2002", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1kGLOTCsB9Nk3FJj2feXUZZu7rkS0x2WU/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1RtZfx9_2ic5eYOYWvcXfoURtJjGSTGc-/view?usp=sharing" }
  ]},
  { id: 6, subject: "Python Programming", code: "CSE3011", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1QPYQR_XNjGAjXHySwDZVgXlE4GwE9SIR/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1_V5fS-zip1dkWwLup_nCNoG6d0u2Ljne/view?usp=sharing" }
  ]},
  { id: 7, subject: "Electromagnetic Theory & Transmission Lines", code: "EAC2002", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1Xk7OpzO6BekMystqLCbpQTa_lEO-h0iU/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1Ljpsg6q6FcnyMC3Je3XPqjILlinPHr0m/view?usp=sharing" }
  ]},
  { id: 8, subject: "Analog Electronics", code: "EAC1002", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1cP8oXsygLCRxLJkmRaFI5dXuUtPmqMop/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1j3W1jON5vIjwQGTood6qhEmmvpOWApFU/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1qELVlv5swSCX4z0S-2ghpnqbTKTCFnFR/view?usp=sharing" }
  ]},
  { id: 9, subject: "Digital Logic Design", code: "ECE2002", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1JamP5uqH6Zel-L3eCNX8LP-vWgyd-hOQ/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1jRXaKQOfA9adYrHkui8dMn7aQXFZZO5Y/view?usp=sharing" },
      { name: "Paper 3", type: "Supplementary", link: "https://drive.google.com/file/d/1O8MfVk3RIOtBTDEnjjVShBwED0PcE0V2/view?usp=sharing" }
  ]},
  { id: 10, subject: "Signals and Systems", code: "ECE2003", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1gfUopilOdvSlfG0LyqUhR8yJw93dorEh/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1GEqAv2_cXDy9XQO6QolaA7FemwQaHyHQ/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1bj1kHITrzL-srTpRkZ1Fz44C0MjxBOUF/view?usp=sharing" }
  ]},
  { id: 11, subject: "Microprocessors & Microcontrollers", code: "ECE3004", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/13uBlJuGI96VbusgAr7SetohwwNDMZO6n/view?usp=sharing" }
  ]},
  { id: 12, subject: "Electric Circuits and Systems", code: "EEE1001", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/15MJMotDk__o8qKWoEPrYFHsH3LTRXP5P/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1sSsiIUO-b68HZncw5j2LetJ8EBPOY7eK/view?usp=sharing" },
      { name: "Paper 3", type: "Supplementary", link: "https://drive.google.com/file/d/17Nf0Zb5WP4LGLRwLCuJkvZPEp35-RaCd/view?usp=sharing" },
      { name: "Paper 4", type: "Term End", link: "https://drive.google.com/file/d/1bRBjlrN7CHIkBtb7d-E4tDc90vECsm3n/view?usp=sharing" }
  ]},
  { id: 13, subject: "Network Analysis", code: "EEE2001", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1HujRsUNujDmOl7lqWD_PhhjcvMyfcWLN/view?usp=sharing" }
  ]},
  { id: 14, subject: "Effective Technical Communication", code: "ENG1004", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1-ZepXIKgF_8x0QmVjdL7nCTSEAuEjk7E/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1NFXnIcjrT19V1LXAFo1OgDIU0wTygo3t/view?usp=sharing" }
  ]},
  { id: 15, subject: "Control Systems", code: "EEE3003", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1McSdR0zG5ozS3-kbxBi_JCaoPzD9QabQ/view?usp=sharing" }
  ]},
  { id: 16, subject: "Advance Technical Communication", code: "ENG2005", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1ub4V3iUCUwch0p7E1OjI9LKeNL9yu8gD/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1731-7Uh8_M9DeCXKLLZOT1JgGFAXIvQ8/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1CEnLAZP37u1M4F5bdx5NF4u22BP0OZIE/view?usp=sharing" }
  ]},
  { id: 17, subject: "Emotional Intelligence", code: "HUM1002", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1AhIpWRAGgSAO2eQEIu5A1yC-4PQcZe2Y/view?usp=sharing" }
  ]},
  { id: 18, subject: "Calculus", code: "MAT1003", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/11ErOxaf4FduTxCx1wV6Ye5XDApeSmcRO/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1QMqtep-bz93cNGPgt6VQRzOF7mqG3D9a/view?usp=sharing" }
  ]},
  { id: 19, subject: "Differential and Difference Equation", code: "MAT2001", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1D2yE3NnSaLSkvZ3tWniUBCgvbqM2h4Al/view?usp=sharing" }
  ]},
  { id: 20, subject: "Discrete Mathematics and Graph Theory", code: "MAT2002", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1y54z6O6FSoCM1phjDlntyq5bW3-DWkgr/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/17Q4fRAo5-owQwpoYWTUrHoQ8w16EHeLW/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1HKHbu4SgeyQlT8GKkhKzh81q4UCswhWq/view?usp=sharing" },
      { name: "Paper 4", type: "Supplementary", link: "https://drive.google.com/file/d/1_FKZ26pV_P6S9UtnLoaTJUK2JP9Y7CGn/view?usp=sharing" }
  ]},
  { id: 21, subject: "Transform Techniques and Difference Equations", code: "MAT2005", papers: [
      { name: "Paper 1", type: "Term End", link: "https://drive.google.com/file/d/1QGbvteOurJRo0NAihe5RQ0g0KCUIGuv6/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1Fcbw6Eid4N_MMTgM_IvCDZIXt2SONe27/view?usp=sharing" },
      { name: "Paper 3", type: "Mid Term", link: "https://drive.google.com/file/d/1dy6JjCWaayf5EolywwFjqxcJCIFMyu1_/view?usp=sharing" }
  ]},
  { id: 22, subject: "Applied Linear Algebra", code: "MAT3002", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1jX93VTK8lwzei3JqhOxf9L0OEH2x6T2L/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1x8HYAxl0iw5HfHi_g_Jqj1Dd98TsQOh_/view?usp=sharing" }
  ]},
  { id: 23, subject: "Probability Statistics and Reliability", code: "MAT3003", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1WlQl-VvV9ugnU-zwx23w1Esx5Gtb9Gn5/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1wiMMVTa0tt75TWsMHDD61vWvibwVl4NU/view?usp=sharing" }
  ]},
  { id: 24, subject: "Random Process", code: "MAT3004", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1jNEx0eYLDySODCLBs1YsKxirUiy2n5si/view?usp=sharing" }
  ]},
  { id: 25, subject: "Engineering Design and Modelling", code: "MEE2014", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1H34WF1cwCJJli37on3fgnYOnl1mP0Mam/view?usp=sharing" },
      { name: "Paper 2", type: "Term End", link: "https://drive.google.com/file/d/1xYyIuaFvSBzc_xakElmePNMUQAYpQFeF/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/1xFZdaiy3kAhMzmiGRwt0IrjGrAwnn1/view?usp=sharing" }
  ]},
  { id: 26, subject: "Engineering Physics", code: "PHY1001", papers: [
      { name: "Paper 1", type: "Mid Term", link: "https://drive.google.com/file/d/1-1n0ijJEiSzUhP85LkASPJbRd0-kGO7F/view?usp=sharing" },
      { name: "Paper 2", type: "Mid Term", link: "https://drive.google.com/file/d/1ri16064jiPgrRmHakk048QzBVwVFcvkM/view?usp=sharing" },
      { name: "Paper 3", type: "Term End", link: "https://drive.google.com/file/d/143oieHKEIJlQPLq87FvUipeKL-8wVaeS/view?usp=sharing" },
      { name: "Paper 4", type: "Supplementary", link: "https://drive.google.com/file/d/1gSRnflQNJxXwW528XCRFLRt-Prrv4Le_/view?usp=sharing" }
  ]},
];

// Color per paper type
const typeConfig = {
  'Term End': {
    bg: 'rgba(139,92,246,0.12)',
    border: 'rgba(139,92,246,0.25)',
    color: '#c4b5fd',
    dot: '#8b5cf6',
  },
  'Mid Term': {
    bg: 'rgba(244,114,182,0.1)',
    border: 'rgba(244,114,182,0.25)',
    color: '#f9a8d4',
    dot: '#ec4899',
  },
  'Supplementary': {
    bg: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.22)',
    color: '#fed7aa',
    dot: '#f97316',
  },
};

function PaperTag({ type }) {
  const cfg = typeConfig[type] || typeConfig['Term End'];
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '2px 8px',
      borderRadius: '100px',
      fontSize: '0.65rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      background: cfg.bg,
      border: `1px solid ${cfg.border}`,
      color: cfg.color,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: cfg.dot, display: 'inline-block' }} />
      {type}
    </span>
  );
}

export default function PYQDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = pyqData.filter(
    (item) =>
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 mt-8">

      {/* Page header */}
      <div className="mb-8">
        <p style={{ fontSize: '0.72rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '0.5rem' }}>
          ✦ Study Material
        </p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          color: '#f8f4ff',
          marginBottom: '0.5rem',
        }}>
          PYQs Archive
        </h2>
        <p style={{ color: '#6b5f87', fontSize: '0.9rem' }}>
          Search and download previous year question papers for all subjects.
        </p>
      </div>

      {/* Search bar */}
      <div style={{ position: 'relative', marginBottom: '2rem', maxWidth: '480px' }}>
        {/* SVG search icon — no emoji blob */}
        <svg
          aria-hidden="true"
          style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', pointerEvents: 'none' }}
          fill="none" stroke="rgba(167,139,250,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search by subject name or code..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 2.5rem',
            borderRadius: '14px',
            fontSize: '0.9rem',
            backdropFilter: 'blur(8px)',
          }}
        />
      </div>

      {/* Count badge */}
      <p style={{ color: '#5a4f72', fontSize: '0.78rem', marginBottom: '1.5rem' }}>
        Showing <span style={{ color: '#a78bfa', fontWeight: 600 }}>{filtered.length}</span> of {pyqData.length} subjects
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <SubjectCard key={item.id + item.code} item={item} />
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          color: '#5a4f72',
          fontStyle: 'italic',
        }}>
          No subjects found for "{searchTerm}"
        </div>
      )}
    </div>
  );
}

function SubjectCard({ item }) {
  const cardStyle = {
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(139,92,246,0.12)',
    borderRadius: '18px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.2s, transform 0.2s',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.28)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.12)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Top shimmer */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.35), transparent)',
      }} />

      {/* Subject code badge */}
      <span style={{
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: '8px',
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        background: 'rgba(139,92,246,0.12)',
        border: '1px solid rgba(139,92,246,0.22)',
        color: '#a78bfa',
        marginBottom: '0.6rem',
        width: 'fit-content',
      }}>
        {item.code}
      </span>

      {/* Subject name */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: '0.95rem',
        color: '#e2d9f3',
        lineHeight: 1.35,
        marginBottom: '1rem',
      }}>
        {item.subject}
      </h3>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(139,92,246,0.1)', paddingTop: '0.75rem' }}>
        <p style={{ fontSize: '0.65rem', color: '#5a4f72', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          Available Papers
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {item.papers.map((paper, idx) => {
            const cfg = typeConfig[paper.type] || typeConfig['Term End'];
            return (
              <a
                key={idx}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  textDecoration: 'none',
                  transition: 'background 0.15s, border-color 0.15s',
                  gap: '0.5rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = cfg.bg;
                  e.currentTarget.style.borderColor = cfg.border;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                <span style={{ fontSize: '0.8rem', color: '#c4b5fd', fontWeight: 500 }}>
                  {paper.name}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
                  <PaperTag type={paper.type} />
                  <span style={{ fontSize: '0.85rem', opacity: 0.5 }}>↓</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}