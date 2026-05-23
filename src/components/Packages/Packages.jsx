import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './Packages.module.css'

const PACKAGES = [
  {
    id: 'intl',
    title: 'International Tours',
    desc: 'Explore iconic world destinations with fully managed itineraries, visa support, and exclusive group discounts.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800',
    routes: ['Europe Highlights', 'Dubai Luxury', 'Maldives Getaway', 'Singapore & Bali']
  },
  {
    id: 'dom',
    title: 'Domestic Tours',
    desc: 'Rediscover India\'s incredible diversity — from the backwaters of Kerala to the deserts of Rajasthan.',
    img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800',
    routes: ['Kerala Backwaters', 'Kashmir Paradise', 'Golden Triangle', 'Andaman Escape']
  }
]

export default function Packages() {
  const secRef = useRef(null)
  
  useEffect(() => {
    const cards = secRef.current.querySelectorAll('[data-reveal]')
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      )
    })
  }, [])

  return (
    <section ref={secRef} id="packages" className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.eyebrow}>Tour Packages</span>
          <h2 className={s.title}>Curated Experiences</h2>
          <p className={s.sub}>Choose between our perfectly planned domestic escapes and luxurious international adventures.</p>
        </div>

        <div className={s.cards}>
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className={s.pkgCard} data-reveal style={{ backgroundImage: `url(${pkg.img})` }}>
              <div className={s.pkgOverlay} />
              <div className={s.pkgContent}>
                <span className={s.pkgBadge}>{pkg.id === 'intl' ? '🌍 International' : '🇮🇳 Domestic'}</span>
                <h3 className={s.pkgTitle}>{pkg.title}</h3>
                <p className={s.pkgDesc}>{pkg.desc}</p>
                <ul className={s.pkgRoutes}>
                  {pkg.routes.map(r => <li key={r}><span className={s.routeDot}/>{r}</li>)}
                </ul>
                <a href="#contact" className={s.pkgCta}>Enquire Now →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
