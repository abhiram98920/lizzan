import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SERVICES } from '../data'

export default function Services() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: '#051a21', color: '#fff' }}>
      <Helmet>
        <title>Our Services | Lizzan Holidays</title>
        <meta name="description" content="Explore our comprehensive travel services, from flight bookings to customised international tours." />
      </Helmet>

      <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: '64px' }}>
        <span style={{ display: 'inline-block', background: 'rgba(212,175,55,.15)', border: '1px solid rgba(212,175,55,.4)', color: '#F0D682', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '8px', marginBottom: '24px' }}>What We Do</span>
        <h1 style={{ fontFamily: '"SF Pro Display", serif', fontSize: '3rem', color: '#fff', marginBottom: '16px' }}>Complete Travel Solutions</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.6 }}>We take care of every detail of your journey, ensuring a seamless and luxurious experience from start to finish.</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {SERVICES.map(([icon, name, id, desc]) => (
          <Link key={id} to={`/service/${id}`} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '32px', textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <span style={{ fontSize: '3rem', marginBottom: '16px' }}>{icon}</span>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#D4AF37' }}>{name}</h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, flex: 1 }}>{desc}</p>
            <div style={{ marginTop: '24px', fontSize: '0.9rem', fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Explore <span style={{ color: '#D4AF37' }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
