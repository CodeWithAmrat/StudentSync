import { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', issueType: 'Bug', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) { setError('Name is required'); return false; }
    if (!formData.email.trim()) { setError('Email is required'); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { setError('Please enter a valid email address'); return false; }
    if (!formData.issueType) { setError('Issue type is required'); return false; }
    if (!formData.message.trim()) { setError('Message is required'); return false; }
    if (formData.message.trim().length < 10) { setError('Message must be at least 10 characters'); return false; }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!validateForm()) return;
    setLoading(true);
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    try {
      const response = await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.statusText}`);
      }
      setSuccess(true);
      setFormData({ name: '', email: '', issueType: 'Bug', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    fontSize: '0.9rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#a78bfa',
    marginBottom: '0.5rem',
    letterSpacing: '0.03em',
  };

  return (
    <div id="feedback-section" className="max-w-2xl mx-auto px-4 sm:px-6 mt-8 mb-16">

      {/* Page header */}
      <div className="mb-6">
        <p style={{ fontSize: '0.72rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '0.5rem' }}>
          ✦ Get in touch
        </p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#f8f4ff', marginBottom: '0.4rem' }}>
          Send Us Feedback
        </h2>
        <p style={{ color: '#6b5f87', fontSize: '0.9rem' }}>
          Help us improve StudentSync by sharing your thoughts and suggestions.
        </p>
      </div>

      {/* Card */}
      <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '20px', backdropFilter: 'blur(14px)', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.5), rgba(236,72,153,0.3), transparent)' }} />

        {/* Success banner */}
        {success && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.25)', color: '#2dd4bf', padding: '0.85rem 1rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
            <span style={{ fontSize: '1.1rem' }}>✓</span>
            Thank you! Your feedback has been submitted successfully.
          </div>
        )}

        {/* Error banner */}
        {error && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5', padding: '0.85rem 1rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
            <span>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Name */}
          <div>
            <label htmlFor="name" style={labelStyle}>
              Name <span style={{ color: '#f87171' }}>*</span>
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email <span style={{ color: '#f87171' }}>*</span>
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" style={inputStyle} />
          </div>

          {/* Issue Type */}
          <div>
            <label htmlFor="issueType" style={labelStyle}>
              Issue Type <span style={{ color: '#f87171' }}>*</span>
            </label>
            <select id="issueType" name="issueType" value={formData.issueType} onChange={handleChange} style={inputStyle}>
              <option value="Bug">🐛 Bug Report</option>
              <option value="Suggestion">💡 Suggestion</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" style={labelStyle}>
              Message <span style={{ color: '#f87171' }}>*</span>
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange}
              placeholder="Please describe your feedback in detail..."
              rows="5"
              style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
            />
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading}
            style={{
              width: '100%',
              padding: '0.9rem 1.5rem',
              borderRadius: '12px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.2s, transform 0.15s',
              background: loading
                ? 'rgba(255,255,255,0.06)'
                : 'linear-gradient(135deg, #7c3aed, #db2777)',
              color: loading ? '#5a4f72' : 'white',
              boxShadow: loading ? 'none' : '0 0 24px rgba(139,92,246,0.3)',
            }}
            onMouseEnter={e => { if (!loading) { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {loading ? 'Submitting...' : 'Submit Feedback →'}
          </button>

        </form>
      </div>
    </div>
  );
}