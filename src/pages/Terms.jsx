import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Terms() {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: '#051a21', color: '#fff', padding: '120px 24px 80px' }}>
      <Helmet><title>Terms & Conditions | Lizzan Holidays</title></Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
        <h1 style={{ fontFamily: '"SF Pro Display", serif', fontSize: '2.5rem', color: '#D4AF37', marginBottom: '32px' }}>Terms & Conditions</h1>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>By booking with Lizzan Holidays, you agree to the following terms and conditions.</p>
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>Booking & Payments</h2>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>A minimum advance payment is required to confirm bookings. The remaining balance must be cleared before the travel date as per the provided schedule.</p>
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>Liability</h2>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>Lizzan Holidays acts as an agent for airlines, hotels, and transport operators. We are not liable for delays, accidents, or losses caused by these third parties.</p>
      </div>
    </div>
  )
}
