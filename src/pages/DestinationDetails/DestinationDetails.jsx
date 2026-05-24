import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { DESTINATIONS } from '../../data'
import s from './DestinationDetails.module.css'

export default function DestinationDetails() {
  const { id } = useParams()
  const dest = DESTINATIONS.find(d => d.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!dest) {
    return (
      <div className={s.notFound}>
        <h1>Destination Not Found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className={s.page}>
      <Helmet>
        <title>{dest.name} Tour Packages | Lizzan Holidays</title>
        <meta name="description" content={`Book amazing ${dest.name} tour packages with Lizzan Holidays. ${dest.desc}`} />
      </Helmet>
      
      <div className={s.hero} style={{ backgroundImage: `url(${dest.img})` }}>
        <div className={s.overlay} />
        <div className={s.content}>
          <span className={s.tag}>Destination</span>
          <h1 className={s.title}>{dest.name}</h1>
          <p className={s.desc}>{dest.desc}</p>
          
          <div className={s.actions}>
            <Link to="/#contact" className={s.btnRed}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
              Enquire Now
            </Link>
            <Link to="/" className={s.btnOutline}>← Back to Home</Link>
          </div>
        </div>
      </div>

      <div className={s.bodyContent}>
        <div className={s.section}>
          <h2>Experience {dest.name} Like Never Before</h2>
          <p>Our tailored packages to {dest.name} cover everything from flights, luxury stays, and guided sightseeing, ensuring a seamless holiday. Whether you are looking for a romantic honeymoon, an adventurous family trip, or a solo escape, we have the perfect itinerary for you.</p>
        </div>

        <div className={s.gridContainer}>
          <div className={s.gridCol}>
            <h3>Things to Explore</h3>
            <ul className={s.exploreList}>
              {dest.explore?.map((item, i) => (
                <li key={i} className={s.cardItem}>
                  <span className={s.checkIcon}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.gridCol}>
            <h3>Travel Ideas</h3>
            <div className={s.ideasList}>
              {dest.ideas?.map((idea, i) => (
                <div key={i} className={s.cardItem}>{idea}</div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.section}>
          <h2>Sample Itinerary</h2>
          <div className={s.itineraryList}>
            {dest.itinerary?.map((day, i) => (
              <div key={i} className={s.itineraryDay}>
                <div className={s.dayBadge}>Day {day.day}</div>
                <div className={s.dayContent}>
                  <h4>{day.title}</h4>
                  <p>{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
