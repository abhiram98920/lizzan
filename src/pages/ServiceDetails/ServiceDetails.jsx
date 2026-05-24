import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { SERVICES } from '../../data'
import s from './ServiceDetails.module.css'

export default function ServiceDetails() {
  const { id } = useParams()
  const service = SERVICES.find(s => s[2] === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!service) {
    return (
      <div className={s.notFound}>
        <h1>Service Not Found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    )
  }

  const [icon, name, slug, desc] = service

  return (
    <div className={s.page}>
      <Helmet>
        <title>{name} | Lizzan Holidays Services</title>
        <meta name="description" content={`Explore our ${name} services. ${desc}`} />
      </Helmet>
      
      <div className={s.hero}>
        <div className={s.iconWrap}>{icon}</div>
        <h1 className={s.title}>{name}</h1>
        <p className={s.desc}>{desc}</p>
        
        <div className={s.actions}>
          <Link to="/#contact" className={s.btnRed}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            Send Enquiry
          </Link>
          <Link to="/" className={s.btnOutline}>← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
