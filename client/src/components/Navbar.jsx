import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/directory', label: 'Directory' },
    { to: '/pyqs', label: 'PYQs' },
    { to: '/sgpa-calculator', label: 'SGPA' },
    { href: '/#feedback-section', label: 'Contact' },
  ];

  const isActive = (to) => to && location.pathname === to;

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(10, 8, 18, 0.75)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 font-extrabold text-xl tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Student
            </span>
            <span style={{ color: '#2dd4bf' }}>Sync</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              const baseStyle = {
                padding: '0.4rem 0.85rem',
                borderRadius: '100px',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s',
                textDecoration: 'none',
              };
              const activeStyle = {
                ...baseStyle,
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#c4b5fd',
                border: '1px solid rgba(139, 92, 246, 0.3)',
              };
              const inactiveStyle = {
                ...baseStyle,
                color: '#9d8fbb',
                border: '1px solid transparent',
              };

              if (link.href) {
                return (
                  <a key={link.label} href={link.href} style={inactiveStyle}
                    onMouseEnter={e => e.target.style.color = '#f8f4ff'}
                    onMouseLeave={e => e.target.style.color = '#9d8fbb'}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link key={link.label} to={link.to} style={active ? activeStyle : inactiveStyle}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#f8f4ff'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#9d8fbb'; }}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="https://vtop.vitbhopal.ac.in/vtop/open/page"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '0.5rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '100px',
                fontSize: '0.875rem',
                fontWeight: 500,
                background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                color: 'white',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.15s',
                boxShadow: '0 0 20px rgba(139,92,246,0.25)',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              VTOP →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            style={{ color: '#9d8fbb' }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            background: 'rgba(10, 8, 18, 0.97)',
            borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
            backdropFilter: 'blur(20px)',
          }}
          className="md:hidden absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const style = {
                display: 'block',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                color: '#9d8fbb',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              };
              if (link.href) {
                return (
                  <a key={link.label} href={link.href} style={style} onClick={toggleMenu}>{link.label}</a>
                );
              }
              return (
                <Link key={link.label} to={link.to} style={style} onClick={toggleMenu}>{link.label}</Link>
              );
            })}
            <a
              href="https://vtop.vitbhopal.ac.in/vtop/open/page"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              style={{
                display: 'block',
                marginTop: '0.5rem',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(219,39,119,0.15))',
                border: '1px solid rgba(139,92,246,0.25)',
                color: '#c4b5fd',
                fontWeight: 500,
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              VTOP Portal →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}