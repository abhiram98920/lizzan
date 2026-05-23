import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './Testimonials.module.css'

const REVIEWS = [
  { name: 'Sarah Jenkins', loc: 'United Kingdom', text: 'Lizzan Holidays planned our entire Europe trip flawlessly. The hotels were incredible and the visa process was completely stress-free.', rating: 5 },
  { name: 'Rahul Sharma', loc: 'India', text: 'Our family trip to Kerala was magical. They arranged a beautiful houseboat experience that we will never forget. Unmatched local knowledge.', rating: 5 },
  { name: 'Michael Chen', loc: 'Singapore', text: 'Used them for a corporate retreat in Dubai. Professional, responsive, and they managed a group of 40 people with zero hiccups.', rating: 5 },
]

export default function Testimonials() {
  const secRef = useRef(null)

  useEffect(() => {
    // Apple-style smooth reveal
    const header = secRef.current.querySelector('[data-header]')
    const cards = secRef.current.querySelectorAll('[data-review]')

    gsap.fromTo(header,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: secRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )

    gsap.fromTo(cards,
      { opacity: 0, y: 40, filter: 'blur(10px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out', stagger: 0.15,
        scrollTrigger: { trigger: secRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  }, [])

  return (
    <section ref={secRef} className={s.section}>
      <div className={s.inner}>
        <div className={s.header} data-header>
          <span className={s.eyebrow}>Testimonials</span>
          <h2 className={s.title}>Traveller Stories.</h2>
        </div>
        <div className={s.grid}>
          {REVIEWS.map((r, i) => (
            <div key={i} className={s.card} data-review>
              <span className={s.quoteMark}>"</span>
              <div className={s.stars}>{'★'.repeat(r.rating)}</div>
              <p className={s.text}>"{r.text}"</p>
              <div className={s.author}>
                <div className={s.avatar}>{r.name.charAt(0)}</div>
                <div>
                  <h4 className={s.name}>{r.name}</h4>
                  <span className={s.loc}>{r.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
