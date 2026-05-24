import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import ContactMap from '../components/ContactMap/ContactMap'

export default function Contact() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#051a21', color: '#fff' }}>
      <Helmet>
        <title>Contact Us | Lizzan Holidays</title>
        <meta name="description" content="Get in touch with Lizzan Holidays for your travel bookings, corporate trips, or custom itinerary requests." />
      </Helmet>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={{ fontFamily: '"SF Pro Display", serif', fontSize: '3.5rem', color: '#fff', marginBottom: '16px' }}>Get in Touch</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>Ready to start your next adventure? Reach out to our travel experts today.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px', alignItems: 'center', background: 'linear-gradient(135deg, rgba(5,26,33,0.95) 0%, rgba(5,26,33,0.4) 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', padding: '40px', borderRadius: '16px', borderTop: '4px solid #D4AF37', backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2000')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,26,33,0.95) 0%, rgba(5,26,33,0.4) 100%)', zIndex: 1, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
          
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '16px' }}>Contact Details</h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', marginBottom: '12px' }}><span>📞</span> +91 98765 43210</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', marginBottom: '12px' }}><span>✉️</span> info@lizzanholidays.com</p>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.05rem', lineHeight: 1.5 }}><span>📍</span> Lizzan Holidays, 123 Travel Avenue, Cochin, Kerala, India - 682001</p>
            </div>
            
            <div>
              <h3 style={{ color: '#D4AF37', fontSize: '1.25rem', marginBottom: '16px' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Instagram</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Facebook</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>WhatsApp</a>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative', zIndex: 2, background: 'rgba(5, 26, 33, 0.6)', backdropFilter: 'blur(12px)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}
