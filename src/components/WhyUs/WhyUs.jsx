import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './WhyUs.module.css'

const REASONS = [
  { icon:'🧭', num:'01', title:'Expert Guidance', body:'15+ years of crafting tailor-made tours. Our experienced team ensures every detail — from visas to transfers — is handled seamlessly.' },
  { icon:'💰', num:'02', title:'Best Value',       body:'We negotiate the best rates with airlines, hotels and operators so you get premium experiences at fair prices. No hidden fees, ever.' },
  { icon:'📞', num:'03', title:'24/7 Support',     body:'Travel doesn\'t stop at 5pm — and neither do we. Reach our dedicated support team any time, from anywhere in the world.' },
  { icon:'❤️', num:'04', title:'Trusted by 10,000+', body:'Over a decade of happy travellers and returning families. Our reputation is built on genuine care, not just transactions.' },
]

export default function WhyUs() {
  const secRef = useRef(null)

  useEffect(() => {
    // Apple-style smooth reveal
    const items = secRef.current.querySelectorAll('[data-item]')
    const header = secRef.current.querySelector('[data-header]')
    
    gsap.fromTo(header,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )

    gsap.fromTo(items,
      { opacity: 0, y: 40, filter: 'blur(10px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out', stagger: 0.15,
        scrollTrigger: { trigger: secRef.current, start: 'top 60%', toggleActions: 'play none none reverse' },
      }
    )
  }, [])

  return (
    <section ref={secRef} className={s.section}>
      <div className={s.bgLayer} />
      <div className={s.inner}>
        <div className={s.left} data-header>
          <span className={s.eyebrow}>Why Lizzan?</span>
          <h2 className={s.title}>The Difference<br />is in the Details</h2>
          <p className={s.sub}>We don't just book trips. We engineer experiences that leave you speechless and coming back for more.</p>
          <a href="#contact" className={s.cta}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'text-bottom'}}><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
            Start Planning
          </a>
        </div>
        <div className={s.right}>
          {REASONS.map(r => (
            <div key={r.num} className={s.item} data-item>
              <div className={s.itemHeader}>
                <span className={s.icon}>{r.icon}</span>
                <span className={s.num}>{r.num}</span>
              </div>
              <h3 className={s.iTitle}>{r.title}</h3>
              <p className={s.iBody}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
