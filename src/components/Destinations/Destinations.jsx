import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './Destinations.module.css'

import { Link } from 'react-router-dom'
import { DESTINATIONS as DEST } from '../../data'

export default function Destinations() {
  const secRef = useRef(null)

  useEffect(() => {
    const cards = secRef.current.querySelectorAll('[data-dest]')
    gsap.fromTo(cards,
      { opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' },
      {
        opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out', stagger: 0.1,
        scrollTrigger: { trigger: secRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  }, [])

  return (
    <section ref={secRef} id="destinations" className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.eyebrow}>Popular Destinations</span>
          <h2 className={s.title}>Where to Next?</h2>
        </div>
        <div className={s.grid}>
          {DEST.map(d => (
            <Link to={`/destination/${d.id}`} key={d.id} className={s.card} data-dest>
              <div className={s.imgBg} style={{ backgroundImage: `url(${d.img})` }} />
              <div className={s.overlay} />
              <div className={s.content}>
                <h4 className={s.name}>{d.name}</h4>
                <span className={s.explore}>Explore <span>→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
