import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import WhyUs from '../components/WhyUs/WhyUs'
import Testimonials from '../components/Testimonials/Testimonials'

export default function About() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#051a21', color: '#fff' }}>
      <Helmet>
        <title>About Us | Lizzan Holidays</title>
        <meta name="description" content="Learn more about Lizzan Holidays, our mission, and why we are the best choice for your travel needs." />
      </Helmet>
      
      <div style={{ textAlign: 'center', padding: '60px 24px' }}>
        <h1 style={{ fontFamily: '"SF Pro Display", serif', fontSize: '3.5rem', color: '#D4AF37', marginBottom: '24px' }}>Our Story</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
          Lizzan Holidays was founded with a single mission: to provide unparalleled travel experiences that create lifelong memories. From the serene backwaters of Kerala to the bustling streets of Dubai, we meticulously craft itineraries that cater to every traveler's unique dreams. With years of expertise in the travel industry, our dedicated team ensures that your journey is seamless, luxurious, and unforgettable.
        </p>
      </div>

      <WhyUs />
      <Testimonials />
    </div>
  )
}
