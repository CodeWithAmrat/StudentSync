import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'VTOP Portal',
    description: 'Official Student Portal',
    url: 'https://vtop.vitbhopal.ac.in/vtop/open/page',
    emoji: '🎓',
    accent: '#60a5fa',
    glow: 'rgba(96,165,250,0.12)',
    border: 'rgba(96,165,250,0.2)',
    isInternal: false,
  },
  {
    title: 'Faculty & Library',
    description: 'Search faculty cabins and contacts',
    url: '/directory',
    emoji: '📚',
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.2)',
    isInternal: true,
  },
  {
    title: 'PYQs Archive',
    description: 'Download previous year question papers',
    url: '/pyqs',
    emoji: '📝',
    accent: '#f472b6',
    glow: 'rgba(244,114,182,0.1)',
    border: 'rgba(244,114,182,0.2)',
    isInternal: true,
  },
  {
    title: 'SGPA Calculator',
    description: 'Calculate your semester GPA instantly',
    url: '/sgpa-calculator',
    emoji: '🧮',
    accent: '#fb923c',
    glow: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.2)',
    isInternal: true,
  },
  {
    title: 'GPA Target Planner',
    description: 'Plan your required SGPA for your target CGPA',
    url: '/gpa-improver',
    emoji: '📈',
    accent: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.22)',
    isInternal: true,
  },
  {
    title: 'Feedback',
    description: 'Share your feedback and suggestions',
    url: '/#feedback-section',
    emoji: '💬',
    accent: '#2dd4bf',
    glow: 'rgba(45,212,191,0.1)',
    border: 'rgba(45,212,191,0.2)',
    isInternal: false,
  },
];

function Card({ link }) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1.5rem',
    borderRadius: '20px',
    border: `1px solid ${link.border}`,
    background: `radial-gradient(ellipse at top, ${link.glow} 0%, rgba(16,13,26,0.8) 70%)`,
    backdropFilter: 'blur(12px)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const handleEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = `0 8px 32px ${link.glow}`;
    e.currentTarget.style.borderColor = link.accent.replace(')', ', 0.45)').replace('rgb', 'rgba');
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = link.border;
  };

  const inner = (
    <>
      {/* Top shimmer line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: `linear-gradient(90deg, transparent, ${link.accent}60, transparent)`,
      }} />
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' }}>
        {link.emoji}
      </div>
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: '1rem',
        color: link.accent,
        marginBottom: '0.4rem',
        textAlign: 'center',
      }}>
        {link.title}
      </h3>
      <p style={{ fontSize: '0.8rem', color: '#6b5f87', textAlign: 'center', lineHeight: 1.5, fontWeight: 400 }}>
        {link.description}
      </p>
    </>
  );

  if (link.isInternal) {
    return (
      <Link to={link.url} style={cardStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={link.url}
      target={link.url.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      style={cardStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {inner}
    </a>
  );
}

export default function QuickLinks() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-8 mb-12">
      {/* Section header */}
      <div className="mb-8">
        <p style={{ fontSize: '0.72rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '0.5rem' }}>
          ✦ Everything you need
        </p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          color: '#f8f4ff',
        }}>
          Quick Links
        </h2>
        <p style={{ color: '#6b5f87', marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Access your essential university tools and resources in one click.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {links.map((link, i) => <Card key={i} link={link} />)}
      </div>
    </div>
  );
}