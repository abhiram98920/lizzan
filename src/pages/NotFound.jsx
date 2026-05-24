import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#051a21', color: '#fff', textAlign: 'center', padding: '24px' }}>
      <Helmet>
        <title>Page Not Found | Lizzan Holidays</title>
      </Helmet>
      
      <h1 style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', fontWeight: 900, color: 'rgba(212,175,55,0.2)', margin: 0, lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '24px', fontFamily: '"SF Pro Display", serif' }}>Lost your way?</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '400px' }}>We couldn't find the page you were looking for. Let's get you back on the right path.</p>
      
      <Link to="/" style={{ background: '#D4AF37', color: '#082B36', textDecoration: 'none', fontWeight: 800, padding: '16px 36px', borderRadius: '8px', transition: 'transform 0.2s, box-shadow 0.2s' }}
        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,175,55,0.4)'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        ← Back to Homepage
      </Link>
    </div>
  )
}
