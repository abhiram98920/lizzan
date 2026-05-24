import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Cancellation() {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: '#051a21', color: '#fff', padding: '120px 24px 80px' }}>
      <Helmet><title>Cancellation Policy | Lizzan Holidays</title></Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
        <h1 style={{ fontFamily: '"SF Pro Display", serif', fontSize: '2.5rem', color: '#D4AF37', marginBottom: '32px' }}>Cancellation Policy</h1>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>We understand that plans can change. Below is our standard cancellation policy.</p>
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>Refund Structure</h2>
        <ul style={{ color: 'rgba(255,255,255,0.8)', paddingLeft: '24px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>30+ days before travel: 90% refund.</li>
          <li style={{ marginBottom: '8px' }}>15-29 days before travel: 50% refund.</li>
          <li style={{ marginBottom: '8px' }}>Less than 15 days: No refund.</li>
        </ul>
        <p style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>Note: Flight cancellations are strictly subject to airline policies. Processing times for refunds may take up to 14 business days.</p>
      </div>
    </div>
  )
}
