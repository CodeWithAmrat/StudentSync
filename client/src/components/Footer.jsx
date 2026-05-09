import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(139, 92, 246, 0.12)',
        background: 'rgba(10, 8, 18, 0.6)',
        backdropFilter: 'blur(12px)',
        marginTop: 'auto',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="font-extrabold text-lg tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", textDecoration: 'none' }}
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

          {/* Center text */}
          <div
            className="flex flex-wrap justify-center items-center gap-2 text-sm font-medium"
            style={{ color: '#5a4f72' }}
          >
            <span>Made with 💻 &amp; ❤️</span>
            <span style={{ color: '#2a2040' }}>|</span>

            <a
              href="https://www.linkedin.com/in/codewithamrat"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.35rem 0.9rem',
                borderRadius: '100px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                color: '#a78bfa',
                fontWeight: 600,
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(139,92,246,0.18)';
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(139,92,246,0.1)';
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.25)';
              }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              Connect with me
            </a>
          </div>

          {/* Right: copyright */}
          <p style={{ color: '#3a3050', fontSize: '0.75rem' }}>© 2026 StudentSync</p>
        </div>
      </div>
    </footer>
  );
}