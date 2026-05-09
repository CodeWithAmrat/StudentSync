import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleEmailAuth = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleGoogleAuth = () => {
    navigate('/dashboard');
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    fontSize: '0.9rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#a78bfa',
    marginBottom: '0.45rem',
    letterSpacing: '0.03em',
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '440px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(139,92,246,0.18)', borderRadius: '20px', backdropFilter: 'blur(16px)', padding: '2.25rem', position: 'relative', overflow: 'hidden' }}>

        {/* Top shimmer */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.55), rgba(236,72,153,0.35), transparent)' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.6rem' }}>
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Student</span>
            <span style={{ color: '#2dd4bf' }}>Sync</span>
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: '#f8f4ff', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
            {isLogin ? 'Welcome back' : 'Create account'}
          </h2>
          <p style={{ color: '#6b5f87', fontSize: '0.875rem' }}>
            {isLogin ? 'Enter your details to access StudentSync.' : 'Sign up to get started with StudentSync.'}
          </p>
        </div>

        {/* Google button */}
        <button onClick={handleGoogleAuth}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '0.78rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2d9f3', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s', marginBottom: '1.25rem', fontFamily: "'DM Sans', sans-serif" }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <svg style={{ width: 18, height: 18, flexShrink: 0 }} viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(139,92,246,0.15)' }} />
          <span style={{ color: '#5a4f72', fontSize: '0.75rem', fontWeight: 500, whiteSpace: 'nowrap' }}>or continue with email</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(139,92,246,0.15)' }} />
        </div>

        {/* Form */}
        <form onSubmit={handleEmailAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {!isLogin && (
            <div>
              <label style={labelStyle}>Full Name</label>
              <input type="text" required placeholder="John Doe" style={inputStyle} />
            </div>
          )}

          <div>
            <label style={labelStyle}>Email Address</label>
            <input type="email" required placeholder="student@example.com" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Password</label>
            <input type="password" required placeholder="••••••••" style={inputStyle} />
          </div>

          <button type="submit"
            style={{ width: '100%', padding: '0.85rem 1.5rem', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #7c3aed, #db2777)', color: 'white', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 0 24px rgba(139,92,246,0.3)', transition: 'opacity 0.2s, transform 0.15s', marginTop: '0.25rem', fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {isLogin ? 'Sign In →' : 'Create Account →'}
          </button>
        </form>

        {/* Toggle */}
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#5a4f72', fontSize: '0.85rem' }}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setIsLogin(!isLogin)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#a78bfa', fontWeight: 700, fontSize: '0.85rem', padding: 0, transition: 'color 0.2s', fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={e => e.currentTarget.style.color = '#c4b5fd'}
            onMouseLeave={e => e.currentTarget.style.color = '#a78bfa'}
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>

      </div>
    </div>
  );
}