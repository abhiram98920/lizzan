import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: '#051a21', color: '#fff', padding: '120px 24px 80px' }}>
      <Helmet><title>Privacy Policy | Lizzan Holidays</title></Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
        <h1 style={{ fontFamily: '"SF Pro Display", serif', fontSize: '2.5rem', color: '#D4AF37', marginBottom: '32px' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>At Lizzan Holidays, your privacy is of utmost importance to us. This policy outlines how we collect, use, and protect your personal information.</p>
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>Information Collection</h2>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>We collect information required to process your bookings, including names, contact details, passport information, and payment details.</p>
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>Data Security</h2>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>Your data is encrypted and securely stored. We do not sell or share your personal information with third parties outside of necessary booking channels (airlines, hotels).</p>
      </div>
    </div>
  )
}
